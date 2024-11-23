import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/service/global-state.service';
 // Asegúrate de importar el servicio

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any = null;   // Usuario autenticado
  guardados:any[] = [];
  saldoCuenta: number = 0;

  constructor(private globalStateService: GlobalStateService) { }

  ngOnInit() {
    this.cargarUsuario();
    this.cargarRegistros();
    this.obtenerSaldoCuenta();
  }

  cargarUsuario() {
    // Nos suscribimos al observable del usuario que viene del servicio
    this.globalStateService.user.subscribe(user => {
      this.user = user;  // Asignamos el usuario autenticado
      console.log('Usuario autenticado:', this.user);
    });
  }

  cargarRegistros() {
    // Usar registros estáticos o lógica que desees implementar
    this.guardados = [
      { text: 'Compra de producto A', created: '2024-11-20T10:00:00' },
      { text: 'Compra de producto B', created: '2024-11-21T12:30:00' },
      { text: 'Compra de producto C', created: '2024-11-22T14:45:00' }
    ];
  }

  obtenerSaldoCuenta() {}

  logout() {
    this.globalStateService.logout();  // Llamamos al logout del servicio
  }
}
