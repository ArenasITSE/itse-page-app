import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fbEmbed', { static: false }) fbEmbed?: ElementRef<HTMLElement>;

  /**
   * Ancho nativo del Page Plugin (Facebook: máx. 500).
   * Luego se escala con CSS para ocupar todo el contenedor.
   */
  readonly fbPluginWidth = 500;
  readonly fbPluginHeight = 600;
  private fbResizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const el = this.fbEmbed?.nativeElement;
    if (!el) {
      return;
    }

    const syncScale = () => {
      const width = Math.floor(el.getBoundingClientRect().width);
      if (!width) {
        return;
      }
      // Escala el plugin (máx. 500px de FB) para ocupar todo el ancho del panel.
      const scale = width / this.fbPluginWidth;
      el.style.setProperty('--fb-scale', String(scale));
      el.style.setProperty('--fb-height', `${Math.round(this.fbPluginHeight * scale)}px`);
    };

    if (typeof ResizeObserver !== 'undefined') {
      this.fbResizeObserver = new ResizeObserver(() => syncScale());
      this.fbResizeObserver.observe(el);
    }

    // Reintentos: el ancho real de la columna Bootstrap llega un poco después.
    syncScale();
    requestAnimationFrame(syncScale);
    setTimeout(syncScale, 100);
    setTimeout(syncScale, 400);
  }

  ngOnDestroy(): void {
    this.fbResizeObserver?.disconnect();
  }

  images = [
    {
      src: 'assets/carrusel_home/carrusel_99.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_11.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/olinia.jpg',
      link: 'https://www.tecnm.mx/archivos/slider/Convocatoria_Retos_Olinia_TecNM.pdf?documento=49' // ← cambia por tu enlace
    },
    {
      src: 'assets/carrusel_home/carrusel_21.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_33.png',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_4.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_55.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_66.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_77.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_88.jpg',
      link: ''
    }
  ];

}
