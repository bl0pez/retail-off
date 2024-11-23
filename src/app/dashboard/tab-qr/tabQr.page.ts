import { Component } from "@angular/core";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'tabQr',
    templateUrl: '/tabQr.page.html'
})
export class TapQrPage {
    constructor(public globalState: GlobalStateService) {}
}