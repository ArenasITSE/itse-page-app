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
                { nombre: '1-Estado de_actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/1-Estado de_actividades.pdf' },
                { nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/3-Estado de Cambios en la SF.pdf' },
                { nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '5-Estado Analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '6-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '8-Informe sobre pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '9-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '10-Conciliacion entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1-Contable/2-Estado de situacion financiera.pdf' },
               
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