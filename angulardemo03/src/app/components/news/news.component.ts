import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public title = '我是新闻组件';

  msg = '我是一个新闻组件msg';

  username:string = 'zhangsan';

  // 推荐
  public student:any = '我是一个学生数据';

  public userinfo:any={
    username:'zhangsan',
    age:'20'
  }

  public message: any;

  public content:any="<h2>我是一个h2标签</h2>";

  public arr:any=['11','22','33'];

  // 推荐
  public list:any[]=["我是一个数组1",22,"我是数组2"];

  public items:Array<any>=["我是一个新闻",22,"我是第三个新闻"];

  public userlist:any[]=[{
    username:"张三",
    age:40
  },{
    username:"李四",
    age:45
  },{
    username:"王五",
    age:43
  }]

  public cars:any[]=[
    {
      cate:"宝马",
      list:[
        {
          title:"宝马x1",
          price:"30万"
        },{
          title:"宝马x2",
          price:"30万"
        },{
          title:"宝马x3",
          price:"30万"
        }
      ]
    },{
      cate:"奥迪",
      list:[
        {
          title:"奥迪q1",
          price:"30万"
        },{
          title:"奥迪q2",
          price:"30万"
        },{
          title:"奥迪q3",
          price:"30万"
        }
      ]
    }
  ]

  /**
   * 声明属性的集中方式
   * public
   * protected
   * private
   * 
   */

  constructor() {
    this.message = '这是给属性赋值';
    console.log(this.msg);
    this.msg='我是改变后的msg';
   }

  ngOnInit(): void {
  }

}
