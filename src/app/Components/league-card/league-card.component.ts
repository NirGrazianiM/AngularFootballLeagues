import { Component, Input, OnInit } from "@angular/core";
import { Ileague } from "src/app/Models/league.model";
import { Iteam } from "src/app/Models/team.model";
import { HttpService } from "src/app/Services/http-service";

@Component({
  selector: "app-league-card",
  templateUrl: "./league-card.component.html",
  styleUrls: ["./league-card.component.scss"],
  providers: [HttpService],
})
export class LeagueCardComponent implements OnInit {
  @Input() cardLeague: Ileague;
  teams: Iteam[];

  isShow = false;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  onBtnClick() {
    this.toggleDisplay();
    this.httpService.getTeams(this.cardLeague).subscribe((fetchedTeams) => {
      this.teams = fetchedTeams;
      console.log(this.teams);
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
