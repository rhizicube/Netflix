import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
})
export class CatagoryComponent implements OnInit {
  all = [];

  latest = [];
  comedy = [];
  love = [];
  animated = [];
  Action = [];
  thriller = [];
  constructor(private service: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.getDataHere();
  }
  getDataHere() {
    this.service.getMovies().subscribe((resp) => {
      if (resp) {
        this.hideloader();
    }

      for (let data in resp) {
        this.all.push(resp[data]);
      }

      for (let i in this.all) {
        if (this.all[i].data.catagory === 'Action') {
          this.Action.push(this.all[i]);
        }
        if (this.all[i].data.catagory === 'Thriller') {
          this.thriller.push(this.all[i]);
        }
        if (this.all[i].data.catagory === 'Love Story') {
          this.love.push(this.all[i]);
        }
        if (this.all[i].data.catagory === 'Animation') {
          this.animated.push(this.all[i]);
        }

        if (this.all[i].data.catagory === 'Comedy') {
          this.comedy.push(this.all[i]);
        }
      }
    });
  }
  hideloader() {
    document.getElementById('loading')
                .style.display = 'none';
    
  }
  details;
  movieDetail = false;
  showDetail(j) {
    var movie = JSON.stringify(j);
    localStorage.setItem('moviedData', movie);
    this.router.navigate(['/MovieDetails']);
    return;
  }
}


