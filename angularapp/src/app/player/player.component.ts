import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
playerdata:any[]=[]
  constructor(private ms:AdminService) { 
this.ms.getPlayers().subscribe(data=>{
  this.playerdata.push(...data)
})
  }

  ngOnInit(): void {
  }

}
