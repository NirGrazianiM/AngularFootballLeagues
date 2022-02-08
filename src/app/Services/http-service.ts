import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Ileague } from "../Models/league.model";
import { Iteam } from "../Models/team.model";

type leaguesResponse = { leagues: Ileague[] };
type teamsResponse = { teams: Iteam[] };

@Injectable({
  providedIn: "root",
})
export class HttpService {
  readonly ALL_LEAGUES_ROOT_URL =
    "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
  readonly TEAMS_ROOT_URL =
    "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=";

  constructor(private http: HttpClient) {}

  getLeagues(): Observable<Ileague[]> {
    return this.http
      .get<leaguesResponse>(this.ALL_LEAGUES_ROOT_URL)
      .pipe(map((responeData) => responeData.leagues));
  }

  getTeams(cardLeague: Ileague): Observable<Iteam[]> {
    return this.http
      .get<teamsResponse>(this.TEAMS_ROOT_URL + cardLeague.strLeague)
      .pipe(map((responeData) => responeData.teams));
  }
}
