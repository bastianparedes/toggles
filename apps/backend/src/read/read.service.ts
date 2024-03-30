import { Injectable } from '@nestjs/common';
import { keys } from '../utils/object';
import { getApps } from '../utils/verceEdge';

@Injectable()
export class ReadService {
  async getApps() {
    const rawApps = await getApps();
    const apps = keys(rawApps).map((appName) => {
      const togglesByApp = rawApps[appName];
      const toggleNames = keys(togglesByApp);

      return {
        name: appName as string,
        toggles: toggleNames.map((toggleName) => {
          return {
            name: toggleName as string,
            value: togglesByApp[toggleName] as boolean,
          };
        }),
      };
    });
    return apps;
  }
}
