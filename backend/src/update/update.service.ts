import { Injectable } from '@nestjs/common';
import { get } from '@vercel/edge-config';

@Injectable()
export class UpdateService {
  async getToggles(appName: string) {
    return await get(appName);
  }
}
