import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GetTeams } from '../_services/get-teams.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-view-footballteam',
  templateUrl: './view-footballteam.component.html',
  styleUrls: ['./view-footballteam.component.css']
})
export class ViewFootballteamComponent implements OnInit {

    teamno: string="";
    team: any ;
    username:string ="";
    errorMessage :string="";
    captain:any;
    viceCaptain:any;
    wicketKeeper:any;
    Batsmen:any=[];
    Bowlers:any=[];
    temp:any;
    showWK:boolean=false;
    array:any=[];
    newname:string="";
    constructor(private getTeams: GetTeams,private tokenStorage: TokenStorageService) { }
    getName(name:string)
    {
      this.newname="";
      this.array = name.split("_");
      // console.log("split array ",this.array);
      for(let i = 0;i<this.array.length;i++)
      {
        this.newname += this.array[i];
        this.newname+=" ";
        // console.log("--->",i,this.array[i]);
      }
      // console.log("after replace ",this.newname);
      return this.newname;
    }
    ngOnInit(): void {
      
      this.teamno = this.getTeams.getTeamno();
  
      console.log(this.teamno);
      this.getTeams.getOneTeambyId(this.teamno).subscribe(
        data => {
          this.team = data.team;
          console.log(data);
          console.log("team ",this.team);
          if(this.team.playerList.length==0)
          {
            this.errorMessage = "Team is empty!!  Go on create a team ";
          }
          this.getTeams.getPlayerbyID(this.team.captain).subscribe(
            data=>{
              this.captain = data.player;
              console.log("captain ",this.captain);
              this.getTeams.getPlayerbyID(this.team.viceCaptain).subscribe(
                data=>{
                  this.viceCaptain = data.player;
                  console.log("vice captain ",this.viceCaptain);
  
                  for(var i in this.team.playerList)
                  {
                    console.log("inside loop",this.team.playerList[i]);
                    this.getTeams.getPlayerbyID(this.team.playerList[i]).subscribe(
                      data=>{
                        this.temp = data.player;
                        console.log("inside loop",this.temp);
                        if(this.captain._id!=this.temp._id && this.viceCaptain._id!= this.temp._id)
                        {
                          if(this.temp.role=="Defence")
                          {
                            this.Bowlers.push(this.temp);
                          }
                          else if(this.temp.role=="Attack")
                          {
                            this.Batsmen.push(this.temp);
                          }
                          else if(this.temp.role == "GoalKeeper")
                          {
                            this.wicketKeeper = this.temp;
                            this.showWK=true;
                          }
                          
                        }
                      },
                      err => {
                        this.errorMessage = "You haven't created any Teams";
                        console.log(err);
                      });
                            
                      
                  }
                  
                },
                err => {
                  this.errorMessage = "You haven't created any Teams";
                  console.log(err);
                });
            },
            err => {
              this.errorMessage = "You haven't created any Teams";
              console.log(err);
            });
            
            
            console.log("Bowlers",this.Bowlers);
            console.log("Batsmen",this.Batsmen);
            console.log("WK ",this.wicketKeeper);
        },
        err => {
          this.errorMessage = "You haven't created any Teams";
        }
      ); 
  }
}
  