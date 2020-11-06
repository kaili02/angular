// 引入ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  //获取dom节点, #mybox 可以理解为id的另一种写法
  @ViewChild('mybox') myBox:any;

  //获取一个组件
  @ViewChild('header') header:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    console.log(this.myBox.nativeElement);

    console.log(this.myBox.innerHTML);
  }

  
  getChildRun(){
    this.header.run();
  }
}
