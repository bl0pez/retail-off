import { Component } from "@angular/core";
import { CapacitorBarcodeScanner } from "@capacitor/barcode-scanner";
import { DataLocalService } from "src/app/service/data-local.service";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'tabQr',
    templateUrl: '/tabQr.page.html'
})
export class TapQrPage {
    constructor(
        private dataLocalService: DataLocalService,
        private globalStateService: GlobalStateService
      ) {}
    
      async scanBarcode(val?: number) {
        try {
          const result = await CapacitorBarcodeScanner.scanBarcode({
            hint: val || 17,
            cameraDirection: 1,
            scanText: 'Escanear',
          });
          return result.ScanResult;
    
        } catch (error) {
          throw error;
        }
      }
    
      async scan() {
        try {
          const result = await this.scanBarcode();
          
          if (result) {
            this.dataLocalService.guardarRegistro(result);
          }
    
        } catch (error) {
          this.dataLocalService.guardarRegistro('QRCode no reconocido');
        }
      }
    
      async logout() {
        try {
          await this.globalStateService.logout();
        } catch (error) {
          console.error(error);
        }
      }
}