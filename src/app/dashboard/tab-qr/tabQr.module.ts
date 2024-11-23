import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TapQrPage } from './tabQr.page'
import { TabQrRoutingModule } from "./tabQr-routing.module";

@NgModule({
    imports: [
        IonicModule,
        TabQrRoutingModule,
    ],
    declarations: [TapQrPage]
})
export class TabQrPageModule {}