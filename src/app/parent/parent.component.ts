import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  stock:number;

  constructor() { }

  ngOnInit() {
    this.stock = 100;
  }

  receiver(e:number): void {
    this.stock = e;
  }

}
