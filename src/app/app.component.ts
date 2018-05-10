import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  childtitles:string[]=["Electronic Items","Stattionaries","Sport Items"];
  things:string[][]=[
    ["RAM", "Pen Drive", "Hard Disk","Tablet","KeyBoard"],
    ["Pen", "Pencil", "Paper", "Eraser"],
    ["Bat", "Ball", "Gloves", "Pad"]
  ]
  newitem:string;

  subscribeinfo(info, boxnumber):void{
    this.newitem =info;
    this.things[boxnumber].push(info);
  }
}
