import { Component, Input, OnInit } from '@angular/core';
import { Iteam } from 'src/app/Models/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  @Input() teamList: Iteam[] = [];

  constructor() {}

  ngOnInit(): void {}
}
