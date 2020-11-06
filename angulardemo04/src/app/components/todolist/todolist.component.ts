import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword:string;
  public todoList:any[]=[];

  constructor(public storage:StorageService) { 
    // console.log(this.storage.get());
  }

  ngOnInit(): void {

    //组件和指令初始化完成  并不是真正的dom加载完成

    var todoListCache = this.storage.get('todoList');
    if (todoListCache) {
      this.todoList = todoListCache;
    }
  }

  doAdd(e){
    if (e.keyCode==13){ // enter
      // alert(e.keyCode);
      // 不存在时添加
      if (!this.todoListHasKeyword(this.todoList, this.keyword)) {
        this.todoList.push({
          title:this.keyword,
          isAgency: true // true 代办 false 已完成
        });
        this.storage.set('todoList', this.todoList);
      }else{
        alert("数据已经存在");
      }
    }

  }


  deleteData(key){
    // 数组中删除指定下标
    this.todoList.splice(key, 1);
    this.storage.set('todoList', this.todoList);

  }

  // 如果数组中存在返回true,不存在返回false
  todoListHasKeyword(todoList:any, keyword:any){

    // 异步 会存在问题
    // todoList.forEach(value => {
    //   if (value.title === keyword){
    //     return true;
    //   }
    // });

    if (!keyword) return false; 

    // let 局部变量, const 常量, var 全局变量 
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].title === keyword){
        return true;
      }
    }

    return false;
  }

  /**
   * checkboxChange
   */
  checkboxChange(){

    console.log('事件触发了');
    this.storage.set('todoList', this.todoList);
  }
 
}
