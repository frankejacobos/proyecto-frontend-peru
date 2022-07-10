import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http: HttpClient) {
    // llamada solo para prender la api
    http.get(environment.API_URL)
  }
  title = 'proyecto-frontend-peru';
}
