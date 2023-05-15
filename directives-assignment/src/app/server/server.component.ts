import { Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  pVisible = false; //showSecret
  clicks = [];

  showParagraph() {
    this.pVisible = !this.pVisible;
    this.clicks.push(new Date());
  }
}
