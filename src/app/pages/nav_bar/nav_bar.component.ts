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

  // 🔥 Controla si se muestra el encabezado superior
  mostrarHeader = true;

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

 @HostListener('window:scroll')
onScroll(): void {

  const y = window.scrollY;

  // Solo mostrar la barra roja cuando estés realmente cerca del inicio
  this.mostrarHeader = y < 80;
}

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

}