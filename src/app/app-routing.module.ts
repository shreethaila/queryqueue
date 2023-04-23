import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { QnpageComponent } from './qnpage/qnpage.component';
import { AnswerpageComponent } from './answerpage/answerpage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path: 'page/:id', component: PageComponent },
  {path:'askqn',component: QnpageComponent},
  {path:'answerpage/:id',component:AnswerpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
