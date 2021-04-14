import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {NavComponent} from './nav/nav.component';


@NgModule({
    imports: [
        RouterModule,
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class ComponentsModule {}