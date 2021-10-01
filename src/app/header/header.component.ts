import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any;

  constructor(private router: Router, private service: CommonService) { }
  isLog = this.service.loggedIn;
  ngOnInit(): void {
    const idToken = localStorage.getItem('Token');
    if (idToken) {
      debugger;
      // this.isLoggedIn = true;
      this.isLog = true;
      this.email = localStorage.getItem('email');
      this.router.navigate(['Movies']);
    }
  }
  // onLogOut() {
  //   // this.isLoggedIn = false;
  //   this.isLog = false;
  //   localStorage.clear();
  //   this.router.navigate(['/User']);
  // }
  // logg(){
  //   if(this.isLoggedIn){
  //     console.log("hii")
  //     return true
  //   }
  // }
}
