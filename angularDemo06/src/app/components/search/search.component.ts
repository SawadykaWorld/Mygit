import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText:string;
  public historyList:any[]=[];
  constructor(public storage:StorageService) {
    
  }

  ngOnInit() {
    console.log('页面加载就会执行这个初始化函数');
    //判断缓存中有没有数据
    var searchList:any = this.storage.get('searchList');
    if(searchList){
      //如果有将缓存中的数据赋值给historyList
      this.historyList = searchList;
    }
  }

  doSerch() {
    if(this.historyList.indexOf(this.searchText)==-1){

      this.historyList.push(this.searchText);
      //将用户输入的值存入storage中
      this.storage.set('searchList',this.historyList);
    }
    this.searchText="";
  }

  delList(key) {
    this.historyList.splice(key,1);
    //将删除后的数据重新set到storage中
    this.storage.set('searchList',this.historyList);
  }
}
