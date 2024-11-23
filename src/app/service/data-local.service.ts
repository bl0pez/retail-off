import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Registro } from '../dashboard/models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private _storage: Storage | null = null;
  guardados: Registro[] = [];

  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.init();
  }

  // Inicializa el almacenamiento
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.cargarRegistros();
  }

  // Guarda un registro en la lista y lo persiste en el almacenamiento
  async guardarRegistro(text: string) {
    await this.cargarRegistros();
    const nuevoRegistro = new Registro(text);
    this.guardados.unshift(nuevoRegistro);

    await this._storage?.set('registros', this.guardados);

    this.abrirRegistro(nuevoRegistro);
  }

  // Carga los registros guardados desde el almacenamiento
  async cargarRegistros() {
    const data = await this._storage?.get('registros');
    this.guardados = data || [];
  }

  // Abre un registro según su tipo (http o geo)
  async abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/tabs/tab2');

    switch (registro.type) {
      case 'http':
        await Browser.open({ url: registro.text });
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
        break;
    }
  }
}
