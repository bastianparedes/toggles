import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { getApps, getToggles, updateToggle } from '../utils/verceEdge';
import { keys } from '../utils/object';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    getApps: this.trpc.procedure.query(async () => {
      const rawApps = await getApps();
      const apps = keys(rawApps).map((appName) => {
        const togglesByApp = rawApps[appName];
        const toggleNames = keys(togglesByApp);

        return {
          name: appName,
          toggles: toggleNames.map((toggleName) => {
            return {
              name: toggleName,
              value: togglesByApp[toggleName],
            };
          }),
        };
      });
      return apps;
    }),
    updateToggle: this.trpc.procedure
      .input(
        z.object({
          appName: z.string(),
          toggleName: z.string(),
          value: z.boolean(),
        }),
      )
      .query(async ({ input }) => {
        const toggles = await getToggles(input.appName);
        toggles[input.toggleName] = input.value;
        return updateToggle(input.appName, input.value);
      }),
    hello: this.trpc.procedure.input(z.object({}).optional()).query(() => {
      return `Hello world`;
    }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
