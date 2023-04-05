import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { DashboardService } from './dashboard.service';

import { Router } from '@angular/router';

export interface Movie {
  id: string;
  title: string;
  overview: string;
  trailer: string;
  popularity: string;
  poster_path: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  desiredColumns: number = 3;
  popUpMovie: Movie | undefined;
  innerWidth: number | undefined;
  movieSelected: boolean = false;
  selectedMovie: Movie[] | undefined;

  imageURL = "https://image.tmdb.org/t/p/w500/";
  constructor(private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit(): void {
    this.dashboardService.getMovies()
      .subscribe((res: any) => {
        console.log(res)
        this.movies = res.results;
        console.log(this.movies);
      });
  }

  closeBottomSheet() {
    this.movieSelected = false;
  }
  public getLatest(): void {
    this.dashboardService.getLatest()
      .subscribe((res: any) => {
        console.log(res)
        this.movies = res.results;
        console.log(this.movies);
      });
  }
  public getPopular() {
    this.dashboardService.getMovies()
      .subscribe((res: any) => {
        console.log(res)
        this.movies = res.results;
        console.log(this.movies);
      });
  }
  playTrailer() {
    if (this.selectedMovie && this.selectedMovie.length)
      this.router.navigate(['/movie', this.selectedMovie[0].id]);
  }

  selectMovie(movieId: String) {
    this.selectedMovie = this.movies.filter(item => item.id == movieId);
    if (this.selectedMovie && this.selectedMovie.length) {
      this.movieSelected = true;
    }
  }

}
