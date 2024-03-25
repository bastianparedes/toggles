import { Injectable } from '@nestjs/common';
import { getAll } from '@vercel/edge-config';

@Injectable()
export class ReadService {
  getApps() {
    return getAll();
  }
}
