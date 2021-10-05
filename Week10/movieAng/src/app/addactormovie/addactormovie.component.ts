import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-addactormovie',
  templateUrl: './addactormovie.component.html',
  styleUrls: ['./addactormovie.component.css']
})
export class AddactormovieComponent implements OnInit {
  actorId: string = "";
  movieId :string ="";
  actorsDB: any[] = [];
  movieDB :any [] = [];
  selectedActor:string="";
  selectedTitle:string ="";
  constructor(private dbService: DatabaseService, private router: Router) {}

  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");

    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  //Get all Movie
  onGetMovies() {
    console.log("From on GetMovies");

    return this.dbService.getMovies().subscribe((data: any) => {
      this.movieDB = data;
    });
  }

  onSelectActor(item:any)
  {
    this.selectedActor = item.name;
    this.actorId = item._id;
  }
  onSelectMovie(item:any)
  {
    this.movieId = item._id;
    this.selectedTitle =item.title;
  }

  onAddActor2Movie(){
    let obj ={
      id:this.actorId,
    }
    this.dbService.addActor(this.movieId,obj).subscribe((result:any) => {
          this.router.navigate(["/listmovies"]);
          this.onGetActors();
          this.onGetMovies(); 
        })
  }


  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }

}
