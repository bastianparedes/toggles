import { Injectable } from '@nestjs/common';
import { getAll } from '@vercel/edge-config';
import type { RawApps } from '../../types/toggle';
import { keys } from '../../utils/object';

@Injectable()
export class ReadService {
  async getApps() {
    const rawApps: RawApps = await getAll();
    const apps = keys(rawApps).map((appName) => {
      const togglesByApp = rawApps[appName];
      const toggleNames = keys(togglesByApp);

      return {
        name: appName as string,
        toggles: toggleNames.map((toggleName) => {
          return {
            name: toggleName as string,
            value: togglesByApp[toggleName] as boolean
          }
        })
      };
    });
    return apps;
  }
}
