import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../components/nav/nav.component';
import { IonicModule } from '@ionic/angular';
import  {ComponentsModule} from '../../components/components.module'

import { ModalRoutePageRoutingModule } from './modal-route-routing.module';

import { ModalRoutePage } from './modal-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRoutePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalRoutePage]
})
export class ModalRoutePageModule {}
