import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'app-tab',
    templateUrl: './tab.page.html',
})
export class TabPage implements OnInit {

    constructor(
        public globalState: GlobalStateService,
        public router: Router
      ) {}

    ngOnInit(): void {}
}