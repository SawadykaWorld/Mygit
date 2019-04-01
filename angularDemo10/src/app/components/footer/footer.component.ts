import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public msg: string = "我是子组件的一个msg";

  constructor() { }

  ngOnInit() {
  }

  run() {
    alert("我是子组件的一个方法");
  }
}
