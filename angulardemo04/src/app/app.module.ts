import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//引入表单相关的模块 才可以用双向数据绑定
import { FormsModule } from '@angular/forms';

// 引入服务，同时配置在@ngModule.providers中
import { StorageService } from './services/storage.service';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService], // 配置服务的地方， 组件可用，同时 组件需要引入
  bootstrap: [AppComponent]
})
export class AppModule { }
