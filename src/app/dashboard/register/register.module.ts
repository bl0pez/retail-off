import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterPage } from "./register.page";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterPage]
})
export class RegisterPageModule {};