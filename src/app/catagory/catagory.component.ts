import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  

  all = [];

 latest =[];
 comedy = [];
 love =[];
 animated = [];
 Action = [];
 thriller = [];
  constructor(private service: CommonService, private router: Router) { }

  ngOnInit(): void {
    console.log("Oninit");
    // this.allData();
    this.getDataHere();
  }
  getDataHere(){
    console.log("seee");
    this.service.getMovies().subscribe((resp) =>{
     console.log(resp);
     for (let data in resp) {
       this.all.push(resp[data]);
     }
      
     
     console.log("abccc", this.all);
    // return this.all;

    for(let i in this.all){
      
      if(this.all[i].data.catagory === 'Action'){
        this.Action.push(this.all[i]);
        // console.log("ifff", this.Action);
      }
      if(this.all[i].data.catagory === 'Thriller'){
        this.thriller.push(this.all[i]);
      } 
      if(this.all[i].data.catagory === 'Love Story'){
        this.love.push(this.all[i]);
        console.log("love");
      }
      if(this.all[i].data.catagory === 'Animation'){
        this.animated.push(this.all[i]);
      }
      if(this.all[i].data.catagory === 'Animation'){
        this.animated.push(this.all[i]);
      }
      if(this.all[i].data.catagory === 'Animation'){
        this.animated.push(this.all[i]);
      }
      if(this.all[i].data.catagory === 'Animation'){
        this.animated.push(this.all[i]);
      }
      if(this.all[i].data.catagory === 'Comedy'){
        this.comedy.push(this.all[i]);
      }
    }
    })
    
 }
 details ;
movieDetail = false;
showDetail(j)
{
  console.log(j);
  var movie = JSON.stringify(j);
  localStorage.setItem("moviedData", movie);
  this.router.navigate(['/MovieDetails']);
  return
  this.movieDetail = true;
  // console.log("button is working", this.all);
  for(let i in this.all){
    //  console.log("for",this.all[i].data.uniqueId);
    if(this.all[i].data.uniqueId == this.all[j].data.uniqueId ){
    //  this.details.push(this.mvis[i].data);
    this.details = this.all[i].data;
     console.log("one",this.details);
    }
  }
}
}
