import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterPage } from "./register.page";

@NgModule({
    imports: [
        IonicModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterPage]
})
export class RegisterPageModule {};