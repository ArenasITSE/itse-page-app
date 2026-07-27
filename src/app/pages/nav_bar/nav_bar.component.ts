import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  signal
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav_gob_barComponent } from './nav_gob_bar/nav_gob_bar.component';
import { Nav_tools_barComponent } from './nav_tools_bar/nav_tools_bar.component';
import { Nav_quick_barComponent } from './nav_quick_bar/nav_quick_bar.component';

@Component({
  selector: 'app-nav_bar',
  standalone: true,
  imports: [
    RouterModule,
    Nav_gob_barComponent,
    Nav_tools_barComponent,
    Nav_quick_barComponent
  ],
  templateUrl: './nav_bar.component.html',
  styleUrls: ['./nav_bar.component.css']
})
export class Nav_barComponent implements OnInit {
  /** Controla si se muestra la franja blanca (logos/herramientas). */
  readonly mostrarHeader = signal(true);

  /**
   * Desktop (≥992px): menús por hover (estilo TecNM/bootnavbar).
   * Móvil: Bootstrap dropdown por clic.
   */
  readonly isDesktopMenu = signal(false);

  /**
   * Tras elegir una opción, fuerza el cierre del dropdown aunque el mouse
   * siga encima (en SPA no hay reload y :hover dejaría el menú abierto).
   */
  readonly menusForceClosed = signal(false);

  @ViewChild('menuNav') private menuNav?: ElementRef<HTMLElement>;
  @ViewChild('menuToggler') private menuToggler?: ElementRef<HTMLElement>;

  private lastScrollY = 0;
  private scrollLock = false;
  private scrollLockTimer: ReturnType<typeof setTimeout> | null = null;

  private readonly hideHeaderY = 120;
  private readonly showHeaderY = 40;
  private readonly topForceShowY = 12;

  ngOnInit(): void {
    this.syncMenuMode();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncMenuMode();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.scrollLock) {
      return;
    }
    this.updateHeaderVisibility();
  }

  /**
   * - En el tope siempre se muestra la franja blanca.
   * - Al bajar past hideHeaderY se oculta.
   * - Al subir cerca del tope se vuelve a mostrar.
   */
  private updateHeaderVisibility(): void {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const bajando = y > this.lastScrollY + 1;
    const subiendo = y < this.lastScrollY - 1;

    if (y <= this.topForceShowY) {
      if (!this.mostrarHeader()) {
        this.mostrarHeader.set(true);
      }
      this.lastScrollY = y;
      return;
    }

    if (this.mostrarHeader() && bajando && y > this.hideHeaderY) {
      this.mostrarHeader.set(false);
      this.lastScrollY = y;
      this.lockScrollBriefly();
      return;
    }

    if (!this.mostrarHeader() && subiendo && y < this.showHeaderY) {
      this.mostrarHeader.set(true);
      this.lastScrollY = y;
      this.lockScrollBriefly();
      return;
    }

    this.lastScrollY = y;
  }

  private lockScrollBriefly(ms = 320): void {
    this.scrollLock = true;

    if (this.scrollLockTimer !== null) {
      clearTimeout(this.scrollLockTimer);
    }

    this.scrollLockTimer = setTimeout(() => {
      this.scrollLock = false;
      this.scrollLockTimer = null;
      this.lastScrollY = window.scrollY || document.documentElement.scrollTop || 0;

      if (this.lastScrollY <= this.topForceShowY) {
        this.mostrarHeader.set(true);
      }
    }, ms);
  }

  private syncMenuMode(): void {
    this.isDesktopMenu.set(window.innerWidth >= 992);
  }

  /** Al salir del menú, permite volver a abrir por hover. */
  onMenuBarMouseLeave(): void {
    this.menusForceClosed.set(false);
  }

  /**
   * Cierra dropdowns (desktop) y el collapse (móvil) al elegir una opción.
   * Antes solo cerraba en móvil: en desktop el toggler está oculto y se
   * hacía return temprano, por eso el menú quedaba abierto.
   */
  onMenuNavClick(event: Event): void {
    const target = event.target as HTMLElement | null;
    const link = target?.closest('a');
    if (!link) {
      return;
    }

    // No cerrar al abrir/cerrar un toggle sin navegación (Misceláneos, etc.)
    if (this.isMenuToggleOnly(link)) {
      return;
    }

    this.closeAllMenus();
  }

  private isMenuToggleOnly(link: HTMLElement): boolean {
    // Títulos de primer nivel (Programas, Servicios, etc.)
    if (link.classList.contains('nav-link') && link.classList.contains('dropdown-toggle')) {
      return true;
    }

    // Submenús (Misceláneos / Transparencia): toggle sin destino real
    if (link.classList.contains('dropdown-item') && link.classList.contains('dropdown-toggle')) {
      const href = (link.getAttribute('href') || '').trim();
      // Sin href o solo "#": no navega. Si Angular/routerLink puso "#/ruta", sí navega.
      return !href || href === '#';
    }

    return false;
  }

  private closeAllMenus(): void {
    this.menusForceClosed.set(true);
    (document.activeElement as HTMLElement | null)?.blur();

    const root = this.menuNav?.nativeElement;
    if (root) {
      root.querySelectorAll('.dropdown-menu.show').forEach((el) => {
        el.classList.remove('show');
      });
      root.querySelectorAll('[aria-expanded="true"]').forEach((el) => {
        el.setAttribute('aria-expanded', 'false');
      });
    }

    // Collapse móvil
    const toggler = this.menuToggler?.nativeElement ?? null;
    if (!toggler || getComputedStyle(toggler).display === 'none') {
      return;
    }

    const menu = this.menuNav?.nativeElement;
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
