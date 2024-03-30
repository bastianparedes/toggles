import { Body, Controller, Put } from '@nestjs/common';
import { UpdateService } from './update.service';
import environment from '../environments';

@Controller('update')
export class UpdateController {
  constructor(private readonly appService: UpdateService) {}

  @Put()
  async put(
    @Body('appName') appName: string,
    @Body('toggleName') toggleName: string,
    @Body('value') value: boolean,
  ) {
    try {
      const toggles = await this.appService.getToggles(appName);
      toggles[toggleName] = value;

      const updateEdgeConfig = await fetch(
        `https://api.vercel.com/v1/edge-config/${environment.EDGE_ID}/items`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${environment.VERCEL_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: [
              {
                operation: 'update',
                key: appName,
                value: toggles,
              },
            ],
          }),
        },
      );
      return await updateEdgeConfig.json();
    } catch (error) {
      return error;
    }
  }
}
