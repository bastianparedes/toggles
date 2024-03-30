import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../backend/src/trpc/trpc.router";
import { environment } from "../src/environments/environment";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: environment.BACKEND_URL_TRPC,
    }),
  ],
});
