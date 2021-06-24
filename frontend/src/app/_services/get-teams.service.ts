import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/play/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetTeams{
  teamno:string="";
  
  constructor(private http: HttpClient) { }

  getAllTeams(username: string): Observable<any> {
    return this.http.post(AUTH_API + 'getAllTeams', {
      username
    }, httpOptions);
  }
  getOneTeambyId(teamno:string): Observable<any> {
    return this.http.post(AUTH_API + 'getOneTeambyID', {
      teamno
    }, httpOptions);
  }
  getOneTeam(username:string,teamno:string): Observable<any> {
    return this.http.post(AUTH_API + 'getOneTeam', {
      username,
      teamno
    }, httpOptions);
  }
  getPlayerbyID(playerid: string): Observable<any> {
    return this.http.post(AUTH_API + 'getPlayerbyID', {
      playerid
    }, httpOptions);
  }
  getPlayerbyName(playername: string): Observable<any> {
    return this.http.post(AUTH_API + 'getPlayerbyName', {
      playername
    }, httpOptions);
  }
  getTeamno(){
    return this.teamno;
  }
  updateTeamno(teamnumber:string){
    this.teamno = teamnumber;
  }
  deleteTeam(username:string,teamno:string):Observable<any>{
    return this.http.post(AUTH_API + 'deleteTeam', {
      username,
      teamno
    }, httpOptions);
  }
  getCricketPlayers():Observable<any>{
    return this.http.get(AUTH_API + 'getCricketPlayers');
  }
  getFootballPlayers():Observable<any>{
    return this.http.get(AUTH_API + 'getFootballPlayers');
  }
  createTeam(username: string,teamname:string,totalPoints:number,players:any[],captain:string,viceCaptain:string): Observable<any> {
    return this.http.post(AUTH_API + 'createteam', {
      username,teamname,totalPoints,players,captain,viceCaptain
    }, httpOptions);
  }
}
