import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetTeams } from '../_services/get-teams.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-create-football-team',
  templateUrl: './create-football-team.component.html',
  styleUrls: ['./create-football-team.component.css']
})
export class CreateFootballTeamComponent implements OnInit {
  //wk = gk
  //defence = bowler
  //attack = batsman
  playersList:any=[];
  array:any=[];
  newname:string="";
  defenceList:any=[];
  AttackList:any=[];
  goalkeeperList:any=[];
  username:string="";
  teamname:string="..";
  //-----------------------------
  sd_WK:any="";
  sd_Br_List:any=[];
  sd_Bn_List:any=[];
  sd_cn:string="";
  sd_vc :string="";
  totalpoints:number=0;
  prevpoint:number=0;
  selectedPlayers :any=[];
  //-----------------------------
  ErrorMessage:string="";
  bowlermessage:string="";
  allroundermessage:string="";
  batsmanmessage:string="";
  WKmessage:string="";
  //-----------------------------

  constructor(private getTeams:GetTeams,private tokenStorage: TokenStorageService,private router: Router) { }
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
    this.username = this.tokenStorage.getUser().username;
    this.getTeams.getFootballPlayers().subscribe(
      data => {
        this.playersList = data.players;
        console.log(data);
        console.log("dd",this.playersList);
        this.dividePlayers();
        if(this.playersList.length==0)
        {
          this.ErrorMessage = "No players found ";
        }
      },
      err => {
        this.ErrorMessage = "Error while retreiving players";
      }
    );

  }

  dividePlayers()
  {
      for(var i = 0;i<this.playersList.length;i++)
      {
        if(this.playersList[i].role=="GoalKeeper")
        {
            this.goalkeeperList.push(this.playersList[i]);
        }
        else if(this.playersList[i].role=="Attack")
        {
            this.AttackList.push(this.playersList[i]);
        }
        else if(this.playersList[i].role=="Defence")
        {
            this.defenceList.push(this.playersList[i]);
        }
       
      }
      console.log("goalkeeperList",this.goalkeeperList);
      console.log("AttackList",this.AttackList);
      console.log("defenceList",this.defenceList);
      

  }
  addWK(player:any)
  {
    if(this.sd_WK === player.Playername)
    {
      this.WKmessage = player.Playername+" is already in the team";
      return;
    }    
    if(this.sd_WK === "")
      this.totalpoints+=player.points;
    else
    {
      if(this.sd_WK == this.sd_cn )
        this.sd_cn = "";
      if(this.sd_WK == this.sd_vc )
        this.sd_vc = "";
      this.totalpoints-=this.prevpoint;
      this.totalpoints+=player.points
    }
    this.sd_WK = player.Playername;
    this.WKmessage = player.Playername+" is added to the team";
    this.prevpoint = player.points;
  }
  remWK(player:any)
  {
    if(this.sd_WK === player.Playername)
    {
      if(this.sd_WK == this.sd_cn )
        this.sd_cn = "";
      if(this.sd_WK == this.sd_vc )
        this.sd_vc = "";
      this.sd_WK = "";
      this.WKmessage = player.Playername+" is removed from the team";
      this.totalpoints-=player.points;
    }
    else
      this.WKmessage = player.Playername+" is not in the team";
    
  }
  getIndex(list:any[],player:any)
  {
    let x = -1;
    
      for(var i = 0;i<list.length;i++)
      {
        if(list[i] === player.Playername)
        {
          x = i;
          break;
        }
      }
 
    return x;
  }
  addBat(player:any)
  {
    console.log("list = ",this.sd_Bn_List,"index = ",this.getIndex(this.sd_Bn_List,player),player)
    if(this.getIndex(this.sd_Bn_List,player)==-1)
    {
      this.sd_Bn_List.push(player.Playername);
      this.batsmanmessage = player.Playername+" is added to the team";
      this.totalpoints+= player.points;
    }
    else
      this.batsmanmessage = player.Playername+" is already in the team";
      
  }
  remBat(player:any)
  {
    let x = this.getIndex(this.sd_Bn_List,player);
    if(x !=-1)
    {
      if(player.Playername == this.sd_cn )
        this.sd_cn = "";
      if(player.Playername == this.sd_vc )
        this.sd_vc = "";
      this.sd_Bn_List.splice(x,1);
      this.batsmanmessage = player.Playername+" is removed from the team";
      this.totalpoints-= player.points;
    }
    else
    {
      this.batsmanmessage = player.Playername+" is not in the team";
    }
    
  }
  addBowl(player:any)
  {
    if(this.getIndex(this.sd_Br_List,player)==-1)
    {
      this.sd_Br_List.push(player.Playername);
      this.bowlermessage = player.Playername+" is added to the team";
      this.totalpoints+= player.points;
    }
    else
      this.bowlermessage = player.Playername+" is already in the team";
  }
  remBowl(player:any)
  {
    let x = this.getIndex(this.sd_Br_List,player);
    if(x !=-1)
    {
      if(player.Playername == this.sd_cn )
        this.sd_cn = "";
      if(player.Playername == this.sd_vc )
        this.sd_vc = "";
      this.sd_Br_List.splice(x,1);
      this.bowlermessage = player.Playername+" is removed from the team";
      this.totalpoints-= player.points;
    }
    else
    {
      this.bowlermessage = player.Playername+" is not in the team";
    }
  }
  
  isPresent(player:any)
  {
    if(this.sd_WK == player.Playername)
      return true;
    if(this.getIndex(this.sd_Bn_List,player)!=-1)
      return true;
    if(this.getIndex(this.sd_Br_List,player)!=-1)
      return true;  
    return false;
  }
  captain(player:any)
  {
    if(this.isPresent(player)&&this.sd_vc != player.Playername)
      this.sd_cn = player.Playername;
    else
      this.ErrorMessage = "Player must be in team to be captain"
  }
  viceCaptain(player:any)
  {
    if(this.isPresent(player) &&this.sd_cn != player.Playername)
      this.sd_vc = player.Playername;
    else
      this.ErrorMessage = "Player must be in team to be captain"
    
  }
  saveTeam()
  {
    this.ErrorMessage = "";
    if(this.sd_WK==""||this.sd_WK == null)
    {
      this.ErrorMessage = "There must be at least one GoalKeeper";
      return;
    }
    if(this.sd_cn==""||this.sd_vc=="")
    {
      this.ErrorMessage = "There must be Captain and Vice Captain";
      return;
    }
    if(this.sd_Bn_List.length+this.sd_Br_List.length+1 !=11)
    {
      this.ErrorMessage = "There must be 11 Players in the team";
      return;
    }
    if(this.totalpoints >100)
    {
      this.ErrorMessage = "Total points should be less than 100 points";
      return;
    }
    if(this.sd_Br_List.length<3 && this.sd_Br_List.length>6)
    {
      this.ErrorMessage = "There should be atleast 3 Defence players and at most 5 Defence players";
      return;
    }
    if(this.sd_Bn_List.length<3 && this.sd_Bn_List.length>6)
    {
      this.ErrorMessage = "There should be atleast 2 and at most 5 Attacking players";
      return;
    }
    this.selectedPlayers.push(this.sd_WK);
    for(var i = 0;i<this.sd_Bn_List.length;i++)
    {
      this.selectedPlayers.push(this.sd_Bn_List[i]);
    }
    for(var i = 0;i<this.sd_Br_List.length;i++)
    {
      this.selectedPlayers.push(this.sd_Br_List[i]);
    }

    this.getTeams.createTeam(this.username,this.teamname,this.totalpoints,this.selectedPlayers,this.sd_cn,this.sd_vc).subscribe(
      data => {
        this.ErrorMessage = data.message;
        this.router.navigate(['user']);
      },
      err => {
        this.ErrorMessage = "Error while Saving Team";
      }
    );
    

    
  }

}

