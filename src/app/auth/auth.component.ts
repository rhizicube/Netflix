import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, } from '@angular/forms';
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
  error : string = null;
  loggedIn = false;
  signed = false;
  isLoggedIn = false;
  email;
  constructor(private service: CommonService , private router: Router) { }

  ngOnInit(): void {
    const idToken = localStorage.getItem('Token');
  if(idToken){
    this.isLoggedIn = true;
    this.email = localStorage.getItem('email');
    this.router.navigate(['/Movies'])
  }
  }
  onReg(){
    this.regForm = true;
  }
 newUser = new FormGroup({
   // name : new FormControl('', Validators.required),
   email : new FormControl('', [Validators.required, Validators.email]),
   password : new FormControl('', [Validators.required, Validators.minLength(6)]),
   // number : new FormControl('', Validators.required)
  })

  onSignUp(){
    var regs = this.newUser.value;
    console.log(regs);
   
    
    this.service.signUp(regs.email, regs.password).subscribe((resdata:any) => 
    {
      console.log("data", resdata);
      this.signed == true;
    },  errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
     window.alert(errorMessage);
    });
   this.newUser.reset();
   if(this.signed == true){
    window.alert("Registerd Successfully! Please Login");
   }
   
   this.regForm == false;
  }
  onLogin(){
    var regs = this.newUser.value;
    console.log(regs);
   
      this.service.login(regs.email, regs.password).subscribe((resdata: any)=>
      {
        this.loggedIn = true;
        let email = JSON.stringify(resdata.email);
        localStorage.setItem("email", email);

        let token = JSON.stringify(resdata.idToken);
        localStorage.setItem("Token", token);
         this.router.navigate(['Movies']);
        console.log("logged in", resdata);
      },  errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
       window.alert(errorMessage);
      })
     
     
      this.newUser.reset();
      
      
  }
  
}
