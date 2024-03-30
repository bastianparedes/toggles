import { Component, OnInit } from '@angular/core';
import { ToggleValueComponent } from './toggle-value/toggle.component';
import { ToggleNameComponent } from './toggle-name/toggle-name.component';
import { TogglesService } from './toggles.service';
import { Observable } from 'rxjs';
import type { Apps } from '../utils/types/toggle';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [AsyncPipe, ToggleNameComponent, ToggleValueComponent],
  templateUrl: './toggles.component.html'
})
export class TogglesComponent implements OnInit {
  public apps$!: Observable<Apps>;

  constructor(private service: TogglesService) {}

  ngOnInit(): void {
    this.apps$ = this.service.getToggles();
  }
}
