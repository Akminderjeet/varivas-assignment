import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  movie: any;
  movieDetails: any;
  loadedMovie: boolean = false;
  safeURL: any;


  constructor(private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private _sanitizer: DomSanitizer) { }

  async ngOnInit() {

    let movieid: any = this.activatedRoute.snapshot.paramMap.get("movieid");
    console.log(movieid);
    this.dashboardService.findMovieById(movieid)
      .subscribe((res: any) => {
        if (res) {
          this.movie = res.results[0];
          console.log(res);
          // console.log(this.movie.trailer);

          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.movie.key + "?autoplay=1");

          console.log(this.safeURL);

          this.loadedMovie = true;
        }
      })
    this.dashboardService.findMovieDetails(movieid)
      .subscribe((res: any) => {
        if (res) {
          this.movieDetails = res;
          console.log(res);
          // console.log(this.movie.trailer);

          this.loadedMovie = true;
        }
      })

  }

}
