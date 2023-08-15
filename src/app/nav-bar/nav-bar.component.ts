import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  ime!: any;
  token!: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ime = localStorage.getItem('ime');
    this.token = localStorage.getItem('token');
  }

  Logout() {
    localStorage.removeItem('ime');
    localStorage.removeItem('token');

    this.router.navigate(['/']);
  }
}
