import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./pages/first-page/first-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {SuperuserPageComponent} from "./pages/superuser-page/superuser-page.component";
import {UserContentPageComponent} from "./pages/user-content-page/user-content-page.component";
import {SuperuserContentPageComponent} from "./pages/superuser-content-page/superuser-content-page.component";

const routes: Routes = [
  {path : '',component: FirstPageComponent},
  {path : 'login',component: LoginComponent},
  {path : 'user-page',component: UserPageComponent},
  {path : 'superuser-page',component: SuperuserPageComponent},
  {path : 'user-content-page',component: UserContentPageComponent},
  {path : 'superuser-content-page',component: SuperuserContentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
