import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public flag: boolean = true;

  constructor() { }

  ngOnInit() {
    let oBox: any = document.getElementById("box");
    console.log(oBox.innerHTML);
    oBox.style.color = "red";
  }

  ngAfterViewInit() {
    let oBox1: any = document.getElementById("box1");
    console.log(oBox1.innerHTML);
    oBox1.style.color = "pink";
  }

}
