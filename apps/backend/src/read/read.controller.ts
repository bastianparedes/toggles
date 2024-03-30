import { Controller, Get } from '@nestjs/common';
import { ReadService } from './read.service';

@Controller('read')
export class ReadController {
  constructor(private readonly appService: ReadService) {}

  @Get()
  getApps() {
    return this.appService.getApps();
  }
}
