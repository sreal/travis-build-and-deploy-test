import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hollaback Bot';
  teams = [
    { name: "Pizza Roulette", ready: false },
    { name: "Shared Space", ready: false },
    { name: "Daisy Chain", ready: false },
    { name: "Hearty Habits", ready: false },
    { name: "Crowdhound", ready: false },
    { name: "Hollaback Bot.", ready: false },
    { name: "Dirt", ready: false },
    { name: "Pegasus", ready: false },
    { name: "Y@Voice", ready: false },
    { name: "Flytly", ready: false }
  ];
}
