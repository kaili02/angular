import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service';
/**
 * 不推荐
    var storage = new StorageService();
    console.log(storage); 
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword:string;
  public historyList:any[]=[];

  constructor(public storage:StorageService) { 
    // console.log(this.storage.get());
  }
 
  ngOnInit(): void {
    console.log("页面刷新会触发这个生命周期函数.");
    // 页面刷新不清除搜索缓存数据
    var searchList = this.storage.get("searchList");
    if (searchList) {
      this.historyList = searchList;
    }
  }

  doSearch(){
      // 不存在 == -1
      if (this.historyList.indexOf(this.keyword) == -1) {
        this.historyList.push(this.keyword);
        this.storage.set('searchList', this.historyList);
      }
      // this.keyword = '';
      console.log(this.keyword);
  }

  deleteHistory(key){
    alert(key);
    // 数组中删除指定下标
    this.historyList.splice(key, 1);
    this.storage.set('searchList', this.historyList);
  }

}
