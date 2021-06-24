import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GetTeams } from '../_services/get-teams.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-view-allteam',
  templateUrl: './view-allteam.component.html',
  styleUrls: ['./view-allteam.component.css']
})
export class ViewAllteamComponent implements OnInit {
  teamList: [] = [];
  username:string ="";
  errorMessage :string="";
  newmessage="";
  constructor(private getTeams: GetTeams,private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.teamList = [];
    this.username = this.tokenStorage.getUser().username;
    console.log(this.username);
    this.getTeams.getAllTeams(this.username).subscribe(
      data => {
        this.teamList = data.teams;
        console.log(data);
        console.log("dd",this.teamList);
        if(this.teamList.length==0)
        {
          this.errorMessage = "You haven't created any Teams!!  Go on create a team ";
        }
      },
      err => {
        this.errorMessage = "You haven't created any Teams";
      }
    );
    
  }
  updateteamno(teamno:string)
  {
    this.getTeams.updateTeamno(teamno);
    console.log(this.getTeams.getTeamno());
    this.getTeams.getOneTeambyId(teamno).subscribe(
      data=>{
          let cap = data.team.captain;
          this.getTeams.getPlayerbyID(cap).subscribe(
            data=>{
              if(data.player.game=="Football")
              {
                this.router.navigate(['viewFootballteam']);
              }
              else
              this.router.navigate(['view']);
            }
          )

      },
      err=>{
        this.router.navigate(['home']);
      }
    )
    
    
  }
  deleteTeam(teamno:string)
  {
      this.getTeams.deleteTeam(this.username,teamno).subscribe(
        data => {
          this.newmessage = data.message;
          window.location.reload();
        },
        err => {
          this.newmessage = "Operation Unsuccessfull";
        }
      );
  }

}
