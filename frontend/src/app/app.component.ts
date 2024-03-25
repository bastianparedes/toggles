import { Component } from '@angular/core';
import { keys } from '../../utils/object';
import { TogglesComponent } from './toggles/toggles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TogglesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {};
