import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit {
teamsdata:Team[]=[]
  constructor(public service:AdminService) { 
    this.service.getTeams().subscribe(teams=>{
      this.teamsdata=teams
     })
  }

  ngOnInit(): void {
  }

}
