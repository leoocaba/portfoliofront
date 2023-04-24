import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-menu-ul',
  templateUrl: './menu-ul.component.html',
  styleUrls: ['./menu-ul.component.css']
})

export class MenuUlComponent implements OnInit {

  isLogged!: boolean;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  loginLogout() {
    if (this.isLogged) {
      this.onLogOut();
    } else {
      this.login();
    }
  }

}
