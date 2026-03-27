import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav_barComponent } from './pages/nav_bar/nav_bar.component';
import { FooterComponent } from "./pages/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true, // 🔥 ESTO ES LO QUE TE FALTA
  imports: [
    RouterOutlet,
    Nav_barComponent,
    FooterComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('itse-web');
}