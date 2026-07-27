import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Nav_barComponent } from './pages/nav_bar/nav_bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { Social_stickyComponent } from './pages/social_sticky/social_sticky.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Nav_barComponent,
    FooterComponent,
    Social_stickyComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('itse-web');

  private readonly router = inject(Router);

  constructor() {
    // Con hash routing, asegurar scroll al tope en cada navegación del menú
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
  }
}
