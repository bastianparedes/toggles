import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ReadController } from './read.controller';
import { ReadService } from './read.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ReadController],
  providers: [ReadService],
})
export class ReadModule {}
