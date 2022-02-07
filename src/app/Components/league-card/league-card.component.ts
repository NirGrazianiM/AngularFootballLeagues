import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { Ileague } from 'src/app/Models/league.model';
import { Iteam } from 'src/app/Models/team.model';

type Response = { teams: Iteam[] };

@Component({
  selector: 'app-league-card',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss'],
})
export class LeagueCardComponent implements OnInit {
  ROOT_URL =
    'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=';

  @Input() cardLeague: Ileague;
  teams: Iteam[];

  isShow = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onBtnClick() {
    this.toggleDisplay();
    this.http
      .get<Response>(this.ROOT_URL + this.cardLeague.strLeague)
      .pipe(map((responeData) => responeData.teams))
      .subscribe((fetchedTeams) => {
        this.teams = fetchedTeams;
        console.log(this.teams);
      });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
