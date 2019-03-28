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
    console.log(this.storage.get());
  }

  ngOnInit() {
  }

  doSerch() {
    if(this.historyList.indexOf(this.searchText)==-1){
      this.historyList.push(this.searchText);
    }
    this.searchText="";
  }

  delList(key) {
    this.historyList.splice(key,1);
  }
}
