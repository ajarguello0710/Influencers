import { MenuService } from './../../services/menu.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  menuChange(event: MouseEvent, route: string) {
    if (this.router.isActive(route, false)) {
      this.menuService.clickReload.emit(route);
    }
  }
}
