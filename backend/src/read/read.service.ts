import { Injectable } from '@nestjs/common';
import { get, getAll } from '@vercel/edge-config';

@Injectable()
export class ReadService {
  async get(appName: string) {
    return get(appName);
  }

  async getAll() {
    return await getAll();
  }
}
