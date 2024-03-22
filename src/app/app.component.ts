import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { keys } from '../../utils/object';
import { ToggleComponent } from './toggle/toggle.component';

const fullToggles = {
  "ba_tester": {
    "show_javascript_button": false,
    "show_button_example_page": true
  },
  "portfolio": {
    "show_falabella": true,
    "show_freelance": true,
    "show_teacher_app": true,
    "show_teacher_programming": true,
    "show_ba_tester": true,
    "show_pdf_constructor": true,
    "show_tst_maker": true,
    "show_short_url": true
  }
}

const apps = keys(fullToggles).map((appName) => {
  const togglesByApp = fullToggles[appName];
  const toggleNames = keys(togglesByApp);

  return {
    name: appName as string,
    toggles: toggleNames.map((toggleName) => {
      return {
        name: toggleName as string,
        value: togglesByApp[toggleName] as boolean
      }
    })
  };
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  apps = apps;
  name = 'Bastián';
  title = 'project';
}
