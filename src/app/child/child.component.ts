import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('child_title') info:string;
  @Input('child_items') items:string[];
  @Output('notify') notifyParent: EventEmitter<any> = new EventEmitter<any>();
  newItem:string;
  box:string="redbox";
  newone:string;
  constructor() { }

  ngOnInit() {
  }

update(x:number):void{
 if(x===1)
  this.box="redbox";
 else
  this.box="bluebox";
  }

  sendToParent():void{
    this.notifyParent.emit(this.newone);
  }
}
