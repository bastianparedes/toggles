import { Injectable } from '@nestjs/common';
import { getToggles } from '../utils/verceEdge';

@Injectable()
export class UpdateService {
  async getToggles(appName: string) {
    return await getToggles(appName);
  }
}
