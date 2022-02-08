import { Component, OnInit } from "@angular/core";
import { Ileague } from "src/app/Models/league.model";
import { HttpService } from "src/app/Services/http-service";

@Component({
  selector: "app-leagues-list",
  templateUrl: "./leagues-list.component.html",
  styleUrls: ["./leagues-list.component.scss"],
  providers: [HttpService],
})
export class LeaguesListComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  leagues: Ileague[] = [];

  ngOnInit(): void {
    this.httpService.getLeagues().subscribe((fetchedleagues) => {
      this.leagues = fetchedleagues.splice(0, 5);
    });
  }
}
