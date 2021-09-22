import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AuthComponent } from './auth/auth.component';
import { DetailsComponent } from './details/details.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'Add', component: AddMovieComponent, canActivate: [AuthGuard] },
  {path: 'User', component: AuthComponent },
  {path: 'Netflix', component: HeaderComponent, canActivate: [AuthGuard] },
  {path: 'Movies', component: MoviesComponent, canActivate: [AuthGuard]},
  {path: 'MovieDetails', component: DetailsComponent , canActivate: [AuthGuard]},
  {path: 'Catagories', component: CatagoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
