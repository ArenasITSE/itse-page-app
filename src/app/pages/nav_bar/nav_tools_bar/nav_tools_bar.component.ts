import { Component, Input, inject } from '@angular/core';
import { UiPreferencesService } from '../../../services/ui-preferences.service';

@Component({
  selector: 'app-nav_tools_bar',
  standalone: true,
  templateUrl: './nav_tools_bar.component.html',
  styleUrls: ['./nav_tools_bar.component.css']
})
export class Nav_tools_barComponent {
  /** Controlado por el scroll del orquestador (nav_bar). */
  @Input() visible = true;

  readonly ui = inject(UiPreferencesService);
}
