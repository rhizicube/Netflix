import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
})
export class CatagoryComponent implements OnInit {
  moviesList = [];
  uniCategory = [];

  constructor(private service: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.getDataHere();
  }
  getDataHere() {
    this.service.getMovies().subscribe((resp) => {
      if (resp) {
        this.hideloader();
      // console.log();
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
      }
    });
  }
  hideloader() {
    document.getElementById('loading').style.display = 'none';
  }
  details;
  movieDetail = false;
  showDetail(j) {
    var movie = JSON.stringify(j);
    localStorage.setItem('moviedData', movie);
    this.router.navigate(['/MovieDetails']);
    return;
  }

  checkCategory(cat, movie) {
    if (cat === movie.data.catagory) {
      return true;
    } else {
      return false;
    }
  }
}
