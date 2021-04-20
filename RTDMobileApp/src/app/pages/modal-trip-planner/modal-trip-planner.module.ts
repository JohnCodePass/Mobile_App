import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTripPlannerPageRoutingModule } from './modal-trip-planner-routing.module';

import { ModalTripPlannerPage } from './modal-trip-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTripPlannerPageRoutingModule
  ],
  declarations: [ModalTripPlannerPage]
})
export class ModalTripPlannerPageModule {}
