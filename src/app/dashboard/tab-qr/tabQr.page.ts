import { Component } from "@angular/core";
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerScanResult } from '@capacitor/barcode-scanner';
import { DataLocalService } from "src/app/service/data-local.service";
import { GlobalStateService } from "src/app/service/global-state.service";

@Component({
    selector: 'tab-qr',
    templateUrl: '/tabQr.page.html'
})
export class TapQrPage {
    constructor(
        private dataLocalService: DataLocalService,
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
          } else {
            throw new Error('No se pudo escanear el código QR');
          }
        } catch (error) {
          console.error('Error durante el escaneo:', error);
          this.dataLocalService.guardarRegistro('QRCode no reconocido');
        }
      }
}