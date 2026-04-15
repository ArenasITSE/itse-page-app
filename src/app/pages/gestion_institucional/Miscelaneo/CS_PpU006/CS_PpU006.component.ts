import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 IMPORTANTE

@Component({
  selector: 'app-CS_PpU006',
  templateUrl: './CS_PpU006.component.html',
   standalone: true, // 🔥 NECESARIO
  imports: [CommonModule], // 🔥 AQUÍ VA
  styleUrls: ['./CS_PpU006.component.css']
})
export class CS_PpU006Component implements OnInit {
   tab: string = 'prodep';

  constructor() { }

  ngOnInit() {
  }

}
