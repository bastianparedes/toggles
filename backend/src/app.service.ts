import { Injectable } from '@nestjs/common';
import { getAll } from '@vercel/edge-config';

@Injectable()
export class AppService {
  async getHello() {
    return await getAll();
  }
}
