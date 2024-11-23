import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapQrPage } from './tabQr.page';
const routes: Routes = [
    {
        path: '',
        component: TapQrPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabQrRoutingModule {};