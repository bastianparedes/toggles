import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReadModule } from './read/read.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [ConfigModule.forRoot(), ReadModule, TrpcModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
