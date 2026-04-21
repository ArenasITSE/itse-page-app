import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 IMPORTANTE

@Component({
  selector: 'app-CIIE',
  templateUrl: './CIIE.component.html',
  styleUrls: ['./CIIE.component.css'],
  standalone: true, // 🔥 CLAVE
  imports: [CommonModule], // 🔥 AQUÍ VA ngIf

})
export class CIIEComponent implements OnInit {

  constructor() { }

  tabCIIE: string = 'catalogo';

  ngOnInit() {
  }

}
