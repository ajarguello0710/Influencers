import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loading: boolean = false;
  	message: string;
  	form: { [key: string]: string } = {};
  
  	constructor(private router: Router, private cookie: CookieService) {
		this.form = {
			name: '',
			password: ''
		}
	}

	ngOnInit() { }

	login() {
		this.loading = true;
		this.message = null;
		if (this.form.name === 'reiden' && this.form.password === 'reiden') {
			this.cookie.put('user', JSON.stringify(this.form));
			this.router.navigate(['influencers']);
    	} else {
			this.router.navigate(['login']);
		}
	}
}