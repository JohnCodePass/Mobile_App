import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRoutePage } from '../modal-route/modal-route.page';
import { ModalTripPlannerPage } from '../modal-trip-planner/modal-trip-planner.page'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async presentRouteModal() {
    const modal = await this.modalController.create({
      component: ModalRoutePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentTripModal() {
    const modal = await this.modalController.create({
      component: ModalTripPlannerPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
