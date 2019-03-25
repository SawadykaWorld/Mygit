import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title ="我是新闻组件";

  msg="我是新闻组件的msg";

  username:string="zhangsan";

  student:any="我是一个学生的属性";

  public content:string="<h2>我是一个标签</h2>"

  public userinfo:object={
    username:"zhangsan",
    age:"20"
  };

  public message:any;

  //定义一个数组
  public arr =['111','222','333'];
  //public list:any[]=['123','a','b','c'];

  //数组中必须是number
  public list:Array<number>=[123,321,456,654];

  //对象数组
  public userList:Array<object>=[
    {
      username:"zhangsan",
      age:18
    },
    {
      username:"lisi",
      age:19
    },
    {
      username:"wangwu",
      age:20
    }
  ];

  //复杂数组
  public cars:Array<any>=[
    {
      cate:"宝马",
      list:[{
        title:"X1",
        price:1000000
      },
      {
        title:"X2",
        price:2000000
      },
      {
        title:"X3",
        price:3000000
      }]
    },    {
      cate:"奔驰",
      list:[{
        title:"X1",
        price:1000000
      },
      {
        title:"X2",
        price:2000000
      },
      {
        title:"X3",
        price:3000000
      }]
    },    {
      cate:"劳斯莱斯幻影",
      list:[{
        title:"X1",
        price:1000000
      },
      {
        title:"X2",
        price:2000000
      },
      {
        title:"X3",
        price:3000000
      }]
    }
  ]



  constructor() { 
    this.message="改变属性的值";
  }

  ngOnInit() {
  }

}
