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
      src: 'assets/carrusel_home/carrusel_11.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/olinia.jpg',
      link: 'https://www.tecnm.mx/archivos/slider/Convocatoria_Retos_Olinia_TecNM.pdf?documento=49' // ← cambia por tu enlace
    },
    {
      src: 'assets/carrusel_home/carrusel_21.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_33.png',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_4.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_55.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_66.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_77.jpg',
      link: ''
    },
    {
      src: 'assets/carrusel_home/carrusel_88.jpg',
      link: ''
    }
  ];

}