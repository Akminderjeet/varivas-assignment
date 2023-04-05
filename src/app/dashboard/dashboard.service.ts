import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  imageURL = "https://image.tmdb.org/t/p/w500/";
  rootURL = "http://localhost:9000/"
  latestURL = "http://localhost:9000/latest/"
  trailerURL = "https://api.themoviedb.org/3/movie/"
  public getMovies(): any {
    return this.http.get(this.rootURL);
  }
  getLatest() {
    return this.http.get(this.latestURL);
  }

  resul: any;
  public findMovieById(movieId: String): any {
    this.resul = this.http.get("http://localhost:9000/movie/" + movieId);
    console.log(this.resul);
    return this.resul;
  }
  public findMovieDetails(movieId: String) {
    this.resul = this.http.get("http://localhost:9000/movie/details/" + movieId);
    console.log(this.resul);
    return this.resul;
  }
}
