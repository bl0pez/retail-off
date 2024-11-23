import { Component, OnInit } from "@angular/core";
import { DataLocalService } from "src/app/service/data-local.service";
import { Registro } from "../models/registro.model";

@Component({
    selector: 'historial',
    templateUrl: '/history.page.html'
})
export class HistoryPage {

    guardados: Registro[] = [];

    constructor(
        public dataLocal: DataLocalService
    ) { }

    async abrirRegistro(registro: Registro) {
        await this.dataLocal.abrirRegistro(registro);
    }
}