import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Apps } from '../utils/types/toggle';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TogglesService {
  constructor(private http: HttpClient) { }

  getToggles() {
    return this.http.get<Apps>(`/api/read`);
  }
}
