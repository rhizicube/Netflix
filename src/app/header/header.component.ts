import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any;
  isLoggedIn = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('Token');
    if (idToken) {

      this.isLoggedIn = true;
      this.email = localStorage.getItem('email');
    }
  }
  onLogOut() {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/User']);
  }
}
