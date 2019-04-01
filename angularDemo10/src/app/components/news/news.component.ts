import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild("footer") footer: any;

  constructor() { }

  ngOnInit() {
  }
  //获取子组件定义的msg
  getChildMsg() {
    alert(this.footer.msg);
  }
  //执行子组件定义的方法
  doChildRun() {
    this.footer.run();
  }
}
