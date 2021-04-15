import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderAlertsPageRoutingModule } from './rider-alerts-routing.module';
import  {ComponentsModule} from '../../components/components.module'

import { RiderAlertsPage } from './rider-alerts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderAlertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RiderAlertsPage]
})
export class RiderAlertsPageModule {}
