import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = environment.name;
  apiUrl = environment.apiUrl;
  timeout = environment.timeout;
  customFeatureEnabled = environment.customFeatureEnabled;
}
