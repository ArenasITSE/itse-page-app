import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE

@Component({
  selector: 'app-centro_computo',
  standalone: true, // 👈 si usas standalone
  imports: [CommonModule], // 👈 AGREGA ESTO
  templateUrl: './centro_computo.component.html',
  styleUrls: ['./centro_computo.component.css']
})
export class Centro_computoComponent implements OnInit {

  tab: string = 'sistema';

  constructor() { }
  
  ngOnInit() {}

  cambiarTab(nombre: string) {
    this.tab = nombre;
  }
}