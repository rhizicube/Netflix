import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AuthComponent } from './auth/auth.component';
import { DetailsComponent } from './details/details.component';
import { CommonComponent } from './common/common.component';
import { RegisterComponent } from './register/register.component';
import { PagerrorComponent }  from './pagerror/pagerror.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'Add', component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: 'User', component: AuthComponent },
  {
    path: '',
    redirectTo: 'User',
    pathMatch: 'full',
  },
  { path: 'Head', component: HeaderComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Netflix', component: CommonComponent, canActivate: [AuthGuard] },
  { path: 'Movies', component: CommonComponent, canActivate: [AuthGuard] },
  {
    path: 'MovieDetails',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Catagories', component: CommonComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: PagerrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
