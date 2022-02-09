import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PlayerapiService } from '../services/playerapi.service';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.css']
})
export class AuthBtnComponent implements OnInit {

  constructor(public auth: AuthService, private playerApi: PlayerapiService) { }
  
  logIn(){
    this.auth.loginWithRedirect();
  }
  logOut(){
    this.auth.logout();
  }
  
  sendHttpRequest() {
        
  }

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.user$.subscribe((userInfo)=> { 
      if (userInfo?.nickname==null) {
        console.log("nothing to show")
      } else {
        console.log(userInfo?.nickname);
        console.log(userInfo);
        this.playerApi.getLoginPlayer(userInfo?.nickname);
        
      }
    })

  }

}
