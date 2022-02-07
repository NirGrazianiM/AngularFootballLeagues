import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Ileague } from 'src/app/Models/league.model';

type Response = { leagues: Ileague[] };

@Component({
  selector: 'app-leagues-list',
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.scss'],
})
export class LeaguesListComponent implements OnInit {
  readonly ROOT_URL =
    'https://www.thesportsdb.com/api/v1/json/2/all_leagues.php';

  leagues: Ileague[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getLeagues();
    console.log('NGONINIT', this.leagues);
  }

  getLeagues() {
    this.http
      .get<Response>(this.ROOT_URL)
      .pipe(map((responeData) => responeData.leagues))
      .subscribe((fetchedleagues) => {
        this.leagues = fetchedleagues.splice(0, 5);
        console.log(this.leagues);
      });
  }
}
