import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewcontentComponent } from './components/newcontent/newcontent.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'newcontentComponent', component:NewcontentComponent
  },
  // 注意，这里是以上路由都没有匹配到的时候，重定向到path
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
