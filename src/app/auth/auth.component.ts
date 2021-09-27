import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  regForm = false;
  userList = [];
  error: string = null;
  loggedIn = false;
  signed = false;
  isLoggedIn = false;
  email;
  constructor(private service: CommonService, private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('Token');
    if (idToken) {
      this.isLoggedIn = true;
      this.email = localStorage.getItem('email');
      this.router.navigate(['/Movies'])
    }
  }
  onReg() {
    this.regForm = true;
  }
  newUser = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  })

  onSignUp() {
    var regs = this.newUser.value;
    this.service.signUp(regs.email, regs.password).subscribe((resdata: any) => {

      this.signed == true;
    }, errorMessage => {

      this.error = errorMessage;
      window.alert(errorMessage);
    });
    this.newUser.reset();
    if (this.signed == true) {
      window.alert("Registerd Successfully! Please Login");
    }

    this.regForm == false;
  }
  onLogin() {
    var regs = this.newUser.value;


    this.service.login(regs.email, regs.password).subscribe((resdata: any) => {
      this.loggedIn = true;
      let email = JSON.stringify(resdata.email);
      localStorage.setItem("email", email);

      let token = JSON.stringify(resdata.idToken);
      localStorage.setItem("Token", token);
      this.router.navigate(['Movies']);

    }, errorMessage => {

      this.error = errorMessage;
      window.alert(errorMessage);
    })


    this.newUser.reset();


  }

}
