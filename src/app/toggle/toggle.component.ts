import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html'
})

export class ToggleComponent {
  @Input() name!: string;
  @Input() value!: boolean;

  switchToggle () {
    this.value = !this.value;
  }
}
