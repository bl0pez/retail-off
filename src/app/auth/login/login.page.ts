import { Component } from "@angular/core";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'login',
    templateUrl: '/login.page.html'
})
export class LoginPage {

    user = {
        email: "blopez4434@gmail.com",
        password: "123456"
    };

    constructor(public globalState: GlobalStateService) {}

    onSubmit() {
        try {
          this.globalState.login(this.user.email, this.user.password);
        } catch (error) {
          console.error(error);
        }
      }
}