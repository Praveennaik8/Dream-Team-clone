import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ViewAllteamComponent } from './view-allteam/view-allteam.component';
import { ViewteamComponent } from './viewteam/viewteam.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { CreateCricketTeamComponent } from './create-cricket-team/create-cricket-team.component';
import { CreateFootballTeamComponent } from './create-football-team/create-football-team.component';
import { ViewFootballteamComponent } from './view-footballteam/view-footballteam.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'viewteams', component:ViewAllteamComponent},
  { path: 'view', component:ViewteamComponent},
  { path: 'choosegame', component:ChooseGameComponent},
  { path: 'createCricketTeam', component:CreateCricketTeamComponent},
  { path: 'createFootballTeam', component:CreateFootballTeamComponent},
  { path: 'viewFootballteam', component:ViewFootballteamComponent},
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
