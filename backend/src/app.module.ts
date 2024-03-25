import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReadModule } from './read/read.module';
import { CreateService } from './create/create.service';
import { CreateController } from './create/create.controller';
import { CreateModule } from './create/create.module';
import { UpdateModule } from './update/update.module';

@Module({
  imports: [ConfigModule.forRoot(), ReadModule, CreateModule, UpdateModule],
  providers: [CreateService],
  controllers: [CreateController],
})
export class AppModule {}
