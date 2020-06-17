import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   message = 'Click on a button';
  textBtnConfig = {
    text: 'Registrarse'
  };

  onClickEventReceived(event: string) {
    console.log(event,'sfd')
    this.message = event;
  }


  title = 'angular';
}
