import { Component } from '@angular/core';
import { LocalService } from '../../../local/local.service';

@Component({
  selector: 'runk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {
  constructor(private local: LocalService) {}

  checkLogin() {
    if(this.local.checkLogin('login')){
      return true;
    } else {
      return false;
    }
  }

  logOut(){
    this.local.setLogin('login', '');
  }
}
