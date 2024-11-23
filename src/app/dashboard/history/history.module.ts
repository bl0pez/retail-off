import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HistoryRoutingModule } from "./history-routing.module";
import { HistoryPage } from "./history.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HistoryRoutingModule
    ],
    declarations: [HistoryPage]
})
export class HistoryPageModule {};