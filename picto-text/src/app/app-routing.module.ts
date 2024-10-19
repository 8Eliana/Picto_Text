import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";

const routes: Routes = [
  {path : 'first-page',component: FirstPageComponent},
  {path : 'login',component: LoginComponent},
  {path : 'user-page',component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
