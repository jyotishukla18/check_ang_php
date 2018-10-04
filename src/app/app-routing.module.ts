import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from '../app/user/user.component';
import {CreateUserComponent} from '../app/create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes:Routes = [
    {  path:'', redirectTo:"/home", pathMatch:"full"},
    { path:"home", component : UserComponent},
    { path:"create", component : CreateUserComponent},
    { path:"edit/:id", component : EditUserComponent}
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })

export class AppRoutingModule{

}