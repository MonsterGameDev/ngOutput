import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output()
    stockChangeEmitter: EventEmitter<number> = new EventEmitter<number>();
  
  
  stock:number = 100;
  sliderWidth:string = '80%'; 


  constructor() { }

  ngOnInit() {
  }

  decrement(i: number): void {
    this.stock -= i;
    this.stockChangeEmitter.emit(this.stock);
  }

}
