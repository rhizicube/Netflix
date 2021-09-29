import { Component, OnInit } from '@angular/core';
import {  Movie } from '../movie.model'

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
 myMovie: any;
  onMovie() {
    this.myMovie = JSON.parse(localStorage.getItem('moviedData'));
  }
}
