import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contabilidad_institucional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contabilidad_institucional.component.html',
  styleUrls: ['./contabilidad_institucional.component.css']
})
export class Contabilidad_institucionalComponent {

 
  data = [

    // ================= 2025 =================
    {
      anio: 2025,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2025',
          url: 'assets/contabilidad_institucional/estados_financieros/2025/presupuesto-estatal-2025.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2025',
          url: 'assets/contabilidad_institucional/estados_financieros/2025/presupuesto-federal-2025.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {
              nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Estado financiero', url: 'assets/.../2025/t1/contable/doc1.pdf' }
              ]
            },
            {
              nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: 'Presupuesto', url: 'assets/.../2025/t1/presupuestaria/doc1.pdf' }
              ]
            }
          ]
        },
        { nombre: '2do Trimestre', abierto: false, carpetas: [] },
        { nombre: '3er Trimestre', abierto: false, carpetas: [] },
        { nombre: '4to Trimestre', abierto: false, carpetas: [] }
      ]
    },

    // ================= 2024 =================
    {
      anio: 2024,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2024',
          url: 'assets/contabilidad_institucional/estados_financieros/2024/presupuesto-estatal-2024.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2024',
          url: 'assets/contabilidad_institucional/estados_financieros/2024/presupuesto-federal-2024.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {
              nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/.../2024/t1/contable/doc1.pdf' }
              ]
            }
          ]
        },
        { nombre: '2do Trimestre', abierto: false, carpetas: [] },
        { nombre: '3er Trimestre', abierto: false, carpetas: [] },
        { nombre: '4to Trimestre', abierto: false, carpetas: [] }
      ]
    },

    // ================= 2023 =================
    {
      anio: 2023,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2023',
          url: 'assets/contabilidad_institucional/estados_financieros/2023/presupuesto-estatal-2023.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2023',
          url: 'assets/contabilidad_institucional/estados_financieros/2023/presupuesto-federal-2023.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {
              nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/.../2023/t1/contable/doc1.pdf' }
              ]
            }
          ]
        },
        { nombre: '2do Trimestre', abierto: false, carpetas: [] },
        { nombre: '3er Trimestre', abierto: false, carpetas: [] },
        { nombre: '4to Trimestre', abierto: false, carpetas: [] }
      ]
    }

  ];

}