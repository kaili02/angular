import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any={
    username:'zs',
    sex:'1',
    cityList:['北京','上海','深圳','广州'],
    city:'深圳',
    hobby:[{
      title:'吃饭',
      checked:false
    },{
      title:'睡觉',
      checked:false
    },{
      title:'打豆豆',
      checked:false
    },{
      title:'敲代码',
      checked:false
    }],
    mark:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    // 不采用dom操作

    console.log(this.peopleInfo);
  }
}
