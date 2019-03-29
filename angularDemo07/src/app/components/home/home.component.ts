import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit() {

    //同步获取数据
    // let data = this.request.get();
    // console.log(data);

    //callback 异步获取数据
    // let callBackData = this.request.getCallBackData((data) => {
    //   console.log(data);
    // });
    // console.log(callBackData);

    //promise获取异步数据
    // var promiseData = this.request.getPromiseData();
    // promiseData.then((data) => {
    //   console.log(data);
    // });

    //rxjs 获取异步数据方法
    // var RxjsData = this.request.getRxjsData();
    // RxjsData.subscribe((data) => {
    //   console.log(data);
    // });

    //Rxjs函数过一秒取消获取数据
    //var RxjsData2 = this.request.getRxjsData();
    // var d = RxjsData2.subscribe((data) => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   d.unsubscribe(); //取消上面获取数据方法的执行
    // }, 2000);

    //promise 执行多次订阅（不可以）
    // var RxjsData = this.request.getPromiseIntervalData();
    // var d = RxjsData.then((data) => {
    //   console.log(data);
    // });

    //rxjs执行多次订阅
    // var RxjsData2 = this.request.getIntervalRxjsData();
    // var d = RxjsData2.subscribe((data) => {
    //   console.log(data);
    // });
  }

}
