import { Component, OnInit } from '@angular/core';
import { keys } from '../../../utils/object';
import { ToggleComponent } from './toggle/toggle.component';
import { TogglesService } from './toggles.service';
import { Observable } from 'rxjs';
import type { RawApps } from '../types/toggle';

const fullApps = {
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

const apps = keys(fullApps).map((appName) => {
  const togglesByApp = fullApps[appName];
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
  selector: 'app-toggles',
  standalone: true,
  imports: [ToggleComponent],
  templateUrl: './toggles.component.html'
})
export class TogglesComponent implements OnInit {
  public rawApps!: Observable<RawApps>;

  constructor(private service: TogglesService) {}

  ngOnInit(): void {
    this.rawApps = this.service.getToggles();
    console.log('this.rawApps', this.rawApps);
  }
}
