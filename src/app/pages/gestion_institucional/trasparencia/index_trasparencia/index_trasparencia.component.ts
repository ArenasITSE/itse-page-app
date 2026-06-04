import { Component } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-index-trasparencia',
  templateUrl: './index_trasparencia.component.html',
  styleUrls: ['./index_trasparencia.component.css']
})
export class IndexTransparenciaComponent {

  carpetaAbierta = '';

  carpetaSeleccionada: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {

    this.carpetaSeleccionada =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'about:blank'
      );

  }

  mostrarCarpeta(
    nombreCarpeta: string,
    idCarpeta: string
  ): void {

    if (this.carpetaAbierta === nombreCarpeta) {

      this.carpetaAbierta = '';

      this.carpetaSeleccionada =
      
        this.sanitizer.bypassSecurityTrustResourceUrl(
          'about:blank'
        );

      return;
    }

    this.carpetaAbierta = nombreCarpeta;

    this.carpetaSeleccionada =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://drive.google.com/embeddedfolderview?id=${idCarpeta}#list`
      );

  }

}