import { Controller, Get } from '@nestjs/common';
import { ReadService } from './read.service';

@Controller('read')
export class ReadController {
  constructor(private readonly appService: ReadService) {}

  @Get()
  get(appName: string) {
    return this.get(appName);
  }
}
