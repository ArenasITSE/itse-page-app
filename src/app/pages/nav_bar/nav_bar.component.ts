import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav_bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav_bar.component.html',
  styleUrls: ['./nav_bar.component.css']
})
export class Nav_barComponent implements OnInit {

  // ==========================
  // CONFIGURACIÓN
  // ==========================

  fontSize = 100;

  idiomaActual: 'es' | 'en' | 'zh' = 'es';

  // 🔥 Controla si se muestra la franja blanca (logos/herramientas)
  mostrarHeader = true;

  private lastScrollY = 0;
  private scrollLock = false;
  /** Evita reabrir el header tras el salto de scroll al colapsarlo */
  private puedeMostrarHeader = false;

  constructor() { }

  ngOnInit(): void {

    // ==========================
    // IDIOMA
    // ==========================

    const idiomaGuardado = localStorage.getItem('idioma');

    if (
      idiomaGuardado === 'es' ||
      idiomaGuardado === 'en' ||
      idiomaGuardado === 'zh'
    ) {

      this.idiomaActual = idiomaGuardado;

      setTimeout(() => {
        this.cambiarIdioma(this.idiomaActual);
      }, 2000);
    }

    // ==========================
    // FUENTE
    // ==========================

    const fuenteGuardada = localStorage.getItem('fontSize');

    if (fuenteGuardada) {

      this.fontSize = Number(fuenteGuardada);

      document.documentElement.style.fontSize =
        `${this.fontSize}%`;
    }

    // ==========================
    // MODO OSCURO
    // ==========================

    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'true') {

      document.body.classList.add('dark-mode');
    }
  }

  // ==========================
  // SCROLL
  // ==========================

<<<<<<< HEAD
 @HostListener('window:scroll')
onScroll(): void {

  const y = window.scrollY;

  // Solo mostrar la barra roja cuando estés realmente cerca del inicio
  this.mostrarHeader = y < 80;
}
=======
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.scrollLock) {
      return;
    }

    const y = window.scrollY;
    const bajando = y > this.lastScrollY;

    // Ocultar encabezado (y mostrar logo TecNM) al bajar
    if (this.mostrarHeader && y > 120) {
      this.scrollLock = true;
      this.mostrarHeader = false;
      this.puedeMostrarHeader = false;
      this.lastScrollY = y;

      // Ignora el salto de scroll que provoca max-height: 0
      setTimeout(() => {
        this.lastScrollY = window.scrollY;
        this.scrollLock = false;
      }, 450);
      return;
    }

    // Con el header oculto: solo permitir mostrarlo de nuevo
    // después de que el usuario siga bajando un poco
    if (!this.mostrarHeader) {
      if (!this.puedeMostrarHeader && y > 80) {
        this.puedeMostrarHeader = true;
      }

      if (this.puedeMostrarHeader && !bajando && y < 40) {
        this.scrollLock = true;
        this.mostrarHeader = true;
        this.puedeMostrarHeader = false;
        this.lastScrollY = y;

        setTimeout(() => {
          this.lastScrollY = window.scrollY;
          this.scrollLock = false;
        }, 450);
        return;
      }
    }

    this.lastScrollY = y;
  }
>>>>>>> eliseocc

  // ==========================
  // FUENTE
  // ==========================

  aumentarFuente(): void {

    this.fontSize += 10;

    document.documentElement.style.fontSize =
      `${this.fontSize}%`;

    localStorage.setItem(
      'fontSize',
      this.fontSize.toString()
    );
  }

  disminuirFuente(): void {

    if (this.fontSize > 70) {

      this.fontSize -= 10;

      document.documentElement.style.fontSize =
        `${this.fontSize}%`;

      localStorage.setItem(
        'fontSize',
        this.fontSize.toString()
      );
    }
  }

  normalFuente(): void {

    this.fontSize = 100;

    document.documentElement.style.fontSize = '100%';

    localStorage.setItem(
      'fontSize',
      '100'
    );
  }

  // ==========================
  // MODO OSCURO
  // ==========================

  toggleDarkMode(): void {

    document.body.classList.toggle('dark-mode');

    localStorage.setItem(
      'darkMode',
      document.body.classList.contains('dark-mode').toString()
    );
  }

  // ==========================
  // IDIOMAS
  // ==========================

  cambiarIdioma(idioma: 'es' | 'en' | 'zh'): void {

    this.idiomaActual = idioma;

    localStorage.setItem('idioma', idioma);

    const combo =
      document.querySelector('.goog-te-combo') as HTMLSelectElement;

    if (!combo) {

      console.warn(
        'Google Translate aún no está disponible'
      );

      return;
    }

    switch (idioma) {

      case 'es':
        combo.value = 'es';
        break;

      case 'en':
        combo.value = 'en';
        break;

      case 'zh':
        combo.value = 'zh-CN';
        break;
    }

    combo.dispatchEvent(
      new Event('change')
    );

    console.log(
      'Idioma seleccionado:',
      idioma
    );
  }

  // ==========================
  // ENLACES RÁPIDOS
  // ==========================

  abrirCorreo(): void {

    window.open(
      'https://outlook.office.com/',
      '_blank'
    );
  }

  abrirCalendario(): void {

    window.open(
      'assets/anexos/CALENDARIO ESC-ITSE 20262027-08052026-0724.pdf',
      '_blank'
    );
  }

  // ==========================
  // MENÚ MÓVIL
  // ==========================

  /** Cierra el menú colapsable tras elegir un enlace (solo en pantallas angostas). */
  onMenuNavClick(event: Event): void {
    const toggler = document.querySelector(
      '.menu-bar .navbar-toggler'
    ) as HTMLElement | null;

    // En desktop el toggler está oculto: no hay nada que contraer
    if (!toggler || getComputedStyle(toggler).display === 'none') {
      return;
    }

    const target = event.target as HTMLElement | null;
    const link = target?.closest('a');
    if (!link) {
      return;
    }

    // No cerrar al abrir un dropdown de primer nivel
    if (
      link.classList.contains('nav-link') &&
      link.classList.contains('dropdown-toggle')
    ) {
      return;
    }

    const menu = document.getElementById('menuNav');
    if (!menu?.classList.contains('show')) {
      return;
    }

    const bootstrapApi = (window as unknown as {
      bootstrap?: {
        Collapse: {
          getOrCreateInstance: (
            el: Element,
            config?: { toggle?: boolean }
          ) => { hide: () => void };
        };
      };
    }).bootstrap;

    if (bootstrapApi?.Collapse) {
      bootstrapApi.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    } else {
      toggler.click();
    }
  }

}