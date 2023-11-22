import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
id:number
teamdata={id:0,name:''}
  constructor(private ps:AdminService,private ar:ActivatedRoute,private router:Router) {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.ps.editTeam(this.id).subscribe((data:any)=>{
      this.playerdata=data
   }

  ngOnInit(): void {
  }

}
