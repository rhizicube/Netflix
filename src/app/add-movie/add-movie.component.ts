import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  movie = new FormGroup({
    title: new FormControl('', [Validators.required]),
    uniqueId: new FormControl('', [Validators.required]),
    catagory: new FormControl('', [Validators.required]),

    description: new FormControl('', [Validators.required]),
    imgPath: new FormControl('', [Validators.required]),
  });

  constructor(private service: CommonService) {}

  ngOnInit(): void {}
  saveData() {
    let data = this.movie.value;

    this.service.saveMovies(data).subscribe((resp: any) => {});
    window.alert('Details have been added');
    this.movie.reset();
  }
  logOut() {
    this.service.onLogOut();
  }
}
