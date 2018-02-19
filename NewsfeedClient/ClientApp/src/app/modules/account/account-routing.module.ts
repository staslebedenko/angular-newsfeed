import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';


const accountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {
}
