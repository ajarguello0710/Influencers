import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'is-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public user: any = {
		name: '?',
		initials: '?' 
	};

	constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private cookie: CookieService) {
		this.user = {};
	}

	ngOnInit() {
		try {
			this.user = JSON.parse(this.cookie.get('user'));
			let initials = this.user['name'].match(/\b\w/g) || [];
			this.user['initials'] = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
			console.log(this.user);
		} catch (err) {
			console.log(this.cookie.get('user'));
		}
	}

  logout() {
		this.router.navigate(['login']);
	}
}