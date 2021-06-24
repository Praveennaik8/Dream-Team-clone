import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ViewAllteamComponent } from './view-allteam/view-allteam.component';
import { ViewteamComponent } from './viewteam/viewteam.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { CreateCricketTeamComponent } from './create-cricket-team/create-cricket-team.component';
import { CreateFootballTeamComponent } from './create-football-team/create-football-team.component';
import { ViewFootballteamComponent } from './view-footballteam/view-footballteam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ViewAllteamComponent,
    ViewteamComponent,
    ChooseGameComponent,
    CreateCricketTeamComponent,
    CreateFootballTeamComponent,
    ViewFootballteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
