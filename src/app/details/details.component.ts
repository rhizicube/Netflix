import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.onMovie();
  }
  myMovie;
  onMovie() {
    this.myMovie = JSON.parse(localStorage.getItem('moviedData'));
    console.log('detail', this.myMovie.data.title);
  }
}
