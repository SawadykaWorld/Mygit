import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  // //同步
  // get() {
  //   return "我是一个服务";
  // }
  // //回调函数获取数据
  // getCallBackData(cb) {

  //   setTimeout(() => {

  //     var data = "张三";
  //     //return data;
  //     cb(data);

  //   }, 1000);
  // }
  // //promise函数获取数据
  // getPromiseData() {
  //   return new Promise((resolve, reject) => {

  //     setTimeout(() => {

  //       var data = "张三--pro";
  //       resolve(data);
  //     }, 2000);
  //   })
  // }
  // //Rxjs函数获取数据
  // getRxjsData() {
  //   return new Observable((observable) => {

  //     setTimeout(() => {

  //       var data = "张三--rxjs";
  //       observable.next(data);
  //     }, 3000);

  //   })
  // }

  //promise 定时器多次执行
  // getPromiseIntervalData() {
  //   return new Promise((resolve) => {
  //     setInterval(() => {
  //       var username = '张三';
  //       resolve(username);
  //     }, 1000);
  //   });
  // }

  //rxjs函数执行多次订阅
  // getIntervalRxjsData() {
  //   return new Observable((observable) => {

  //     setInterval(() => {
  //       var username = '张三---rxjs interval';
  //       observable.next(username);
  //     }, 1000);

  //   })
  // }
}

