import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,FormArray } from '@angular/forms';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent  {

  constructor(
    // private router: Router, 
    private formBuilder: FormBuilder) { }

  public fg:FormGroup =this.formBuilder.group(
    { 
      // 创建数组对象
      arrayList:this.formBuilder.array([])
    }
  );

  public infoList:any = [{
    isSelect:false,
      isfroce:false,
      firstName:'zs',
      age:'16',
      profession:'zs'
  },{
    isSelect:false,
      isfroce:false,
      firstName:'ww',
      age:'16',
      profession:'ww'
  },{
    isSelect:true,
      isfroce:true,
      firstName:'ls',
      age:'18',
      profession:'ls'
  }
]

  /**
   * 获取数组对象
   */
  get arrayList()
  {
    return this.fg.get('arrayList') as FormArray;
  }

  /**
   * 创建一行组件
   */
 createRow(){
   return this.formBuilder.group({

      isSelect:false,
      isfroce:false,
      firstName:'',
      age:'',
      profession:''
    });
 }

 loadRows(){
   for (let index = 0; index < this.infoList.length; index++) {
     const element = this.infoList[index];
     const i = this.formBuilder.group(element);
     this.arrayList.push(i);
   }
}
 /**
  * 增加一行事件
  */
 addBtn(){
  let row = this.createRow();
  this.arrayList.push(row);
 }
 /**
  * 删除一行事件
  */
 delBtn(i:number){
   this.arrayList.removeAt(i);
 }

  delBtn2(){
    // this.arrayList.removeAt(i);
    //批量删除的方法
    for (var i = 0; i < this.arrayList.length; i++) {
      if (this.arrayList.value[i].isSelect) {
        this.arrayList.removeAt(i);
          i--;
      }
    }
  }

/**
 * 全选需要优化
 */
selectAll(){
  this.arrayList.controls.forEach(item=>{
    item.patchValue({
      isSelect:true
    })
  })
}
 
 submit(){
   console.log(this.fg.value);

  }

 clearData(){
  this.arrayList.controls.forEach(item=>{
    item.patchValue({
      isSelect:false,
      isfroce:false,
      firstName:'',
      age:'',
      profession:''
    })
  })
}

 ngOnInit(): void {
  console.log('news ng on init.');
  debugger;
  // 当传进来的数据为空时添加一行，不为空时，加载数据, 修改数组添加元素的方式
  if (this.infoList.length > 0) {
    this.loadRows();
  } else {
    this.addBtn();
  }
  
 }
}