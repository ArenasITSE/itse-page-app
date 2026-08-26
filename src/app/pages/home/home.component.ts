import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images = [
    
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