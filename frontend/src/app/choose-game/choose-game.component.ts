import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetTeams } from '../_services/get-teams.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css']
})
export class ChooseGameComponent implements OnInit {

  constructor(private getTeams: GetTeams,private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  createCricketTeam()
  {
      this.router.navigate(['createCricketTeam']);
  }
  createFootballTeam()
  {
    this.router.navigate(['createFootballTeam']);
  }


}
