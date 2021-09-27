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
      if (resp) {
        this.hideloader();
    }
      for (let data in resp) {
        this.mvis.push(resp[data]);
      }

      console.log('abccc', this.mvis);

      return;
    });
  }
  
  details;
  movieDetail = false;

  showDetail(j) {
    this.movieDetail = true;
    console.log(j);
    var movie = JSON.stringify(j);
    localStorage.setItem('moviedData', movie);
    this.router.navigate(['/MovieDetails']);
    return;
    
  }
  hideloader() {
    document.getElementById('loading')
                .style.display = 'none';
    
  }
}
