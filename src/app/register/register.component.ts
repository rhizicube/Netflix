import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  error: string = null;
  constructor(private service: CommonService, private router: Router) {}

  ngOnInit(): void {}

  newUser = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  onSignUp() {
    var regs = this.newUser.value;
    this.service.signUp(regs.email, regs.password).subscribe(
      (resdata: any) => {},
      (errorMessage) => {
        this.error = errorMessage;
        window.alert(errorMessage);
      }
    );
    if (!this.error) {
      window.alert('Sign-Up Successful');
    }

    this.router.navigate(['/User']);
    this.newUser.reset();
  }
  onReg() {
    this.router.navigate(['User']);
  }
}
