import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'influencers';
  isLogged: boolean = false;

  constructor(private router: Router) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.isLogged = val.url !== '/login';
			}
		})
	}
}
