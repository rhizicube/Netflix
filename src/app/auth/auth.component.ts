import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  regForm = false;
  userList = [];
  error: string = null;

  signed = false;
  isLoggedIn = false;
  email: string;
  constructor(private service: CommonService, private router: Router) {}
  isLog = this.service.loggedIn;
  ngOnInit(): void {
    const idToken = localStorage.getItem('Token');
    if (idToken) {
      this.isLog = true;

      this.email = localStorage.getItem('email');
      this.router.navigate(['Movies']);
    }
  }
  onReg() {
    this.router.navigate(['Register']);
  }
  alreadyUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onLogin() {
    var regs = this.alreadyUser.value;

    this.service.login(regs.email, regs.password).subscribe(
      (resdata: any) => {
        this.isLog = true;
        let email = JSON.stringify(resdata.email);
        localStorage.setItem('email', email);

        let token = JSON.stringify(resdata.idToken);
        localStorage.setItem('Token', token);
        this.router.navigate(['Head']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        window.alert(errorMessage);
      }
    );

    this.alreadyUser.reset();
  }
}
