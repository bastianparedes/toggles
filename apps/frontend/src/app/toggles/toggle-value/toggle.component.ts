import { Component, Input } from '@angular/core';
import { trpcClient } from '../../../trpc';

@Component({
  selector: 'app-toggle-value',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html'
})

export class ToggleValueComponent {
  @Input({ required: true }) appName!: string;
  @Input({ required: true }) toggleName!: string;
  @Input({ required: true }) value!: boolean;

  async switchToggle() {
    this.value = !this.value;
    console.log(await trpcClient.hello.query({}));
    return ;
    fetch(`/api/update`, {
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
