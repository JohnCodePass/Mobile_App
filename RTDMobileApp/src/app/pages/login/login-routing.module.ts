import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAcctComponent } from './create-acct/create-acct.component';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,

  },
  {
    path: 'createAcct',
    component: CreateAcctComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
