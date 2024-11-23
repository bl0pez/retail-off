import { Component, OnInit } from "@angular/core";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'register',
    templateUrl: '/register.page.html'
})
export class RegisterPage {

    user = {
        name: '',
        email: '',
        password: ''
      };

    constructor(public globalState: GlobalStateService) {}

    onSubmit() {
        try {
          this.globalState.register(this.user.email, this.user.password);
        } catch (error) {
          console.error(error);
        }
      }
}