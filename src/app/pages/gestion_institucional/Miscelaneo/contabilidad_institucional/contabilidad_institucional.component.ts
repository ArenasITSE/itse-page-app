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
                {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/1-Estado analitico de ingresos.pdf' },
                {nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/2-EAEPECA.pdf' },
                {nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/5-EAEPECF.pdf'},
                {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                {nombre: '7-Interes de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/7-Interes de la deuda.pdf'},
                {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/8-Indicadores de la postura fiscal.pdf'},
                {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2-Presupuestaria/9-Flujo de fondos.pdf'}


              ]
            },
            {
            nombre: '3-Programatica',
              abierto: false,
              archivos: [
                {nombre: '1-Gasto por Categoria Programatica-pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                {nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                {nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3-Programatica/3-Indicador de Resultados.pdf'},
               

              ]
            },
            {
            nombre: '4-Titulo-V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4-Titulo-V/1-Montos pagados por AyS.pdf'},
              {nombre: '2-Formato del Ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4-Titulo-V/2-Formato del Ejercicio y DGFyR.pdf'},
              {nombre: '3-Fondo de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4-Titulo-V/3-Fondo de programas con RC por OG.pdf'}

            ]
            },
            {
            nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/5-Anexos/1-Formato de obligaciones.pdf'},
              {nombre: '2-Relacion de esquemas ByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/5-Anexos/2-Relacion de esquemas ByCF.pdf'},
              {nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/5-Anexos/3-Avance Financiero.pdf'}

            ]
            },
            {
            nombre: '6-LDF-1-ert-2025',
            abierto: false,
            archivos:[
              {nombre: 'F1_ESF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F1_ESF_3132025.xls'},
              {nombre: 'F2_IADPOP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F2_IADPOP_3132025.xls'},
              {nombre: 'F3_IAODF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F3_IAODF_3132025.xls'},
              {nombre: 'F4_BP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F4_BP_3132025.xls'},
              {nombre: 'F5_EAID_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F5_EAID_3132025.xls'},
              {nombre: 'F6a_EAEPED_COG_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F6a_EAEPED_COG_3132025.xls'},
              {nombre: 'F6b_EAEPED_CA_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F6b_EAEPED_CA_3132025.xls'},
              {nombre: 'F6c_EAEPED_CF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F6c_EAEPED_CF_3132025.xls'},
              {nombre: 'F6d_EAEPED_CSP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/6-LDF-1-ert-2025/F6d_EAEPED_CSP_3132025.xls'}

           

            ] 
            },
            {
            nombre: '7-Formato-de-la-SHCP',
            abierto: false,
            archivos:[
              {nombre: 'ITSE ReporteFinal.pdf' , url: 'assets/contabilidad_institucional/estados_financieros/2025/7-Formato-de-la-SHCP/ITSE ReporteFinal.pdf'}
              


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