import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'es' | 'en' | 'zh';

/**
 * Preferencias de UI compartidas (fuente, idioma, modo oscuro, accesos rápidos).
 * Antes vivían dentro de Nav_barComponent.
 */
@Injectable({ providedIn: 'root' })
export class UiPreferencesService {
  readonly fontSize = signal(100);
  readonly idiomaActual = signal<AppLanguage>('es');

  constructor() {
    this.restoreFromStorage();
  }

  aumentarFuente(): void {
    const next = this.fontSize() + 10;
    this.fontSize.set(next);
    this.applyFontSize(next);
  }

  disminuirFuente(): void {
    if (this.fontSize() <= 70) {
      return;
    }
    const next = this.fontSize() - 10;
    this.fontSize.set(next);
    this.applyFontSize(next);
  }

  normalFuente(): void {
    this.fontSize.set(100);
    this.applyFontSize(100);
  }

  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'darkMode',
      document.body.classList.contains('dark-mode').toString()
    );
  }

  cambiarIdioma(idioma: AppLanguage): void {
    this.idiomaActual.set(idioma);
    localStorage.setItem('idioma', idioma);

    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (!combo) {
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

    combo.dispatchEvent(new Event('change'));
  }

  abrirCorreo(): void {
    window.open('https://outlook.office.com/', '_blank');
  }

  abrirCalendario(): void {
    window.open(
      'assets/anexos/CALENDARIO ESC-ITSE 20262027-08052026-0724.pdf',
      '_blank'
    );
  }

  private restoreFromStorage(): void {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (
      idiomaGuardado === 'es' ||
      idiomaGuardado === 'en' ||
      idiomaGuardado === 'zh'
    ) {
      this.idiomaActual.set(idiomaGuardado);
      // Google Translate carga de forma asíncrona
      setTimeout(() => this.cambiarIdioma(idiomaGuardado), 2000);
    }

    const fuenteGuardada = localStorage.getItem('fontSize');
    if (fuenteGuardada) {
      const size = Number(fuenteGuardada);
      if (!Number.isNaN(size)) {
        this.fontSize.set(size);
        this.applyFontSize(size);
      }
    }

    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }

  private applyFontSize(size: number): void {
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem('fontSize', size.toString());
  }
}
