import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReadModule } from './read/read.module';

@Module({
  imports: [ConfigModule.forRoot(), ReadModule],
})
export class AppModule {}
