import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag:boolean = true;

  constructor() { }

  ngOnInit(): void {
    // 组件和指令初始化完成， 并不是真正的dom加载完成
    let oBox:any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color='red';

    // 获取不到dom节点, div标签中含有ngIf
    /*
        let oBox2:any = document.getElementById('box2');
        console.log(oBox2.innerHTML);
        oBox2.style.color='red';
    */
  }

  /**
   * 试图加载完成以后触发的方法  dom加载完成，（建议把dom操作放在这个里面）
   */
  ngAfterViewInit(): void {

    let oBox2:any = document.getElementById('box2');
    console.log(oBox2.innerHTML);
    oBox2.style.color='red';
    
  }

}
