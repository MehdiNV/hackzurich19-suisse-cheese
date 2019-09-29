import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  usernameInput: string = "";

  constructor() { }

  ngOnInit() {
  }

  public grabUserInfo(){
    var usernameVal = this.usernameInput;
  }

  public clickToggle(){
    document.body.classList.toggle('--ion-color-dark');
    document.body.classList.toggle('dark');
  }

}
