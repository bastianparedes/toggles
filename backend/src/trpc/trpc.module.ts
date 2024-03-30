import { Module } from '@nestjs/common';
import { TrpcRouter } from '../trpc/trpc.router';
import { TrpcService } from '../trpc/trpc.service';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
