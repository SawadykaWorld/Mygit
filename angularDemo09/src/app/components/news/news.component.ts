import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //获取Dom节点
  @ViewChild("myBox") mybox: any;

  //获取一个组件
  @ViewChild("header") header: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mybox.nativeElement.style.width = "200px";
    this.mybox.nativeElement.style.height = "200px";
    this.mybox.nativeElement.style.background = "pink";
    console.log(this.mybox.nativeElement.innerHTML);
  }

  //获取子组件中的方法
  go() {
    this.header.run();
  }
}
