import { NgModule } from "@angular/core";
import { LoginPage } from "./login.page";
import { IonicModule } from "@ionic/angular";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginRoutingModule
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {};