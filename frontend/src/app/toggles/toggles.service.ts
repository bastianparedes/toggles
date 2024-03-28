import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Apps } from '../utils/types/toggle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglesService {
  constructor(private http: HttpClient) { }

  getToggles() {
    return this.http.get<Apps>('https://toggles.bastianparedes.com/api/read');
  }
}
