import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
teamsdata={id:0,name:''}
  constructor(private ps:AdminService,private route:Router,private ar:ActivatedRoute) { }
addTeam(team:any)
{
  this.teamsdata=team
  this.ps.createTeam(this.teamsdata).subscribe(()=>
  {
    alert('Team Added!!')
    this.route.navigate(['/listTeams'])
  })
}
  ngOnInit(): void {
  }

}
