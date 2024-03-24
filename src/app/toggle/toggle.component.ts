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
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        this.value = !this.value;
        resolve(this.value);
      }, 500);
    });

    console.log(result);
  }
}
