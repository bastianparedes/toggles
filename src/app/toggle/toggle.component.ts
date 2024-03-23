import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html'
})

export class ToggleComponent {
  @Input() appName!: string;
  @Input() toggleName!: string;
  @Input() value!: boolean;

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
