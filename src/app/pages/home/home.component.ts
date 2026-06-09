import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    {
      src: 'assets/carrusel_home/carrusel_1.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/olinia.jpg',
      link: 'https://www.tecnm.mx/archivos/slider/Convocatoria_Retos_Olinia_TecNM.pdf?documento=49' // ← cambia por tu enlace
    },
    {
      src: 'assets/carrusel_home/carrusel_2.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_3.png',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_4.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_5.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_6.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_7.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_8.jpg',
      link: ''
    }
  ];

}