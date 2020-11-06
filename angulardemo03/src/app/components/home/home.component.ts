import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imgUrl="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=205441424,1768829584&fm=26&gp=0.jpg";

  public flag:boolean = true;

  public title:string = "我是一个title.";

  public orderStatus:number=1;

  public date:Date=new Date();

  public list:any=[
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

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert("这是一个事件");
  }

  getData(){
    alert(this.title);
  }

  setData(){
    this.title='这是一个改变后的title';
  }

  keyDown(e:any){
    console.log(e);
    if (e.keyCode == 13){
      console.log("按了一下回车");
    }else{
      console.log(e.target.value);
    }
  }
}
