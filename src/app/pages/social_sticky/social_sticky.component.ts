import {
  afterNextRender,
  Component,
  DestroyRef,
  HostListener,
  inject,
  Injector,
  signal
} from '@angular/core';

export interface SocialStickyLink {
  platform: string;
  href: string;
  iconClass: string;
  iconModifier: string;
  labelLines: [string, string];
  ariaLabel: string;
}

@Component({
  selector: 'app-social_sticky',
  standalone: true,
  templateUrl: './social_sticky.component.html',
  styleUrls: ['./social_sticky.component.css']
})
export class Social_stickyComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);

  /** Posición vertical preferida (estilo TecNM). */
  private readonly preferredTop = 230;
  /** Separación mínima bajo el borde inferior del menú azul. */
  private readonly menuGap = 10;

  /** top efectivo (px); nunca por encima del menú azul. */
  readonly stickyTopPx = signal(this.preferredTop);

  private rafId: number | null = null;
  private followTimer: ReturnType<typeof setInterval> | null = null;
  private followUntil = 0;
  private toolsObserver: MutationObserver | null = null;

  readonly links: SocialStickyLink[] = [
    {
      platform: 'facebook',
      href: 'https://www.facebook.com/TecNMEscarcega',
      iconClass: 'bi bi-facebook',
      iconModifier: 'facebook',
      labelLines: ['Me gusta en', 'Facebook'],
      ariaLabel: 'Me gusta en Facebook'
    },
    {
      platform: 'x',
      href: 'https://x.com/TecNMEscarcega',
      iconClass: 'bi bi-twitter-x',
      iconModifier: 'x',
      labelLines: ['Síguenos en', 'X'],
      ariaLabel: 'Síguenos en X'
    },
    {
      platform: 'instagram',
      href: 'https://www.instagram.com/tecnmescarcega/',
      iconClass: 'bi bi-instagram',
      iconModifier: 'instagram',
      labelLines: ['Síguenos en', 'Instagram'],
      ariaLabel: 'Síguenos en Instagram'
    }
  ];

  constructor() {
    afterNextRender(
      () => {
        this.updateCeiling();
        this.followMenuWhileSettling(500);
        this.watchToolsBar();
      },
      { injector: this.injector }
    );

    this.destroyRef.onDestroy(() => {
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
      }
      if (this.followTimer !== null) {
        clearInterval(this.followTimer);
      }
      this.toolsObserver?.disconnect();
    });
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    this.scheduleCeilingUpdate();
    // La franja blanca anima max-height ~300ms; el menú cambia de Y sin scroll continuo.
    this.followMenuWhileSettling(400);
  }

  private scheduleCeilingUpdate(): void {
    if (this.rafId !== null) {
      return;
    }
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.updateCeiling();
    });
  }

  private followMenuWhileSettling(ms: number): void {
    this.followUntil = performance.now() + ms;
    if (this.followTimer !== null) {
      return;
    }
    this.followTimer = setInterval(() => {
      this.updateCeiling();
      if (performance.now() >= this.followUntil) {
        clearInterval(this.followTimer!);
        this.followTimer = null;
      }
    }, 32);
  }

  private watchToolsBar(): void {
    const toolsHost = document.querySelector('app-nav_tools_bar');
    const toolsInner = toolsHost?.querySelector('.contenedorGobierno, [class*="franja"]') ?? toolsHost;
    if (!toolsInner) {
      return;
    }

    this.toolsObserver = new MutationObserver(() => {
      this.scheduleCeilingUpdate();
      this.followMenuWhileSettling(400);
    });
    this.toolsObserver.observe(toolsInner, {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true
    });
  }

  /**
   * El menú azul es el tope: los iconos no pueden quedar por encima
   * de su borde inferior (p. ej. cuando la franja blanca empuja el menú).
   */
  private updateCeiling(): void {
    const menu = document.querySelector<HTMLElement>('nav.menu-bar');
    if (!menu) {
      this.stickyTopPx.set(this.preferredTop);
      return;
    }

    const ceiling = Math.ceil(menu.getBoundingClientRect().bottom + this.menuGap);
    this.stickyTopPx.set(Math.max(this.preferredTop, ceiling));
  }
}
