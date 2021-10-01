import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
})
export class CommonComponent implements OnInit {
  datas: any;
  mvis = [];
  displayPage: boolean;
  moviesList = [];
  uniCategory = [];
  error: boolean;
  data : boolean = false;
  lodding: boolean= true;
  constructor(private service: CommonService, private router: Router) {}

  headerObject = {
    'Content-Type': 'application/json',
  };
  headers = new HttpHeaders(this.headerObject);

  ngOnInit(): void {
    this.getData();
    if (this.router.url.includes('Catagories')) {
      this.getDataHere();
    }
  }
  getData() {
    this.displayPage = false;
    this.service.getMovies().subscribe((resp) => {
      console.log(resp);
      if (resp) {
        this.lodding = false;
        this.data = true;
        this.hideloader();
      // } 
      for (let data in resp) {
        this.mvis.push(resp[data]);
      }
    }else{
      this.lodding = false;
      this.error = true;
    }
      return;
    }, (message) => {
      this.error = message;
      window.alert(message);
      this.hideloader();
    });
  }
  getDataHere() {
    this.displayPage = true;
    this.service.getMovies().subscribe((resp) => {
      if (resp) {
        this.hideloader();

        for (let data in resp) {
          this.moviesList.push(resp[data]);
        }

        var distinct = [];
        for (let i = 0; i < this.moviesList.length; i++) {
          if (!distinct[this.moviesList[i].data.catagory]) {
            distinct.push(this.moviesList[i].data.catagory);
          }
        }
        this.uniCategory = distinct.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
      }else{
        this.moviesList=[];
        this.hideloader();
      }
      

    }, (err) => {
      console.log(err);
      this.hideloader();
      
    });
    
  }

  movieDetail = false;

  showDetail(j) {
    this.movieDetail = true;

    var movie = JSON.stringify(j);
    localStorage.setItem('moviedData', movie);
    this.router.navigate(['/MovieDetails']);
    return;
  }
  hideloader() {
    document.getElementById('loading').style.display = 'none';
  }

  checkCategory(cat, movie) {
    if (cat === movie.data.catagory) {
      return true;
    } else {
      return false;
    }
  }

  pageCheck() {
    if (this.mvis.length == 0) {
      setTimeout(() => {
        return true;
      }, 2000);
    }else{
      return false
    }
  }
}
