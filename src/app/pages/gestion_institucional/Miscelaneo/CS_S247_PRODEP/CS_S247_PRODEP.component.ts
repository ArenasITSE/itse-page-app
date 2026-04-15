import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 IMPORTANTE

@Component({
  selector: 'app-CS_S247_PRODEP',
  standalone: true, // 🔥 NECESARIO
  imports: [CommonModule], // 🔥 AQUÍ VA
  templateUrl: './CS_S247_PRODEP.component.html',
  styleUrls: ['./CS_S247_PRODEP.component.css']
})
export class CS_S247_PRODEPComponent implements OnInit {

  tab: string = 'prodep';

  constructor() { }

  ngOnInit() {}

}