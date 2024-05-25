import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corebitz';

  movie = {
    title: 'King Kong',
    releaseDate: new Date() ,
    price: 120.34
  }

  duplicateNumber(n: number){
    return n*2;
  }
}
