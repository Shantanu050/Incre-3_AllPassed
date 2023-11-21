import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {
id:number
playerdata={id:0,name:'',age:0,category:'',biddingPrice:0,teamId:0}
  constructor(private ps:AdminService,private ar:ActivatedRoute,private router:Router ) { 
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.ps.getPlayerById(this.id).subscribe((data:any)=>{
      this.playerdata=data
    })
  }
editPlayer(playerToDelete:any)
{
  this.playerdata=playerToDelete
  this.ps.editPlayer(this.playerdata).subscribe(()=>{
    alert('player id:'+this.id+' edited!!')
    this.router.navigate(['/listPlayer'])
  })
}
  ngOnInit(): void {
  }

}
