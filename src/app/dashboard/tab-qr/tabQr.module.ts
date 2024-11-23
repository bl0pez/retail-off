import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TapQrPage } from './tabQr.page'
import { TabQrRoutingModule } from "./tabQr-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabQrRoutingModule,
    ],
    declarations: [TapQrPage]
})
export class TabQrPageModule {}