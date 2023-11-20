import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './models/player.model';
import { Team } from './models/team.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
url:string="https://8080-bfebfcbdbbfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  constructor(private http:HttpClient) { }
  getPlayers():Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'/ListPlayers')
  }
}
