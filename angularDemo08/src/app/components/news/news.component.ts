import { Component, OnInit } from '@angular/core';

//当作引入一个服务
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list: any[] = [];
  constructor(public http: HttpClient) {

  }

  ngOnInit() {
  }

  //获取数据
  getData() {
    //服务器必须跨域
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.result;
    })
  }

  doLogin() {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    };
    var api = "http://112.103.135.105:3900/users/";
    this.http.post(api, { 'username': 'zhangsan', 'age': 13 }, httpOptions).subscribe((response) => {
      console.log(response);
    });
  }
}
