import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //接收父组件传过来的数据
  @Input() title: string;
  @Input() msg: string;
  @Input() run: any;
  @Input() home: any;

  constructor() { }

  ngOnInit() {
  }

  //获取父组件传来的值
  getFaMsg() {
    alert(this.title);
  }

  //执行父组件的方法
  doFaRun() {
    alert(this.home.msg);
    this.home.run();
  }
}
