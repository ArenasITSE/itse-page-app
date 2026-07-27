import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type CentroTab = 'principal' | 'sistema' | 'comite' | 'instalaciones';

interface InstalacionItem {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-centro_computo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centro_computo.component.html',
  styleUrls: ['./centro_computo.component.css'],
})
export class Centro_computoComponent {
  tab: CentroTab = 'principal';

  readonly tabs: { id: CentroTab; label: string }[] = [
    { id: 'principal', label: 'Principal' },
    { id: 'sistema', label: 'Sistema de Mantenimiento' },
    { id: 'comite', label: "Comité TIC'S" },
    { id: 'instalaciones', label: 'Instalaciones' },
  ];

  setTab(id: CentroTab): void {
    this.tab = id;
  }

  instalaciones: InstalacionItem[] = [
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/1.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/2.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/3.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/4.jpeg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/5.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/6.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/7.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/8.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/9.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/10.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/11.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/12.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/13.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/14.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/15.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/16.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/17.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/18.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/19.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/20.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/21.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/22.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/23.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/24.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/25.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/26.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/27.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/28.jpeg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/29.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/30.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/31.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/32.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/33.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/34.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/35.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/36.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/37.jpg' },
    { nombre: 'Departamento de Cómputo y Tecnologías de la Información', url: 'assets/computo/2025/38.jpg' },
  ];
}
