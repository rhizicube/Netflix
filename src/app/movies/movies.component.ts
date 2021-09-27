import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

// import * as movielist from '../movielist/data.json';

// let moviedata =  movielist;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  datas: any;
  mvis = [];

  constructor(private service: CommonService, private router: Router) {}

  headerObject = {
    'Content-Type': 'application/json',
  };
  headers = new HttpHeaders(this.headerObject);

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getMovies().subscribe((resp) => {
      console.log(resp);
      for (let data in resp) {
        this.mvis.push(resp[data]);
      }

      console.log('abccc', this.mvis);

      return;
    });
  }
  // onClick(){
  // this.route.navigate(['Catagories']);
  //     window.alert("jumped");
  // }
  details;
  movieDetail = false;

  showDetail(j) {
    this.movieDetail = true;
    console.log(j);
    var movie = JSON.stringify(j);
    localStorage.setItem('moviedData', movie);
    this.router.navigate(['/MovieDetails']);
    return;
    // console.log("button is working", this.mvis);
    for (let i in this.mvis) {
      // console.log("for",this.mvis[i].data.uniqueId);
      if (this.mvis[i].data.uniqueId == this.mvis[j].data.uniqueId) {
        //  this.details.push(this.mvis[i].data);
        this.details = this.mvis[i].data;
        console.log('one', this.details.uniqueId);
      }
    }
  }
}
