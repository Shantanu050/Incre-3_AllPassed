import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/models/team.model';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
 newTeam: Team = { id: 0, name: '', maximumBudget:0};
    constructor(private ps:AdminService,private route:Router,private ar:ActivatedRoute) { }
addTeam(team:Team)
{
  this.newTeam=team
  this.ps.createTeam(this.newTeam).subscribe(()=>
  {
    alert('Team Added!!')
    this.route.navigate(['/listTeams'])
  })
}
  ngOnInit(): void {
  }

}
