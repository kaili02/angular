import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public reportList:any[]=[];

  public items:any[]=[
      "上海",
      "北京",
      "广东",
      "郑州"
  ]


  constructor() { }

  ngOnInit(): void {
  }

 /**
  * 增加一行事件
  */
 addBtn(){
  this.reportList.push({
    isSelect:false,
    isfroce:false,
    firstName:'',
    selectedValue:'',
    link:'http://www.baidu.com'
  });
  }

 /**
  * 删除行事件
  */
  delBtn(){
    // this.arrayList.removeAt(i);
    //批量删除的方法
    for (var i = 0; i < this.reportList.length; i++) {
      if (this.reportList[i].isSelect) {
        this.reportList.splice(i, 1);
          i--;
      }
    }
  }

/**
 * 全选需要优化
 */
selectAll(){
  this.reportList.forEach(item=>{
    item.isSelect=true;
  })
}
 
 submit(){
   console.log(this.reportList);

  }

 clearData(){
  this.reportList.forEach(item=>{
    item = {
      isSelect:false,
      isfroce:false,
      firstName:'',
      selectedValue:'',
      link:'http://www.baidu.com'
    }
  })
}


}
