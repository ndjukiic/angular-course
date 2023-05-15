import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  username = '';
  isEmpty = true;

  // checkInput(){
  //   if(this.username !== ""){
  //     this.isEmpty = false;
  //   }
  // }

  checkInput(){ // nema potrebe za if statementom jer je dovoljno da event listener tipa input mijenja samu boolean varijablu
    this.isEmpty = false;
  }

  resetInput(){
    this.username = "";
    this.isEmpty = true;
  }
}
