import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vinculacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.css']
})
export class VinculacionComponent implements OnInit {

  seccionActiva: string = 'deporte';
  subSeccion: string = 'incubacion';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // 🔥 SOLO EN NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('seccion');
      if (saved) this.seccionActiva = saved;
    }
  }

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;

    // 🔥 SOLO EN NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('seccion', seccion);
    }
  }

}