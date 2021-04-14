import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {NavComponent} from './nav/nav.component';


@NgModule({
    imports: [IonicModule],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class ComponentsModule {}