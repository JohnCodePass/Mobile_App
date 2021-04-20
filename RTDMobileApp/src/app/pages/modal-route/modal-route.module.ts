import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRoutePageRoutingModule } from './modal-route-routing.module';

import { ModalRoutePage } from './modal-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRoutePageRoutingModule
  ],
  declarations: [ModalRoutePage]
})
export class ModalRoutePageModule {}
