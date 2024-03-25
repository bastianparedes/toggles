import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { RawApps } from '../types/toggle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglesService {
  constructor(private http: HttpClient) { }

  getToggles(): Observable<RawApps> {
    const result = this.http.get<RawApps>('https://toggles-backend.vercel.app/api/read');
    console.log('result', result);
    return result;
  }
}
