import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 ESTE FALTA

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // 🔥 AGRÉGALO AQUÍ
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: string[] = [
    'assets/carrusel_home/carrusel_1.jpg',
    'assets/carrusel_home/carrusel_2.jpg',
    'assets/carrusel_home/carrusel_3.png',
    'assets/carrusel_home/carrusel_4.jpg',
/*     'assets/carrusel_home/carrusel_5.jpg',
    'assets/carrusel_home/carrusel_6.jpg',
    'assets/carrusel_home/carrusel_7.jpg',
    'assets/carrusel_home/carrusel_8.jpg',
    'assets/carrusel_home/carrusel_9.png',
    'assets/carrusel_home/carrusel_10.png' */
  ];

}