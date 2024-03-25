import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html'
})

export class ToggleComponent {
  @Input({ required: true }) appName!: string;
  @Input({ required: true }) toggleName!: string;
  @Input({ required: true }) value!: boolean;

  async switchToggle() {
    this.value = !this.value;
    fetch('https://toggles.bastianparedes.com/api/update', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        appName: this.appName,
        toggleName: this.toggleName,
        value: this.value
      }),
    });
  }
}
