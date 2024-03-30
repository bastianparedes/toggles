import { Component, OnInit } from '@angular/core';
import { keys } from '../utils/object';
import { ToggleComponent } from './toggle/toggle.component';
import { TogglesService } from './toggles.service';
import { Observable } from 'rxjs';
import type { Apps } from '../utils/types/toggle';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toggles',
  standalone: true,
  imports: [AsyncPipe, ToggleComponent],
  templateUrl: './toggles.component.html'
})
export class TogglesComponent implements OnInit {
  public apps$!: Observable<Apps>;

  constructor(private service: TogglesService) {}

  ngOnInit(): void {
    this.apps$ = this.service.getToggles();
  }
}
