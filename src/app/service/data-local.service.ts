import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Registro } from '../dashboard/models/registro.model';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor(
    private navCtrl: NavController
  ) { 
    this.cargarRegistros();
  }

  async guardarRegistro(text: string) {
    await this.cargarRegistros();
    this.guardados.unshift(new Registro(text));

    await Preferences.set({
      key: 'registros',
      value: JSON.stringify(this.guardados)
    });

    this.abrirRegistro(this.guardados[0]);
  }

  async cargarRegistros() {
    const data = await Preferences.get({ key: 'registros' });
    
    if (data.value) {
      this.guardados = JSON.parse(data.value);
    } else {
      this.guardados = [
        new Registro('http://example.com'),
        new Registro('Texto sin tipo específico'),
        new Registro('http://another-link.com'),
        new Registro('geo:34.052235,-118.243683')
      ];
      
      await Preferences.set({
        key: 'registros',
        value: JSON.stringify(this.guardados)
      });
    }
  }

  async abrirRegistro(registro: Registro) {
    this.navCtrl.navigateForward('/dashboard/history');

    switch (registro.type) {
      case 'http':
        await Browser.open({ url: registro.text });
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/dashboard/mapa/${registro.text}`);
        break;
    }
  }
}
