import { Body, Controller, Post } from '@nestjs/common';
import environment from '../environments';

@Controller('create')
export class CreateController {
  @Post()
  async post(@Body('appName') appName: string) {
    try {
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
                operation: 'create',
                key: appName,
                value: {},
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
