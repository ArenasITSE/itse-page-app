import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav_quick_bar',
  standalone: true,
  templateUrl: './nav_quick_bar.component.html',
  styleUrl: './nav_quick_bar.component.css'
})
export class Nav_quick_barComponent {
  private readonly router = inject(Router);

  readonly moodleUrl = 'https://acad.itsescarcega.edu.mx/login/index.php';

  /**
   * Igual que TecNM (form → vista Buscar), pero en Angular:
   * navegamos a /buscar?q=... en lugar de POST a PHP.
   */
  onSearch(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const q = String(new FormData(form).get('buscar') ?? '').trim();
    if (!q) {
      return;
    }

    this.closeMobileMenu();
    void this.router.navigate(['/buscar'], {
      queryParams: { q }
    });
  }

  /** Cierra el collapse móvil al elegir Correo/Moodle. */
  onQuickLinkClick(): void {
    this.closeMobileMenu();
  }

  private closeMobileMenu(): void {
    const menu = document.getElementById('quickBarNav');
    if (!menu?.classList.contains('show')) {
      return;
    }

    const bootstrapApi = (
      window as unknown as {
        bootstrap?: {
          Collapse: {
            getOrCreateInstance: (
              el: Element,
              config?: { toggle?: boolean }
            ) => { hide: () => void };
          };
        };
      }
    ).bootstrap;

    if (bootstrapApi?.Collapse) {
      bootstrapApi.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    } else {
      menu.classList.remove('show');
    }
  }
}
