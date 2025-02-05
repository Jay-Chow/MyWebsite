import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1;
  }
  
  onKeyPress(event: any){
    this.name = event.target.value;
  }
  }
