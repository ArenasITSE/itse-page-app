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
          url: 'assets/contabilidad_institucional/estados_financieros/2025/Presupuesto-estatal-2025.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2025',
          url: 'assets/contabilidad_institucional/estados_financieros/2025/Presupuesto-federal-2025.pdf'
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
                { nombre: '1-Estado de_actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/1-Estado de_actividades.pdf' },
                { nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf' },
                { nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf' },
                { nombre: '5-Estado Analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/5-Estado Analitico de la DyOP.pdf' },
                { nombre: '6-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf' },
                { nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf' },
                { nombre: '8-Informe sobre pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/8-Informe sobre pasivos contingentes.pdf' },
                { nombre: '9-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/9-Conciliación entre los IPyC.pdf' },
                { nombre: '10-Conciliacion entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/1-Contable/210-Conciliacion entre los EPyGC.pdf' },
                { nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/11-Notas a los EF.pdf' },    
                 ]
            },
            {
              nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf' },
                {nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                {nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf'},
                {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf'},
                {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}
                 ]
            },
            {
            nombre: '3-Programatica',
              abierto: false,
              archivos: [
                {nombre: '1-Gasto por Categoria Programatica-pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                {nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                {nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/3-Programatica/3-Indicador de Resultados.pdf'}             
                 ]
            },
            {
            nombre: '4-Titulo-V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/4-Titulo-V/1-Montos pagados por AyS.pdf'},
              {nombre: '2-Formato del Ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/4-Titulo-V/2-Formato del Ejercicio y DGFyR.pdf'},
              {nombre: '3-Fondo de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/4-Titulo-V/3-Fondo de programas con RC por OG.pdf'}

            ]
            },
            {
            nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
              {nombre: '2-Relacion de esquemas ByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/5-Anexos/2-Relacion de esquemas ByCF.pdf'},
              {nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/5-Anexos/3-Avance Financiero.pdf'}
                ]
            },
            {
            nombre: '6-LDF-1-ert-2025',
            abierto: false,
            archivos:[
              {nombre: 'F1_ESF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F1_ESF_3132025.xls'},
              {nombre: 'F2_IADPOP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F2_IADPOP_3132025.xls'},
              {nombre: 'F3_IAODF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F3_IAODF_3132025.xls'},
              {nombre: 'F4_BP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F4_BP_3132025.xls'},
              {nombre: 'F5_EAID_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F5_EAID_3132025.xls'},
              {nombre: 'F6a_EAEPED_COG_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F6a_EAEPED_COG_3132025.xls'},
              {nombre: 'F6b_EAEPED_CA_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F6b_EAEPED_CA_3132025.xls'},
              {nombre: 'F6c_EAEPED_CF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F6c_EAEPED_CF_3132025.xls'},
              {nombre: 'F6d_EAEPED_CSP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/6-LDF-1-ert-2025/F6d_EAEPED_CSP_3132025.xls'}
                ] 
            },
            {
            nombre: '7-Formato-de-la-SHCP',
            abierto: false,
            archivos:[
              {nombre: 'ITSE ReporteFinal.pdf' , url: 'assets/contabilidad_institucional/estados_financieros/2025/1er_Trimestre/7-Formato-de-la-SHCP/ITSE ReporteFinal.pdf'}            
            ]  
            }

          ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            {
              nombre: '1-Contable',
              abierto: false,
              archivos: [
              {nombre: '1-Estado de actividades.pdf' , url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/1-Estado de actividades.pdf'},
              {nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/2-Estado de situacion financiera.pdf'},
              {nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
              {nombre: '4-Estado analitico del activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/4-Estado analitico del activo.pdf'},
              {nombre: '5-Estado Analitico de la D y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/5-Estado Analitico de la D y OP.pdf'},
              {nombre: '6-Estado de variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/6-Estado de variacion en la HP.pdf'},
              {nombre: '7-Estado de flujos de efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/7-Estado de flujos de efectivo.pdf'},
              {nombre: '8-Informe sobre PC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/8-Informe sobre PC.pdf'},
              {nombre: '9-Conciliacion entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/9-Conciliacion entre los IPyC.pdf'},
              {nombre: '10-Conciliacion entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/10-Conciliacion entre los EPyGC.pdf'},
              {nombre: '11-Notas de los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1-Contable/11-Notas de los EF.pdf'}

              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
              {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf'},
              {nombre: '2-Estado AEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/2-Estado AEPECA.pdf'},
              {nombre: '3-Estado AEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/3-Estado AEPECE.pdf'},
              {nombre: '4-Estado AEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/4-Estado AEPECOG.pdf'},
              {nombre: '5-Estado AEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/5-Estado AEPECF.pdf'},
              {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
              {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf'},
              {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf'},
              {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}              
               ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [              
              {nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf'},
              {nombre: '2-Programas y Proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/3-Programatica/2-Programas y Proyectos de inversion.pdf'},
              {nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/3-Programatica/3-Indicador de resultados.pdf'}

              ]

            },

            { nombre: '4-Titulo V',
              abierto: false,
              archivos:[
              {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf'},
              {nombre: '2-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4-Titulo V/2-Formato del ejercicio y DGFyR.pdf'},
              {nombre: '3-Formato de PRCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4-Titulo V/3-Formato de PRCporOG.pdf'}
                ]

            },

            { nombre: '5-Anexos',
              abierto: false,
              archivos:[
                {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5-Anexos/1-Montos pagados por AyS.pdf'},
                {nombre: '2-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5-Anexos/2-Formato del ejercicio y DGFyR.pdf'},
                {nombre: '3-Formato de PRCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5-Anexos/3-Formato de PRCporOG.pdf'}
              ]

            },

            { nombre: '6-2doT. LDF 2025',
              abierto: false,
              archivos: [
                {nombre: 'F1_ESF_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F1_ESF_3062025.xls'},
                {nombre: 'F2_IADPOP_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F2_IADPOP_3062025.xls'},
                {nombre: 'F3_IAODF_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F3_IAODF_3062025.xls'},
                {nombre: 'F4_BP_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F4_BP_3062025.xls'},
                {nombre: 'F5_EAID_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F5_EAID_3062025.xls'},
                {nombre: 'F6a_EAEPED_COG_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F6a_EAEPED_COG_3062025.xls'},
                {nombre: 'F6b_EAEPED_CA_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F6b_EAEPED_CA_3062025.xls'},
                {nombre: 'F6c_EAEPED_CF_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F6c_EAEPED_CF_3062025.xls'},
                {nombre: 'F6d_EAEPED_CSP_3062025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/6-2doT. LDF 2025/F6d_EAEPED_CSP_3062025.xls'}
              ]

            },
            { nombre: '7-formato de la SHCP',
              abierto: false,
              archivos: [
                {nombre: 'SRFT 2DOT 2025.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/7-Formato de la SHCP/SRFT 2DOT 2025.pdf'}
                

              ]
              }

             ]
            },

            
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [

            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                {nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                {nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/2-Estado de situacion financiera.pdf'},
                {nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
                {nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
                {nombre: '5-Estado Analitico de la D y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/5-Estado Analitico de la D y OP.pdf'},
                {nombre: '6-Estado de variación en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/6-Estado de variación en la HP.pdf'},
                {nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf'},
                {nombre: '8-Informe sobre pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/8-Informe sobre pasivos contingentes.pdf'},
                {nombre: '9-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/9-Conciliación entre los IPyC.pdf'},
                {nombre: '10-Conciliación entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/10-Conciliación entre los EPyGC.pdf'},
                {nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/1-Contable/11-Notas a los EF.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
              {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf'},
              {nombre: '2-Clasificación administrativa.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/2-Clasificación administrativa.pdf'},
              {nombre: '2a-Clasificacion administrativa CP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/2a-Clasificacion administrativa CP.pdf'},
              {nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
              {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
              {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
              {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
              {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf'},
              {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf'},
              {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}
               ]
               },

            { nombre: '3-Programática',
              abierto: false,
              archivos: [
                
                {nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/3-Programática/1-Gasto por categoria programatica.pdf'},
                {nombre: '2-Programas y proyectos de investigacion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/3-Programática/2-Programas y proyectos de investigacion.pdf'},
                {nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/3-Programática/3-Indicador de resultados.pdf'}
              ]

            },

            { nombre: '4-Titulo V', 
              abierto: false,
              archivos: [
                {nombre: '1-Montos Pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/4-Titulo V/1-Montos Pagados por AyS.pdf'},
                {nombre: '2-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/4-Titulo V/2-Formato del ejercicio y DGFyR.pdf'},
                {nombre: '3-Formato de PRCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/4-Titulo V/3-Formato de PRCporOG.pdf'}
              ]
            },

            { nombre:'5-Anexos',
              abierto: false, 
              archivos: [
                {nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                {nombre: '2-Relacion de EByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/5-Anexos/2-Relacion de EByCF.pdf'},
                {nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/5-Anexos/3-Avance financiero.pdf'}

              ]
            },

            { nombre:'6-3er Trimestre LDF',
              abierto: false,
              archivos:[
                {nombre: 'F1_ESF_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F1_ESF_3092025.xls'},
                {nombre: 'F2_IADPOP_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F2_IADPOP_3092025.xls'},
                {nombre: 'F3_IAODF_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F3_IAODF_3092025.xls'},
                {nombre: 'F4_BP_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F4_BP_3092025.xls'},
                {nombre: 'F5_EAID_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F5_EAID_3092025.xls'},
                {nombre: 'F6a_EAEPED_COG_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F6a_EAEPED_COG_3092025.xls'},
                {nombre: 'F6b_EAEPED_CA_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F6b_EAEPED_CA_3092025.xls'},
                {nombre: 'F6c_EAEPED_CF_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F6c_EAEPED_CF_3092025.xls'},
                {nombre: 'F6d_EAEPED_CSP_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F6d_EAEPED_CSP_3092025.xls'},
                {nombre: 'F7c_RI_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F7c_RI_3092025.xls'},
                {nombre: 'F7d_RE_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/F7d_RE_3092025.xls'},
                {nombre: 'GUIA DE CUMPLIMIENTO DE LA LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/6-3er Trimestre LDF/GUIA DE CUMPLIMIENTO DE LA LDF.pdf'}
              ]
            },
            { nombre: '7-Formato de SHCP',
              abierto: false,
              archivos:[
                {nombre: 'Extraccion_InformacionNF SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/3er_Trimestre/7-Formato de SHCP/Extraccion_InformacionNF SRFT.pdf'}
              ]
              }

              ] 
            },

         { nombre: '4to Trimestre', 
          abierto: false, 
          carpetas: [

            { nombre: '1-Contable',
              abierto: false,
              archivos:[
                {nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                {nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf'},
                {nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
                {nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
                {nombre: '5-Estado Analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/5-Estado Analitico de la DyOP.pdf'},
                {nombre: '6-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf'},
                {nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf'},
                {nombre: '8-Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/8-Pasivos Contingentes.pdf'},
                {nombre: '9-Conciliacion entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/9-Conciliacion entre los EP y GC.pdf'},
                {nombre: '10-Conciliacion entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/10-Conciliacion entre los IP y C.pdf'},
                {nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/1-Contable/11-Notas a los EF.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos:[
                {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf'},
                {nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/2-EAEPECA.pdf'},
                {nombre: '2a-EAEPECA SP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/2a-EAEPECA SP.pdf'},
                {nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf'},
                {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf'},
                {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}
                 ] 
                },
            { nombre: '3-Programatica',
              abierto: false,
              archivos:[
                {nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                {nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                {nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/3-Programatica/3-Indicador de resultados.pdf'}
              ]
            },

            { nombre: '4-Titulo V',
              abierto: false,
              archivos:[
                {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf'},
                {nombre: '2-Formato del ejercicio DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/4-Titulo V/2-Formato del ejercicio DGFyR.pdf'},
                {nombre: '3-Formato de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/4-Titulo V/3-Formato de programas con RC por OG.pdf'}
              ]
            },

            { nombre: '5-Anexo',
              abierto: false,
              archivos: [
                {nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/5-Anexo/1-Formato de obligaciones.pdf'},
                {nombre: '2-Relacion de EByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/5-Anexo/2-Relacion de EByCF.pdf'},
                {nombre: '3-Avance financiero 4to. trimestre 2026.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/5-Anexo/3-Avance financiero 4to. trimestre 2026.pdf'}
              ]
            },
            { nombre: '6-LDF 4to. Trimestre 2025',
              abierto: false,
              archivos: [

                {nombre: 'F1_ESF_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F1_ESF_31122025.xls'},
                {nombre: 'F2_IADPOP_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F2_IADPOP_31122025.xls'},
                {nombre: 'F3_IAODF_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F3_IAODF_31122025.xls'},
                {nombre: 'F4_BP_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F4_BP_31122025.xls'},
                {nombre: 'F5_EAID_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F5_EAID_31122025.xls'},
                {nombre: 'F6a_EAEPED_COG_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F6a_EAEPED_COG_31122025.xls'},
                {nombre: 'F6b_EAEPED_CA_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F6b_EAEPED_CA_31122025.xls'},
                {nombre: 'F6c_EAEPED_CF_31122025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F6c_EAEPED_CF_31122025.xls'},
                {nombre: 'F6d_EAEPED_CSP_3092025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/6-LDF 4to. Trimestre 2025/F6d_EAEPED_CSP_3092025.xls'}
                ]
            },
            { nombre: '7-Formato de la SHCP',
              abierto: false,
              archivos: [
                {nombre:'Extraccion_ITSE_21 (SRFT).pdf', url:'assets/contabilidad_institucional/estados_financieros/2025/4to_Trimestre/7-Formato de la SHCP/Extraccion_ITSE_21 (SRFT).pdf'}
              ]
            }
          ]

        }
      ]

        
    },    
    // ================= 2024 =================
    {
      anio: 2024,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2024',
          url: 'assets/contabilidad_institucional/estados_financieros/2024/PRESUPUESTO ESTATAL 2024.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2024',
          url: 'assets/contabilidad_institucional/estados_financieros/2024/PRESUPUESTO ESTATAL 2024.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/1-Estado de actividades.pdf' },
                { nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf' },
                { nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf' },
                { nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf' },
                { nombre: '5-Estado Analitico de la Deuda y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/5-Estado Analitico de la Deuda y OP.pdf' },
                { nombre: '6-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf' },
                { nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf' },
                { nombre: '8-Informe Sobre Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/8-Informe Sobre Pasivos Contingentes.pdf' },
                { nombre: '9-Conciliacion entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/9-Conciliacion entre los IP y C.pdf' },
                { nombre: '10-Conciliacion entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/10-Conciliacion entre los EP y GC.pdf' },
                { nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/1-Contable/11-Notas a los EF.pdf' }
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos:[
                { nombre: '1-Estado Analitico del Ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/1-Estado Analitico del Ingreso.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf' },
                { nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' },
                { nombre: '9-Flujos de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/2-Presupuestaria/9-Flujos de fondos.pdf' },

                ]
            },

            { nombre:'3-Programatica',
              abierto: false,
              archivos:[
                { nombre: '1-Gasto por Categoria Programatica.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf'},
                { nombre: '3-Indicador de resultados.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/3-Programatica/3-Indicador de resultados.pdf'}

              ]
            },
            { nombre:'4-Titulo V',
              abierto: false,
              archivos:[
                { nombre: '1-Montos pagados por ayudas y S.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y S.pdf'},
                { nombre: '2-Formato de Programas con RC por OG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf'},
                { nombre: '3-Formato del Ejercicio y Destino de GF y R.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/4-Titulo V/3-Formato del Ejercicio y Destino de GF y R.pdf'}

              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos:[
                { nombre: '1-Formato de obligaciones.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                { nombre: '2-Relacion de esquemas bursatiles y CF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/5-Anexos/2-Relacion de esquemas bursatiles y CF.pdf'},
                { nombre: '3-Avance Financiero.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/5-Anexos/3-Avance Financiero.pdf'}

              ]
            },
            { nombre: '6-LDF 1er T. 2024',
              abierto: false,
              archivos:[
                { nombre: 'F1_ESF_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F1_ESF_3132024.xls'},
                { nombre: 'F2_IADPOP_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F2_IADPOP_3132024.xls'},
                { nombre: 'F3_IAODF_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F3_IAODF_3132024.xls'},
                { nombre: 'F4_BP_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F4_BP_3132024.xls'},
                { nombre: 'F5_EAID_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F5_EAID_3132024.xls'},
                { nombre: 'F6a_EAEPED_COG_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F6a_EAEPED_COG_3132024.xls'},
                { nombre: 'F6b_EAEPED_CA_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F6b_EAEPED_CA_3132024.xls'},
                { nombre: 'F6c_EAEPED_CF_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F6c_EAEPED_CF_3132024.xls'},
                { nombre: 'F6d_EAEPED_CSP_3132024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/6-LDF 1er T. 2024/F6d_EAEPED_CSP_3132024.xls'}

              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos:[
                { nombre: '1-SRFT 1erT.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/1er_Trimestre/7-Formato SHCP/1-SRFT 1erT.pdf'}
              ]
            }
          ]

        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            { nombre:'1-Contable',
              abierto: false,
              archivos:[
                { nombre: '1-Estado de Actividades.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                { nombre: '2-Estado de Situacion Financiera.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf'},
                { nombre: '3-Estado de Cambios en la SF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
                { nombre: '4-Estado analitico del activo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/4-Estado analitico del activo.pdf'},
                { nombre: '5-Estado analitico de la DyOP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/5-Estado analitico de la DyOP.pdf'},
                { nombre: '6-Estado de Variación en la HP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/6-Estado de Variación en la HP.pdf'},
                { nombre: '7-Estado de Flujos de Efectivo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf'},
                { nombre: '8-Informe sobre pasivos contingentes.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/8-Informe sobre pasivos contingentes.pdf'},
                { nombre: '9-Notas a los EF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/9-Notas a los EF.pdf'},
                { nombre: '10-Conciliación de los IPyC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/10-Conciliación de los IPyC.pdf'},
                { nombre: '11-Conciliación de los EP y GC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/1-Contable/11-Conciliación de los EP y GC.pdf'}

              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos:[
                { nombre: '1-Estado analitico de ingresos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf'},
                { nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/2-EAEPECA.pdf'},
                { nombre: '3-EAEPECOG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                { nombre: '4-EAEPECE.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                { nombre: '5-EAEPECF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                { nombre: '6-Endeudamiento neto.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                { nombre: '7-Intereses de la Deuda.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf'},
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf'},
                { nombre: '9-Flujos de fondos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/2-Presupuestaria/9-Flujos de fondos.pdf'}

              ]

            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                { nombre: '2-Programas y proyectos de inversion.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                { nombre: '3-Indicador de resultados.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/3-Programatica/3-Indicador de resultados.pdf'}

              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por A y S.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/4-Titulo V/1-Montos Pagados por A y S.pdf'},
                { nombre: '2-Formato de Programas con RC por OG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf'},
                { nombre: '3-Forato del EyD de GF y R.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/4-Titulo V/3-Forato del EyD de GF y R.pdf'}

              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                { nombre: '2-Relaciones de EB y CF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/5-Anexos/2-Relaciones de EB y CF.pdf'},
                { nombre: '3-Avance Financiero.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/5-Anexos/3-Avance Financiero.pdf'}
                
              ]
            },
            { nombre: '6-LDF 2do T. 2024',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F1_ESF_3062024.xls'},
                { nombre: 'F2_IADPOP_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F2_IADPOP_3062024.xls'},
                { nombre: 'F3_IAODF_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F3_IAODF_3062024.xls'},
                { nombre: 'F4_BP_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F4_BP_3062024.xls'},
                { nombre: 'F5_EAID_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F5_EAID_3062024.xls'},
                { nombre: 'F6a_EAEPED_COG_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F6a_EAEPED_COG_3062024.xls'},
                { nombre: 'F6b_EAEPED_CA_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F6b_EAEPED_CA_3062024.xls'},
                { nombre: 'F6c_EAEPED_CF_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F6c_EAEPED_CF_3062024.xls'},
                { nombre: 'F6d_EAEPED_CSP_3062024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/6-LDF 2do T. 2024/F6d_EAEPED_CSP_3062024.xls'}             

              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: 'SRFT 2do. trimestre.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/2do_Trimestre/7-Formato SHCP/SRFT 2do. trimestre.pdf'}
                          
              ]
            }

          ] 
        },

        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                {nombre: '1-Estado de Actividades.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                {nombre: '2-Estado de situacion financiera.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/2-Estado de situacion financiera.pdf'},
                {nombre: '3-Estado de Cambios en la SF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
                {nombre: '4-Estado Analitico del Activo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
                {nombre: '5-Estado Analitico de la D y OP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/5-Estado Analitico de la D y OP.pdf'},
                {nombre: '6-Estado de variación en la HP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/6-Estado de variación en la HP.pdf'},
                {nombre: '7-Estado de Flujos de Efectivo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf'},
                {nombre: '8-Informe sobre PC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/8-Informe sobre PC.pdf'},
                {nombre: '9-Conciliación entre los IP y C.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/9-Conciliación entre los IP y C.pdf'},
                {nombre: '10-Conciliación entre los EP y GC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/10-Conciliación entre los EP y GC.pdf'},
                {nombre: '11-Notas a los EF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/1-Contable/11-Notas a los EF.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos:[
                {nombre: '1-Estado Analitico del Ingreso.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/1-Estado Analitico del Ingreso.pdf'},
                {nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf'},
                {nombre: '3-EAEPECOG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/5-EAEPECA.pdf'},
                {nombre: '6-Endeudamiento neto.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                {nombre: '7-Intereses de la Deuda.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf'},
                {nombre: '8-Indicadores de Postura Fiscal.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf'},
                {nombre: '9-Flujo de fondos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos:[
                {nombre: '1-Gasto por categoria programatica.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf'},
                {nombre: '2-Programas y Proyectos de inversion.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/3-Programatica/2-Programas y Proyectos de inversion.pdf'},
                {nombre: '3-Indicadores 3er. Trim 2024.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/3-Programatica/3-Indicadores 3er. Trim 2024.pdf'}
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos:[
                {nombre: '1-Montos Pagados por A y S.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/4-Titulo V/1-Montos Pagados por A y S.pdf'},
                {nombre: '2-Formato de programas con RC por OG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/4-Titulo V/2-Formato de programas con RC por OG.pdf'},
                {nombre: '3-Formato del EyD de GFyR.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/4-Titulo V/3-Formato del EyD de GFyR.pdf'}
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos:[
                {nombre: '1-Formato de obligaciones.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                {nombre: '2-Relacion de EB y CF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/5-Anexos/2-Relacion de EB y CF.pdf'},
                {nombre: '3-Avance Financiero.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/5-Anexos/3-Avance Financiero.pdf'}
              ]
            },
            { nombre: '6-LDF 3er T. 2024',
              abierto: false,
              archivos:[
                {nombre: 'F1_ESF_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F1_ESF_3092024.xls'},
                {nombre: 'F2_IADPOP_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F2_IADPOP_3092024.xls'},
                {nombre: 'F3_IAODF_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F3_IAODF_3092024.xls'},
                {nombre: 'F4_BP_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F4_BP_3092024.xls'},
                {nombre: 'F5_EAID_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F5_EAID_3092024.xls'},
                {nombre: 'F6a_EAEPED_COG_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F6a_EAEPED_COG_3092024.xls'},
                {nombre: 'F6b_EAEPED_CA_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F6b_EAEPED_CA_3092024.xls'},
                {nombre: 'F6c_EAEPED_CF_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F6c_EAEPED_CF_3092024.xls'},
                {nombre: 'F6d_EAEPED_CSP_3092024.xls', url:'assets/contabilidad_institucional/estados_financieros/2024/3er_Trimestre/6-LDF 3er T. 2024/F6d_EAEPED_CSP_3092024.xls'}
                
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos:[
              ]
            }

          ] 
        },

        { nombre: '4to Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos:[
                {nombre: '1-Estado de Actividades.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                {nombre: '2-Estado de Situación Financiera.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/2-Estado de Situación Financiera.pdf'},
                {nombre: '3-Estado de Cambios en la Situacion Financiera.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/3-Estado de Cambios en la Situacion Financiera.pdf'},
                {nombre: '4-Estado Analitico del Activo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
                {nombre: '5-Estado Analitico de la Deuda y Otros Pasivos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/5-Estado Analitico de la Deuda y Otros Pasivos.pdf'},
                {nombre: '6-Estado de Variacion en la HP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf'},
                {nombre: '7-Estado de Flujos de Efectivo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf'},
                {nombre: '8-Informa sobre pasivos contingentes.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/8-Informa sobre pasivos contingentes.pdf'},
                {nombre: '9-Conciliacion entre los IP y C.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/9-Conciliacion entre los IP y C.pdf'},
                {nombre: '10-Conciliación entre los EP Y los GC', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/10-Conciliación entre los EP Y los GC.pdf'},
                {nombre: '11-NOTAS A LOS EF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/1-Contable/11-NOTAS A LOS EF.pdf'}
              ]
            },

            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos:[
                {nombre: '1-Estado Analitico de Ingresos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf'},
                {nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/2-EAEPECA.pdf'},
                {nombre: '3-EAEPECOG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                {nombre: '6-Endeudamiento Neto.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf'},
                {nombre: '7-Intereses de la Deuda.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf'},
                {nombre: '8-Indicadores de Postura Fiscal.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf'},
                {nombre: '9-Flujo de Fondos.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/2-Presupuestaria/9-Flujo de Fondos.pdf'}
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos:[
                {nombre:'1-Gasto por categoria programatica.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf'},
                {nombre:'2-Programas y proyectos de inversion.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                {nombre:'3-Indicador de Resultados.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/3-Programatica/3-Indicador de Resultados.pdf'}                
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos:[
                {nombre:'1-Montos pagados por AyS.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf'},
                {nombre:'2-Formato de Programas con RC por OG.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf'},
                {nombre:'3-Formato del EyD de GFyR.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/4-Titulo V/3-Formato del EyD de GFyR.pdf'}
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos:[
                {nombre:'1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                {nombre:'2-Relacion de esquemas bursatiles y de CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/5-Anexos/2-Relacion de esquemas bursatiles y de CF.pdf'},
                {nombre:'3-Avance Financiero diciembre de 2024.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/5-Anexos/3-Avance Financiero diciembre de 2024.pdf'},

              ]

            },
            { nombre: '6-LDF 4to T. 2024',
              abierto: false,
              archivos:[
                {nombre: 'F1_ESF_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F1_ESF_31122024.xls'},
                {nombre: 'F2_IADPOP_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F2_IADPOP_31122024.xls'},
                {nombre: 'F3_IAODF_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F3_IAODF_31122024.xls'},
                {nombre: 'F4_BP_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F4_BP_31122024.xls'},
                {nombre: 'F5_EAID_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F5_EAID_31122024.xls'},
                {nombre: 'F6a_EAEPED_COG_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F6a_EAEPED_COG_31122024.xls'},
                {nombre: 'F6b_EAEPED_CA_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F6b_EAEPED_CA_31122024.xls'},
                {nombre: 'F6c_EAEPED_CF_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F6c_EAEPED_CF_31122024.xls'},
                {nombre: 'F6d_EAEPED_CSP_31122024.xls', url: 'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/6-LDF 4to T. 2024/F6d_EAEPED_CSP_31122024.xls'}
              ]
            },
            { nombre:'7-Formato de la SHCP',
              abierto: false,
              archivos:[
                {nombre:'1-REPORTE DEL SRFT.pdf', url:'assets/contabilidad_institucional/estados_financieros/2024/4to_Trimestre/7-Formato de la SHCP/1-REPORTE DEL SRFT.pdf'}
              ]
            }

           ] 
          }
        ] //Trimestres 2024
      }, //2024

    // ================= 2023 =================
    {
      anio: 2023,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2023',
          url: 'assets/contabilidad_institucional/estados_financieros/2023/ITSE PRESUPUESTO ESTATAL 2023.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2023',
          url: 'assets/contabilidad_institucional/estados_financieros/2023/ITSE PRESUPUESTO FEDERAL 2023.pdf'
        }
      ],
      trimestres: [
        { nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                {nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
                {nombre: '2-Estado de situación Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/2-Estado de situación Financiera.pdf' },
                {nombre: '3-Estado de variación en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/3-Estado de variación en la HP.pdf' },
                {nombre: '4-Estado de cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/4-Estado de cambios en la SF.pdf' },
                {nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                {nombre: '6-Informe sobre PC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/6-Informe sobre PC.pdf' },
                {nombre: '7-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/7-Notas a los EF.pdf' },
                {nombre: '8-Estado analitico del activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/8-Estado analitico del activo.pdf' },
                {nombre: '9-Estado analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/9-Estado analitico de la DyOP.pdf' },
                {nombre: '10-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/10-Conciliación entre los IPyC.pdf' },
                {nombre: '11-Conciliación entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/1-Contable/11-Conciliación entre los EPyGC.pdf' } 
              ]
            },
            { nombre: '2-Presupuestaria',
            abierto: false,
            archivos: [
              {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf' },
              {nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
              {nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
              {nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
              {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
              {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf' },
              {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf' },
              {nombre: '8-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/8-Flujo de fondos.pdf' },
              {nombre: '9-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/2-Presupuestaria/9-Indicadores de postura fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
            abierto: false,
            archivos: [
              {nombre: '1-Gasto por categoria programatica.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
              {nombre: '2-Programas y PI.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/3-Programatica/2-Programas y PI.pdf' },
              {nombre: '3-Indicador de resultados.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }

              ]
            },
            { nombre: '4-Titulo V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos pagados por AyS.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf' },
              {nombre: '2-Formato de programas RCporOG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/4-Titulo V/2-Formato de programas RCporOG.pdf' },   
              {nombre: '3-Formato del ejercicio DGFyR.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/4-Titulo V/3-Formato del ejercicio DGFyR.pdf' }             
              ]
            },
            { nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de obligaciones.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf' },
              {nombre: '2-Esquemas bursatiles.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/5-Anexos/2-Esquemas bursatiles.pdf' },   
              {nombre: '3-Avance financiero.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/5-Anexos/3-Avance financiero.pdf' }             
              ]
            },
            { nombre: '6-LDF 1er T. 2023',
            abierto: false,
            archivos: [
              {nombre: 'F1_ESF_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F1_ESF_3132023.xls' },
              {nombre: 'F2_IADPOP_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F2_IADPOP_3132023.xls' }, 
              {nombre: 'F3_IAODF_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F3_IAODF_3132023.xls' }, 
              {nombre: 'F4_BP_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F4_BP_3132023.xls' }, 
              {nombre: 'F5_EAID_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F5_EAID_3132023.xls' }, 
              {nombre: 'F6a_EAEPED_COG_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F6a_EAEPED_COG_3132023.xls' }, 
              {nombre: 'F6b_EAEPED_CA_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F6b_EAEPED_CA_3132023.xls' }, 
              {nombre: 'F6c_EAEPED_CF_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F6c_EAEPED_CF_3132023.xls' }, 
              {nombre: 'F6d_EAEPED_CSP_3132023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/6-LDF 1er T. 2023/F6d_EAEPED_CSP_3132023.xls' }      
              ]
            },
            { nombre: '7-Formato SHCP',
            abierto: false,
            archivos: [
              {nombre: 'SRFT.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/1er_Trimestre/7-Formato SHCP/SRFT.pdf' },             
              ]
            }

          ]
        },

        { nombre: '2do Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
            abierto: false,
            archivos: [
              {nombre: '1-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/1-Estado de actividades.pdf' },
              {nombre: '2-Estado de Situacion Financiera.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf'},
              {nombre: '3-Estado de Cambios en la SF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
              {nombre: '4-Estado Analitico del Activo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
              {nombre: '5-Estado Analitico de la DyOP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/5-Estado Analitico de la DyOP.pdf'},
              {nombre: '6-Estado de Variacion en la HP.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf'},
              {nombre: '7-Estado de Flujos en Efectivo.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/7-Estado de Flujos en Efectivo.pdf'},
              {nombre: '8-Informe sobre Pasivos Contingentes.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/8-Informe sobre Pasivos Contingentes.pdf'},
              {nombre: '9-Conciliacion entre los IPyC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/9-Conciliacion entre los IPyC.pdf'},  
              {nombre: '10-Conciliacion entre los EPyGC.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/10-Conciliacion entre los EPyGC.pdf'},
              {nombre: '11-Notas a los EF.pdf', url:'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/1-Contable/11-Notas a los EF.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
            abierto: false,
            archivos: [
              {nombre: '1-Estado Analitico del Ingreso.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/1-Estado Analitico del Ingreso.pdf' },
              {nombre: '2-EAEPECA.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
              {nombre: '3-EAEPECOG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf' },
              {nombre: '4-EAEPECE.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/4-EAEPECE.pdf' },
              {nombre: '5-EAEPECF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
              {nombre: '6-Endeudamiento Neto.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf' },
              {nombre: '7-Intereses de la Deuda.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
              {nombre: '8-Indicadores de la Postura Fiscal.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/8-Indicadores de la Postura Fiscal.pdf' },
              {nombre: '9-Flujo de Fondos.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/2-Presupuestaria/9-Flujo de Fondos.pdf' }
              ]
            },
            { nombre: '3-Programatica',
            abierto: false,
            archivos: [
              {nombre: '1-Gasto por Categoria Programatica.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
              {nombre: '2-Programas y Proyectos de Inversion.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
              {nombre: '3-Indicador de Resultados 2do. trimestre.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/3-Programatica/3-Indicador de Resultados 2do. trimestre.pdf' },
              {nombre: '4-Indicador de resultados FAM.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/3-Programatica/4-Indicador de resultados FAM.pdf' }
              
              ]
            },
            { nombre: '4-Titulo V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos pagados por AyS.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/4-Titulo V/' },
              {nombre: '2-Formato de programas con RCporOG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/4-Titulo V/' },
              {nombre: '3-Formato de ejercicio y DGFyR.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/4-Titulo V/' }
              
              ]
            },
            { nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de Obligaciones.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
              {nombre: '2-Relacion de Esquemas bursatiles y CF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/5-Anexos/2-Relacion de Esquemas bursatiles y CF.pdf' },
              {nombre: '3-AVANCE FINANCIERO JUNIO 2023.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/5-Anexos/3-AVANCE FINANCIERO JUNIO 2023.pdf' }
              
              ]
            },
            { nombre: '6-LDF 2do T. 2023',
            abierto: false,
            archivos: [
              {nombre: 'F1_ESF_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/F1_ESF_3062023.xls' },
              {nombre: 'F2_IADPOP_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/F2_IADPOP_3062023.xls' },
              {nombre: 'F3_IAODF_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/F3_IAODF_3062023.xls' },
              {nombre: 'F4_BP_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/F4_BP_3062023.xls' },
              {nombre: 'F5_EAID_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/F5_EAID_3062023.xls' },
              {nombre: 'F6a_EAEPED_COG_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/' },
              {nombre: 'F6b_EAEPED_CA_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/' },
              {nombre: 'F6c_EAEPED_CF_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/' },
              {nombre: 'F6d_EAEPED_CSP_3062023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/6-LDF 2do T. 2023/' }
              
              ]
            },
            { nombre: '7-Formato SHCP',
            abierto: false,
            archivos: [
              //{nombre: '',url: 'assets/contabilidad_institucional/estados_financieros/2023/2do_Trimestre/7-Formato SHCP/' },        
               ]
            }
              
           ] 
          },

        { nombre: '3er Trimestre', 
          abierto: false, carpetas: [

            { nombre: '1-Contable',
            abierto: false,
            archivos: [
              {nombre: '1-Estado de Actividades.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
              {nombre: '2-Estado de Situacion Financiera.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf' },
              {nombre: '3-Estado de Cambios en la SF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf' },
              {nombre: '4-Estado analitico del Activo.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/4-Estado analitico del Activo.pdf' },
              {nombre: '5-Estado Analitico de la D y OP.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/5-Estado Analitico de la D y OP.pdf' },
              {nombre: '6-Estado de Variacion de la HP.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/6-Estado de Variacion de la HP.pdf' },
              {nombre: '7-Estado de Flujos de Efectivo.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf' },
              {nombre: '8-Informe Sobre PC.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/8-Informe Sobre PC.pdf' },
              {nombre: '9-Conciliacion entre IPyC.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/9-Conciliacion entre IPyC.pdf' },
              {nombre: '10-Conciliacion entre los EP y los GC.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/10-Conciliacion entre los EP y los GC.pdf' },
              {nombre: '11-Notas a os EF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/1-Contable/11-Notas a os EF.pdf' }        
               ]
            },
            { nombre: '2-Presupuestaria',
            abierto: false,
            archivos: [
              {nombre: '1-Estado Analitico de Ingresos.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf' },
              {nombre: '2-EAEPECA para estatal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/2-EAEPECA para estatal.pdf'},
              {nombre: '3-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/3-EAEPECA.pdf'},
              {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
              {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
              {nombre: '6-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/6-EAEPECOG.pdf'},
              {nombre: '7-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/7-Endeudamiento Neto.pdf'},
              {nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf'},
              {nombre: '9-Flujo de Fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/9-Flujo de Fondos.pdf'},
              {nombre: '10-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/2-Presupuestaria/10-Intereses de la Deuda.pdf'}

              ]
            },
            { nombre: '3-Programatica',
            abierto: false,
            archivos: [
              {nombre: '1-Gasto por Categoria Programatica.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
              {nombre: '2-Programas y Proyectos de Inversion.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
              {nombre: '3-Indicador de Resultados.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/3-Programatica/3-Indicador de Resultados.pdf' }
               ]
            },
            { nombre: '4-Titulo V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos Pagados por AyS.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/4-Titulo V/1-Montos Pagados por AyS.pdf' },
              {nombre: '2-Formato de programas con RC por OG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/4-Titulo V/2-Formato de programas con RC por OG.pdf' },
              {nombre: '3-Formato del EyD de GFyR.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/4-Titulo V/3-Formato del EyD de GFyR.pdf' }
               ]
            },
            { nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de Obligaciones.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
              {nombre: '2-Relacion de Esquemas Bursatiles.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/5-Anexos/2-Relacion de Esquemas Bursatiles.pdf' },
              {nombre: '3-Avance Financiero.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
               ]
            },
            { nombre: '6-LDF 3er T. 2023',
            abierto: false,
            archivos: [
              {nombre: 'F1_ESF_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/F1_ESF_3092023.xls' },
              {nombre: 'F2_IADPOP_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/F2_IADPOP_3092023.xls' },
              {nombre: 'F3_IAODF_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/F3_IAODF_3092023.xls' },
              {nombre: 'F4_BP_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F4_BP_3092023.xls' },
              {nombre: 'F5_EAID_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F5_EAID_3092023.xls' },
              {nombre: 'F6a_EAEPED_COG_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F6a_EAEPED_COG_3092023.xls' },
              {nombre: 'F6b_EAEPED_CA_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F6b_EAEPED_CA_3092023.xls' },
              {nombre: 'F6c_EAEPED_CF_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F6c_EAEPED_CF_3092023.xls' },
              {nombre: 'F6d_EAEPED_CSP_3092023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/6-LDF 3er T. 2023/6-LDF 3er T. 2023/F6d_EAEPED_CSP_3092023.xls' }
               ]
            },
            { nombre: '7-Formato SHCP',
            abierto: false,
            archivos: [
              //{nombre: '',url: 'assets/contabilidad_institucional/estados_financieros/2023/3er_Trimestre/' }
               ]
            }

          ] },

        { nombre: '4to Trimestre', 
          abierto: false,
          carpetas: [
            { nombre: '1-Contable',
            abierto: false,
            archivos: [
              {nombre: '1-Estado de Actividades.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
              {nombre: '2-Estado de Situación Financiera.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/2-Estado de Situación Financiera.pdf' },
              {nombre: '3-Estado de Cambios en la SF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf' },
              {nombre: '4-Estado Analitico del Activo.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf' },
              {nombre: '5-Estado Analitico de la D y OP.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/5-Estado Analitico de la D y OP.pdf' },
              {nombre: '6-Estado de Variacion en la HP.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/6-Estado de Variacion en la HP.pdf' },
              {nombre: '7-Estado de flujos de efectivo.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/7-Estado de flujos de efectivo.pdf' },
              {nombre: '8-Informe sobre pasivos contingentes.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/8-Informe sobre pasivos contingentes.pdf' },
              {nombre: '9-Conciliacion entre los IP y C.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/9-Conciliacion entre los IP y C.pdf' },
              {nombre: '10-Conciliacion entre los EP y GC.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/10-Conciliacion entre los EP y GC.pdf' },
              {nombre: '11-Notas a los EF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/1-Contable/11-Notas a los EF.pdf' }
               ]
            },
            { nombre: '2-Presupuestaria',
            abierto: false,
            archivos: [
              {nombre: '1-Estado Analitico de Ingresos.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf' },
              {nombre: '2-EAEPECA.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
              {nombre: '3-EAEPECOG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf' },
              {nombre: '4-EAEPECE.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/4-EAEPECE.pdf' },
              {nombre: '5-EAEPECF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
              {nombre: '6-Endeudamiento Neto.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf' },
              {nombre: '7-Intereses de la Deuda.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
              {nombre: '8-Indicadores de postura fiscal.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' },
              {nombre: '9-Flujo de fondos.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf' }
               ]
            },
            { nombre: '3-Programatica',
            abierto: false,
            archivos: [
              {nombre: '1-Programatica.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/3-Programatica/1-Programatica.pdf' },
              {nombre: '2-Programas y Proyectos de Inversion.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
              {nombre: '3-Indicadores oct-dic 2023.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/3-Programatica/3-Indicadores oct-dic 2023.pdf' }
               ]
            },
            { nombre: '4-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de obligaciones.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/4-Anexos/1-Formato de obligaciones.pdf' },
              {nombre: '2-Relacion de esquemas bursatiles y de CF.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/4-Anexos/2-Relacion de esquemas bursatiles y de CF.pdf' },
              {nombre: '3-Avance Financiero Diciembre 2023.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/4-Anexos/3-Avance Financiero Diciembre 2023.pdf' }
               ]
            },
            { nombre: '5-Titulo V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos Pagados por AyS.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/5-Titulo V/1-Montos Pagados por AyS.pdf' },
              {nombre: '2-Formato de programas con RC por OdeG.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/5-Titulo V/2-Formato de programas con RC por OdeG.pdf' },
              {nombre: '3-Formato del ejercicio y DGFyR.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/5-Titulo V/3-Formato del ejercicio y DGFyR.pdf' }
               ]
            },
            { nombre: '6-LDF 4to T. 2023',
            abierto: false,
            archivos: [
              {nombre: 'F1_ESF_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F1_ESF_31122023.xls' },
              {nombre: 'F2_IADPOP_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F2_IADPOP_31122023.xls' },
              {nombre: 'F3_IAODF_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F3_IAODF_31122023.xls' },
              {nombre: 'F4_BP_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F4_BP_31122023.xls' },
              {nombre: 'F5_EAID_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F5_EAID_31122023.xls' },
              {nombre: 'F6a_EAEPED_COG_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F6a_EAEPED_COG_31122023.xls' },
              {nombre: 'F6b_EAEPED_CA_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F6b_EAEPED_CA_31122023.xls' },
              {nombre: 'F6c_EAEPED_CF_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F6c_EAEPED_CF_31122023.xls' },
              {nombre: 'F6d_EAEPED_CSP_31122023.xls',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/6-LDF 4to T. 2023/F6d_EAEPED_CSP_31122023.xls' }
               ]
            },
            { nombre: '7-Formato SHCP',
            abierto: false,
            archivos: [
              {nombre: 'SRFT 4TO. TRIMESTRE.pdf',url: 'assets/contabilidad_institucional/estados_financieros/2023/4to_Trimestre/7-Formato SHCP/SRFT 4TO. TRIMESTRE.pdf' }
               ]
            }         

          ]
         }
      ] //trimestres 2023
    }, //año 2023

    {
      anio: 2022,
      abierto: false,
      presupuestos: [

        { nombre: 'PRESUPUESTO ESTATAL 2022.pdf',
          url: 'assets/contabilidad_institucional/estados_financieros/2022/PRESUPUESTO ESTATAL 2022.pdf'
        },

        { nombre: 'PRESUPUESTO FEDERAL 2022.pdf',
          url: 'assets/contabilidad_institucional/estados_financieros/2022/PRESUPUESTO FEDERAL 2022.pdf'
        }

      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
                { nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf' },
                { nombre: '3-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/3-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf' },
                { nombre: '5-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/5-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '6-Estado de Variación en la Hacienda Publica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/6-Estado de Variación en la Hacienda Publica.pdf' },
                { nombre: '7-Estado de flujos de efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/7-Estado de flujos de efectivo.pdf' },
                { nombre: '8-Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/8-Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliacion entre IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/10-Conciliacion entre IP y C.pdf' },
                { nombre: '11-Conciliacion entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/1-Contable/11-Conciliacion entre los EP y GC.pdf' }
               ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico del Ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/1-Estado Analitico del Ingreso.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf' },
                { nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/4-EAEPECE.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf' },
                { nombre: '9-Flujos de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/2-Presupuestaria/9-Flujos de fondos.pdf' }               
               ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por Ayudas y Subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/4-Titulo V/1-Montos Pagados por Ayudas y Subsidios.pdf'},
                { nombre: '2-Formato de Programas.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/4-Titulo V/2-Formato de Programas.pdf'},
                { nombre: '3-Formato del ejercicio y destino.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/4-Titulo V/3-Formato del ejercicio y destino.pdf'}
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
                { nombre: '2-Esquemas Bursatiles y Coberturas Financieras.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/5-Anexos/2-Esquemas Bursatiles y Coberturas Financieras.pdf'},
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/5-Anexos/3-Avance Financiero.pdf'}
              ]
            },
            { nombre: '6-LDF 1er T. 2022',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F1_ESF_3132022.xls'},
                { nombre: 'F2_IADPOP_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F2_IADPOP_3132022.xls'},
                { nombre: 'F3_IAODF_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F3_IAODF_3132022.xls'},
                { nombre: 'F4_BP_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F4_BP_3132022.xls'},
                { nombre: 'F5_EAID_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F5_EAID_3132022.xls'},
                { nombre: 'F6a_EAEPED_COG_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F6a_EAEPED_COG_3132022.xls'},
                { nombre: 'F6b_EAEPED_CA_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F6b_EAEPED_CA_3132022.xls'},
                { nombre: 'F6c_EAEPED_CF_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F6c_EAEPED_CF_3132022.xls'},
                { nombre: 'F6d_EAEPED_CSP_3132022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/6-LDF 1er T. 2022/F6d_EAEPED_CSP_3132022.xls'}
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/1er_Trimestre/7-Formato SHCP/1-SRFT.pdf'}         
              ]
            }
            ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/1-Estado de Actividades.pdf'},
                { nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf'},
                { nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/3-Estado de Cambios en la SF.pdf'},
                { nombre: '4-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/4-Estado Analitico del Activo.pdf'},
                { nombre: '5-Estado Analitico de la Deuda y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/5-Estado Analitico de la Deuda y OP.pdf'},
                { nombre: '6-Estado de Variacion de la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/6-Estado de Variacion de la HP.pdf'},
                { nombre: '7-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/7-Notas a los Estados Financieros.pdf'},
                { nombre: '8-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/8-Estado de Flujos de Efectivo.pdf'},
                { nombre: '9-Conciliación de los Ingresos PyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/9-Conciliación de los Ingresos PyC.pdf'},
                { nombre: '10-Conciliación entre los egresos PyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/10-Conciliación entre los egresos PyGC.pdf'},             
                { nombre: '11-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/1-Contable/11-Informe de Pasivos Contingentes.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf'},
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/2-EAEPECA.pdf'},
                { nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                { nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf'},
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf'},
                { nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}             
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                { nombre: '2-Programa y PI.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/3-Programatica/2-Programa y PI.pdf'},
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/3-Programatica/3-Indicador de resultados.pdf'}             
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/4-Titulo V/1-Montos Pagados por ayudas y subsidios.pdf'},
                { nombre: '2-Formato de Programas.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/4-Titulo V/2-Formato de Programas.pdf'},
                { nombre: '3-Formato del Ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/4-Titulo V/3-Formato del Ejercicio y DGFyR.pdf'}
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/5-Anexos/'},
                { nombre: '2-Relacion de esquemas ByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/5-Anexos/'},
                { nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/5-Anexos/'}
              ]
            },
            { nombre: '6-LDF 2do T. 2022',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F1_ESF_3062022.xls'},
                { nombre: 'F2_IADPOP_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F2_IADPOP_3062022.xls'},  
                { nombre: 'F3_IAODF_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F3_IAODF_3062022.xls'},  
                { nombre: 'F4_BP_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F4_BP_3062022.xls'},  
                { nombre: 'F5_EAID_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F5_EAID_3062022.xls'},  
                { nombre: 'F6a_EAEPED_COG_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F6a_EAEPED_COG_3062022.xls'},  
                { nombre: 'F6b_EAEPED_CA_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F6b_EAEPED_CA_3062022.xls'},           
                { nombre: 'F6c_EAEPED_CF_3062022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/6-LDF 2do T. 2022/F6c_EAEPED_CF_3062022.xls'}
                
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: 'SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/2do_Trimestre/7-Formato SHCP/SRFT.pdf'}        
              ]
            }

         ] 
        },
        { nombre: '3er Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/1-Estado de actividades.pdf'},
                { nombre: '2-Estado de Situación Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/2-Estado de Situación Financiera.pdf'},      
                { nombre: '3-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/3-Estado de Variacion en la HP.pdf'},   
                { nombre: '4-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/4-Estado de Cambios en la SF.pdf'},   
                { nombre: '5-Estados de Flujo de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/5-Estados de Flujo de Efectivo.pdf'},   
                { nombre: '6-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/6-Informe de Pasivos Contingentes.pdf'},   
                { nombre: '7-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/7-Notas a los Estados Financieros.pdf'},   
                { nombre: '8-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/8-Estado Analitico del Activo.pdf'},          
                { nombre: '9-Estado Analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/9-Estado Analitico de la DyOP.pdf'},
                { nombre: '10-Conciliación entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/10-Conciliación entre los EPyGC.pdf'},
                { nombre: '11-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/1-Contable/11-Conciliación entre los IPyC.pdf'}
              ]
            },
            { nombre: '2-Presupuestal',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/1-Estado Analitico de Ingresos.pdf'},
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/2-EAEPECA.pdf'},
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/3-EAEPECE.pdf'},
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/4-EAEPECOG.pdf'},
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/5-EAEPECF.pdf'},
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/6-Endeudamiento Neto.pdf'},
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf'},
                { nombre: '8-Flujo de Fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/8-Flujo de Fondos.pdf'},
                { nombre: '9-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/2-Presupuestal/9-Indicadores de Postura Fiscal.pdf'}
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gastos por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/3-Programatica/1-Gastos por Categoria Programatica.pdf'},  
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf'}, 
                { nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/3-Programatica/3-Indicador de Resultados.pdf'}
                         
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y subsidios.pdf'},  
                { nombre: '2-Formato de Programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf'},  
                { nombre: '3-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/4-Titulo V/3-Formato del ejercicio y DGFyR.pdf'}          
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf'},
                { nombre: '2-Relación de Esquemas Bursatiles y CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/5-Anexos/2-Relación de Esquemas Bursatiles y CF.pdf'},
                { nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/5-Anexos/3-Avance financiero.pdf'}            
              ]
            },
            { nombre: '6-LDF 3er T. 2022',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F1_ESF_3092022.xls'},    
                { nombre: 'F2_IADPOP_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F2_IADPOP_3092022.xls'},
                { nombre: 'F3_IAODF_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F3_IAODF_3092022.xls'},
                { nombre: 'F4_BP_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F4_BP_3092022.xls'},
                { nombre: 'F5_EAID_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F5_EAID_3092022.xls'},
                { nombre: 'F6a_EAEPED_COG_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F6a_EAEPED_COG_3092022.xls'},
                { nombre: 'F6b_EAEPED_CA_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F6b_EAEPED_CA_3092022.xls'},
                { nombre: 'F6c_EAEPED_CF_3092022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/6-LDF 3er T. 2022/F6c_EAEPED_CF_3092022.xls'},

              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2022/3er_Trimestre/7-Formato SHCP'}          
              ]
            }

           ]
           },
        { nombre: '4to Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico del Ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/1-Estado Analitico del Ingreso.pdf'},
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/2-Estado de Actividades.pdf'}, 
                { nombre: '3-Estado de Situación Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/3-Estado de Situación Financiera.pdf'}, 
                { nombre: '4-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/4-Estado de Cambios en la SF.pdf'}, 
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf'},              
                { nombre: '6-Estado de Variación en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/6-Estado de Variación en la HP.pdf'}, 
                { nombre: '7-Informe sobre Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/7-Informe sobre Pasivos Contingentes.pdf'}, 
                { nombre: '8-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/8-Estado Analitico del Activo.pdf'}, 
                { nombre: '9-Estado Analitico de la D y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/9-Estado Analitico de la D y OP.pdf'}, 
                { nombre: '10-Conciliacion entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/10-Conciliacion entre los IPyC.pdf'}, 
                { nombre: '11-Conciliación entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/11-Conciliación entre los EP y GC.pdf'},
                { nombre: '12-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/1-Contable/12-Notas a los EF.pdf'}
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/1-Estado analitico de ingresos.pdf'},
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/2-EAEPECA.pdf'},
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/3-EAEPECE.pdf'},             
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/4-EAEPECOG.pdf'},
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/5-EAEPECF.pdf'},
                { nombre: '6-Endeudamiento.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/6-Endeudamiento.pdf'},
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf'},
                { nombre: '8-Flujos de Fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/8-Flujos de Fondos.pdf'},
                { nombre: '9-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/2-Presupuestal/9-Indicadores de Postura Fiscal.pdf'}
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},  
                { nombre: '2-Programas y proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/3-Programatica/2-Programas y proyectos de Inversion.pdf'}, 
                { nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/3-Programatica/3-Indicador de Resultados.pdf'}           
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por Ayudas y Subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/4-Titulo V/1-Montos Pagados por Ayudas y Subsidios.pdf'},       
                { nombre: '2-Formato de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/4-Titulo V/2-Formato de programas con RC por OG.pdf'}, 
                { nombre: '3-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/4-Titulo V/3-Formato del ejercicio y DGFyR.pdf'}      
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/5-Anexos/1-Avance Financiero.pdf'},       
                { nombre: '2-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/5-Anexos/2-Formato de Obligaciones.pdf'}, 
                { nombre: '3-Relacion de esquemas bursatiles y CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/5-Anexos/3-Relacion de esquemas bursatiles y CF.pdf'}      
              ]
            },
            { nombre: '6-LDF 4to T. 2022',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F1_ESF_31122022.xls'},  
                { nombre: 'F2_IADPOP_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F2_IADPOP_31122022.xls'},    
                { nombre: 'F3_IAODF_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F3_IAODF_31122022.xls'},    
                { nombre: 'F4_BP_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F4_BP_31122022.xls'},    
                { nombre: 'F5_EAID_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F5_EAID_31122022.xls'},    
                { nombre: 'F6a_EAEPED_COG_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F6a_EAEPED_COG_31122022.xls'},    
                { nombre: 'F6b_EAEPED_CA_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F6b_EAEPED_CA_31122022.xls'},    
                { nombre: 'F6c_EAEPED_CF_31122022.xls', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/6-LDF 4to T. 2022/F6c_EAEPED_CF_31122022.xls'}           
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: 'SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2022/4to_Trimestre/7-Formato SHCP/SRFT.pdf'}          
              ]
            }

           ]
           }
      ] //trimestres 2022
    },// año 2022

    {//2021
      anio: 2021,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2021',
          url: 'assets/contabilidad_institucional/estados_financieros/2021/Presupuesto Estatal 2021.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2021',
          url: 'assets/contabilidad_institucional/estados_financieros/2021/Presupuesto Federal 2021.pdf'
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
                { nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
                { nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf' },
                { nombre: '3-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/3-Estado de Variacion en la HP.pdf' },
                { nombre: '4-Estado de cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/4-Estado de cambios en la SF.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Informe sobre PC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/6-Informe sobre PC.pdf' },
                { nombre: '7-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/7-Notas a los EF.pdf' },
                { nombre: '8-Estado analitico del activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/8-Estado analitico del activo.pdf' },
                { nombre: '9-Estado analitico de la DyOP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/9-Estado analitico de la DyOP.pdf' },
                { nombre: '10-Conciliación entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/10-Conciliación entre los IPyC.pdf' },
                { nombre: '11-Conciliación entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/1-Contable/11-Conciliación entre los EPyGC.pdf' }
              ]
            },
            {
              nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf' },
                { nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf' },
                { nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' }
              ]
            },
            {
              nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
                { nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            {
              nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf' },
                { nombre: '2-Formato de programas RCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/4-Titulo V/2-Formato de programas RCporOG.pdf' },
                { nombre: '3-Formato del ejercicio DGFyF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/4-Titulo V/3-Formato del ejercicio DGFyF.pdf' }
              ]
            },
            {
              nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Relacion de Esquemas Bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/5-Anexos/2-Relacion de Esquemas Bursatiles.pdf' },
                { nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/5-Anexos/3-Avance financiero.pdf' }
              ]
            },
            {
              nombre: '6-LDF 1er T. 2021',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F1_ESF_3132021.xls' },
                { nombre: 'F2_IADPOP_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F2_IADPOP_3132021.xls' },
                { nombre: 'F3_IAODF_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F3_IAODF_3132021.xls' },
                { nombre: 'F4_BP_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F4_BP_3132021.xls' },
                { nombre: 'F5_EAID_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F5_EAID_3132021.xls' },
                { nombre: 'F6a_EAEPED_COG_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F6a_EAEPED_COG_3132021.xls' },
                { nombre: 'F6b_EAEPED_CA_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F6b_EAEPED_CA_3132021.xls' },
                { nombre: 'F6c_EAEPED_CF_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F6c_EAEPED_CF_3132021.xls' },
                { nombre: 'F6d_EAEPED_CSP_3132021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/6-LDF 1er T. 2021/F6d_EAEPED_CSP_3132021.xls' }
              ]
            },
            {
              nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/1er_Trimestre/7-Formato SHCP/1-SRFT.pdf' },
              ]
            }
            ]
        },
        { nombre: 
          '2do Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de situcion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/1-Estado de situcion financiera.pdf' },
                { nombre: '2-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/2-Estado de actividades.pdf' },
                { nombre: '3-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/3-Estado de Variacion en la HP.pdf' },
                { nombre: '4-Estado de Cambio en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/4-Estado de Cambio en la Situacion Financiera.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/7-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '8-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/8-Informe de Pasivos Contingentes.pdf' },
                { nombre: '9-Conciliacion entre los EP y los GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/9-Conciliacion entre los EP y los GC.pdf' },
                { nombre: '10-Conciliacion entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/10-Conciliacion entre los IP y C.pdf' },
                { nombre: '11-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/1-Contable/11-Notas a los EF.pdf' }
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/1-Estado Analitico del Activo.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
                { nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/3-Programatica/3-Indicador de Resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/4-Titulo V/1-Montos Pagados por AyS.pdf' },
                { nombre: '2-Formato de Programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf' },
                { nombre: '3-Formato del Ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/4-Titulo V/3-Formato del Ejercicio y DGFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/5-Anexos/' },
                { nombre: '2-Relacion de Esquemas B y CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/5-Anexos/' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/5-Anexos/' }
              ]
            },
            { nombre: '6-LDF 2do T. 2021',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F1_ESF_3062021.xls' },
                { nombre: 'F2_IADPOP_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F2_IADPOP_3062021.xls' },
                { nombre: 'F3_IAODF_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F3_IAODF_3062021.xls' },
                { nombre: 'F4_BP_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F4_BP_3062021.xls' },
                { nombre: 'F5_EAID_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F5_EAID_3062021.xls' },
                { nombre: 'F6a_EAEPED_COG_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F6a_EAEPED_COG_3062021.xls' },
                { nombre: 'F6b_EAPED_CA_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F6b_EAPED_CA_3062021.xls' },
                { nombre: 'F6c_EAEPED_CF_3062021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F6c_EAEPED_CF_3062021.xls' },
                { nombre: 'F6d_EAEPED_CSP_3162021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/6-LDF 2do T. 2021/F6d_EAEPED_CSP_3062021.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/2do_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

           ] 
          },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/1-Estado de situacion financiera.pdf' },
                { nombre: '2-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/2-Estado de actividades.pdf' },
                { nombre: '3-Estado de variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/3-Estado de variacion en la HP.pdf' },
                { nombre: '4-Estado de cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/4-Estado de cambios en la SF.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado analitico de deuda y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/7-Estado analitico de deuda y OP.pdf' },
                { nombre: '8-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/8-Informe de Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliación entre los Ingresos P y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/10-Conciliación entre los Ingresos P y C.pdf' },
                { nombre: '11-Conciliación entre los Egresos P y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/1-Contable/11-Conciliación entre los Egresos P y GC.pdf' }
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf' },
                { nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf' },
                { nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
                { nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/4-Titulo V/1-Montos pagados por AyS.pdf' },
                { nombre: '2-Formato de programas RCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/4-Titulo V/2-Formato de programas RCporOG.pdf' },
                { nombre: '3-Formato del ejerciio DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/4-Titulo V/3-Formato del ejerciio DGFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf' },
                { nombre: '2-Esquemas bursatiles y CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/5-Anexos/2-Esquemas bursatiles y CF.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 3er T. 2021',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F1_ESF_3092021.xls' },
                { nombre: 'F2_IADPOP_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F2_IADPOP_3092021.xls' },
                { nombre: 'F3_IAODF_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F3_IAODF_3092021.xls' },
                { nombre: 'F4_BP_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F4_BP_3092021.xls' },
                { nombre: 'F5_EAID_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F5_EAID_3092021.xls' },
                { nombre: 'F6a_EAEPED_COG_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F6a_EAEPED_COG_3092021.xls' },
                { nombre: 'F6b_EAEPED_CA_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F6b_EAEPED_CA_3092021.xls' },
                { nombre: 'F6c_EAEPED_CF_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F6c_EAEPED_CF_3092021.xls' },
                { nombre: 'F6d_EAEPED_CSP_3092021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/6-LDF 3er T. 2021/F6d_EAEPED_CSP_3092021.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2021/3er_Trimestre/7-Formato SHCP:' },
              ]
            }

        ] 
      },
        { nombre: '4to Trimestre',
           abierto: false, 
           carpetas: [
            { nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/1-Estado de situacion financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variacion de la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/3-Estado de Variacion de la HP.pdf' },
                { nombre: '4-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/4-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/7-Estado Analitico de la Deuda y OP.pdf' },
                { nombre: '8-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/8-Informe de Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliacion entre los ingresos P y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/10-Conciliacion entre los ingresos P y C.pdf' },
                { nombre: '11-Conciliacion entre los egresos P y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/1-Contable/11-Conciliacion entre los egresos P y GC.pdf' }
              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico del Ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/1-Estado Analitico del Ingreso.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/2-Presupuestal/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto Por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/3-Programatica/1-Gasto Por Categoria Programatica.pdf' },
                { nombre: '2-Programas y PI.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/3-Programatica/2-Programas y PI.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por Ayudas y Subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/4-Titulo V/1-Montos Pagados por Ayudas y Subsidios.pdf' },
                { nombre: '2-Fondos de Programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/4-Titulo V/2-Fondos de Programas con RC por OG.pdf' },
                { nombre: '3-Formato del Ejercicio y Destino de GF y R.pdf ', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/4-Titulo V/3-Formato del Ejercicio y Destino de GF y R.pdf ' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Esquemas Bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/5-Anexos/2-Esquemas Bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 4to. T 2021',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F1_ESF_31122021.xls' },
                { nombre: 'F2_IADPOP_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F2_IADPOP_31122021.xls' },
                { nombre: 'F3_IAODF_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F3_IAODF_31122021.xls' },
                { nombre: 'F4_BP_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F4_BP_31122021.xls' },
                { nombre: 'F5_EAID_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F5_EAID_31122021.xls' },
                { nombre: 'F6a_EAEPED_COG_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F6a_EAEPED_COG_31122021.xls' },
                { nombre: 'F6b_EAEPED_CA_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F6b_EAEPED_CA_31122021.xls' },
                { nombre: 'F6c_EAEPED_CF_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F6c_EAEPED_CF_31122021.xls' },
                { nombre: 'F6d_EAEPED_CSP_31122021.xls', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/6-LDF/F6d_EAEPED_CSP_31122021.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/7-Formato SHCP/1-SRFT.pdf' },
              ]
            },
            { nombre: '8-Inventario',
              abierto: false,
              archivos: [
                { nombre: 'BIENES MUEBLES E INMUEBLES AL 31 DIC 2021.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2021/4to_Trimestre/8-Inventario/BIENES MUEBLES E INMUEBLES AL 31 DIC 2021.pdf' },
              ]
            },

        ] 
      }
      ] //trimestres 2021
    },//2021

    {//2020
      anio: 2020,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2020',
          url: 'assets/contabilidad_institucional/estados_financieros/2020/Presupuesto Estatal 2020.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2020',
          url: 'assets/contabilidad_institucional/estados_financieros/2020/Presupuesto Federal 2020.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/1-Estado de Actividades.pdf' },
                { nombre: '2-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/2-Estado de Situacion Financiera.pdf' },
                { nombre: '3-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/3-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '4-Estado Analítico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/4-Estado Analítico del Activo.pdf' },
                { nombre: '5-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/5-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '6-Estado de Variacion en la Hacienda Publica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/6-Estado de Variacion en la Hacienda Publica.pdf' },
                { nombre: '7-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/7-Estado de Flujos de Efectivo.pdf' },
                { nombre: '8-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/8-Informe de Pasivos Contingentes.pdf' },
                { nombre: '9-Conciliacion entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/9-Conciliacion entre los IP y C.pdf' },
                { nombre: '10-Conciliacion entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/10-Conciliacion entre los EP y GC.pdf' },
                { nombre: '11-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/1-Contable/11-Notas a los Estados Financieros.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/3-EAEPECOG.pdf' },
                { nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/4-EAEPECE.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/2-Presupuestal/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
                { nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/3-Programatica/3-Indicador de Resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por A y S.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/4-Titulo V/1-Montos pagados por A y S.pdf' },
                { nombre: '2-Formato de programas RCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/4-Titulo V/2-Formato de programas RCporOG.pdf' },
                { nombre: '3-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/4-Titulo V/3-Formato del ejercicio y DGFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf' },
                { nombre: '2-Esquemas bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/5-Anexos/2-Esquemas bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 1er T. 2020',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F1_ESF_3132020.xls' },
                { nombre: 'F2_IADPOP_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F2_IADPOP_3132020.xls' },
                { nombre: 'F3_IAODF_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F3_IAODF_3132020.xls' },
                { nombre: 'F4_BP_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F4_BP_3132020.xls' },
                { nombre: 'F5_EAID_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F5_EAID_3132020.xls' },
                { nombre: 'F6a_EAEPED_COG_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F6a_EAEPED_COG_3132020.xls' },
                { nombre: 'F6b_EAEPED_CA_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F6b_EAEPED_CA_3132020.xls' },
                { nombre: 'F6c_EAEPED_CF_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F6c_EAEPED_CF_3132020.xls' },
                { nombre: 'F6d_EAEPED_CSP_3132020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/6-LDF 1er T. 2020/F6d_EAEPED_CSP_3132020.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/1er_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

            ]
        },
        { nombre: '2do Trimestre',
           abierto: false, 
           carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estados de situacion financiera.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/1-Estados de situacion financiera.PDF' },
                { nombre: '2-Estado de actividades.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/2-Estado de actividades.PDF' },
                { nombre: '3-ESTADO DE VARIACION EN LA HACIENDA PUBLICA.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/3-ESTADO DE VARIACION EN LA HACIENDA PUBLICA.PDF' },
                { nombre: '4-ESTADOS DE CAMBIOS EN LA SITUACION FINANCIERA.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/4-ESTADOS DE CAMBIOS EN LA SITUACION FINANCIERA.PDF' },
                { nombre: '5-ESTADO DE FLUJOS DE EFECTIVO.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/5-ESTA DE FLUJOS DE EFECTIVO.PDF' },
                { nombre: '6-ESTADO ANALITICO DEL ACTIVO.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/6-ESTADO ANALITICO DEL ACTIVO.PDF' },
                { nombre: '7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.PDF' },
                { nombre: '8-INFORME DE PASIVOS CONTINGENTES.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/8-INFORME DE PASIVOS CONTIGENTES.PDF' },
                { nombre: '9-NOTAS A LOS ESTADOS FINANCIEROS.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/9-NOTAS A LOS ESTADOS FINANCIEROS.PDF' },
                { nombre: '10-Conciliacion entre los IP y C.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/10-CONCILIACIÓN ENTRE LOS INGRESOS PRESUPUESTARIOS Y CONTABLES.PDF' },
                { nombre: '11-Conciliacion de los egresos presupuestarios y los gastos contables.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/1-Contable/11-CONCILIACIÓN DE LOS EGRESOS PRESUPUESTARIOS Y LOS GASTOS CONTABLES.PDF' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO ANALITICO DE INGRESOS.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/1-ESTADO ANALITICO DE INGRESOS.PDF' },
                { nombre: '2-EAEPECA.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/2-EAEPECA.PDF' },
                { nombre: '3-EAEPECE.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/3-EAEPECE.PDF' },
                { nombre: '4-EAEPECOG.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/4-EAEPECOG.PDF' },
                { nombre: '5-EAEPECF.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/5-EAEPECF.PDF' },
                { nombre: '6-ENDEUDAMIENTO NETO.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/6-ENDEUDAMIENTO NETO.PDF' },
                { nombre: '7-INTERESES DE LA DEUDA.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/7-INTERESES DE LA DEUDA.PDF' },
                { nombre: '8-INDICADORES DE POSTURA FISCAL.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/2-Presupuestaria/8-INDICADORES DE POSTURA FISCAL.PDF' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
                { nombre: '2-PROGRAMAS Y PROYECTOS DE INVERSION.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/3-Programatica/2-PROGRAMAS Y PROYECTOS DE INVERSION.PDF' },
                { nombre: '3-Resultado de indicadores.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/3-Programatica/3-Resultado de indicadores.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE EJERCICIO Y DESTINO DE GASTO FEDERALIZADO.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/4-Titulo V/1-FORMATO DE EJERCICIO Y DESTINO DE GASTO FEDERALIZADO.PDF' },
                { nombre: '2-FORMATO DE PROGRAMAS CON RECURSO CONCURRENTE.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/4-Titulo V/3-FORMATO DE PROGRAMAS CON RECURSO CONCURRENTE.PDF' },
                { nombre: '3-MONTOS PAGADOS POR AYUDA Y SUBSIDIOS.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/4-Titulo V/4-MONTOS PAGADOS POR AYUDA Y SUBSIDIOS.PDF' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE OBLIGACIONES.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/5-Anexos/1-FORMATO DE OBLIGACIONES.PDF' },
                { nombre: '2-RELACION DE ESQUEMAS BURSATILES Y COBERTURA FINANCIERAS.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/5-Anexos/2-RELACION DE ESQUEMAS BURSATILES Y COBERTURA FINANCIERAS.PDF' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 2do T. 2020',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F1_ESF_3062020.xls' },
                { nombre: 'F2_IADPOP_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F2_IADPOP_3062020.xls' },
                { nombre: 'F3_IAODF_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F3_IAODF_3062020.xls' },
                { nombre: 'F4_BP_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F4_BP_3062020.xls' },
                { nombre: 'F5_EAID_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F5_EAID_3062020.xls' },
                { nombre: 'F6a_EAEPED_COG_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F6a_EAEPED_COG_3062020.xls' },
                { nombre: 'F6b_EAEPED_CA_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F6b_EAEPED_CA_3062020.xls' },
                { nombre: 'F6c_EAEPED_CF_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F6c_EAEPED_CF_3062020.xls' },
                { nombre: 'F6d_EAEPED_CSP_3062020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/6-LDF 2do T. 2020/F6d_EAEPED_CSP_3062020.xls' }
                
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/2do_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

        ] },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/1-Estado de situacion financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variacion de la Hacienda Publica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/3-Estado de Variacion de la Hacienda Publica.pdf' },
                { nombre: '4-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/4-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '5-Estado de Flujo de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/5-Estado de Flujo de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/7-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '8-Informe Sobre Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/8-Informe Sobre Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliacion entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/10-Conciliacion entre los IP y C.pdf' },
                { nombre: '11-Conciliacion entre los EP y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/1-Contable/11-Conciliacion entre los EP y GC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/6-Endeudamiento neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/2-Presupuestal/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/3-Programatica/1-Gasto por categoria programatica.pdf' },
                { nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y subsidios.pdf' },
                { nombre: '2-Formato de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/4-Titulo V/2-Formato de programas con RC por OG.pdf' },
                { nombre: '3-Formato del ejercicio y destino de GF y R.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/4-Titulo V/3-Formato del ejercicio y destino de GF y R.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf' },
                { nombre: '2-Relacion de Esquemas B y CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/5-Anexos/2-Relacion de Esquemas B y CF.pdf' },
                { nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/5-Anexos/3-Avance financiero.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F1_ESF_3092020.xls' },
                { nombre: 'F2_IADPOP_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F2_IADPOP_3092020.xls' },
                { nombre: 'F3_IAODF_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F3_IAODF_3092020.xls' },
                { nombre: 'F4_BP_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F4_BP_3092020.xls' },
                { nombre: 'F5_EAID_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F5_EAID_3092020.xls' },
                { nombre: 'F6a_EAEPED_COG_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F6a_EAEPED_COG_3092020.xls' },
                { nombre: 'F6b_EAEPED_CA_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F6b_EAEPED_CA_3092020.xls' },
                { nombre: 'F6c_EAEPED_CF_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F6c_EAEPED_CF_3092020.xls' },
                { nombre: 'F6d_EAEPED_CSP_3092020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/6-LDF 3er T. 2020/F6d_EAEPED_CSP_3092020.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SFU.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/7-Formato SHCP/1-SFU.pdf' },
                { nombre: '1-SFU investigacion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/3er_Trimestre/7-Formato SHCP/2-SFU investigacion.pdf' }
              ]
            }

        ] },
        { nombre: '4to Trimestre', 
          abierto: 
          false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/1-Estado de Situacion Financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variacion en la Hacienda Publica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/3-Estado de Variacion en la Hacienda Publica.pdf' },
                { nombre: '4-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/4-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '5-Estados de Flujo de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/5-Estados de Flujo de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/7-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '8-Informe de Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/8-Informe de Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliacion entre los ingresos Presupuestarios y Contables.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/10-Conciliacion entre los ingresos Presupuestarios y Contables.pdf' },
                { nombre: '11-Conciliacion entre los Egresos Presupuestarios y los Gastos contables.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/1-Contable/11-Conciliacion entre los Egresos Presupuestarios y los Gastos contables.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/2-Presupuestal/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por A y S.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/4-Titulo V/1-Montos pagados por A y S.pdf' },
                { nombre: '2-Formato de Programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/4-Titulo V/2-Formato de Programas con RC por OG.pdf' },
                { nombre: '3-Formato del Ejercicio DGF y R.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/4-Titulo V/3-Formato del Ejercicio DGF y R.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Esquemas Bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/5-Anexos/2-Esquemas Bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 4to T. 2020',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F1_ESF_31122020.xls' },
                { nombre: 'F2_IADPOP_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F2_IADPOP_31122020.xls' },
                { nombre: 'F3_IAODF_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F3_IAODF_31122020.xls' },
                { nombre: 'F4_BP_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F4_BP_31122020.xls' },
                { nombre: 'F5_EAID_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F5_EAID_31122020.xls' },
                { nombre: 'F6a_EAEPED_COG_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F6a_EAEPED_COG_31122020.xls' },
                { nombre: 'F6b_EAEPED_CA_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F6b_EAEPED_CA_31122020.xls' },
                { nombre: 'F6c_EAEPED_CF_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F6c_EAEPED_CF_31122020.xls' },
                { nombre: 'F6d_EAEPED_CSP_31122020.xls', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/6-LDF 4to T. 2020/F6d_EAEPED_CSP_31122020.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2020/4to_Trimestre/' }
              ]
            }

        ] }
      ] //trimestres 2020
    },//2020

    {//2019
      anio: 2019,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2019',
          url: 'assets/contabilidad_institucional/estados_financieros/2019/Presupuesto Estatal 2019.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2019',
          url: 'assets/contabilidad_institucional/estados_financieros/2019/Presupuesto Federal 2019.pdf'
        }
      ],
      trimestres: [
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de situación financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/1-Estado de situación financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variación de la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/3-Estado de Variación de la HP.pdf' },
                { nombre: '4-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/4-Estado de Cambios en la SF.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/7-Estado Analitico de la Deuda y OP.pdf' },
                { nombre: '8-Informe de Pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/8-Informe de Pasivos contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliación entre los IP y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/10-Conciliación entre los IP y C.pdf' },
                { nombre: '11-Conciliación entre los EP y los GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/1-Contable/11-Conciliación entre los EP y los GC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/2-Presupuestaria/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gastos por Categoria Programática.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/3-Programática/1-Gastos por Categoria Programática.pdf' },
                { nombre: '2-Programas y Proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/3-Programática/2-Programas y Proyectos de inversion.pdf' },
                { nombre: '3-Indicadores.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/3-Programática/3-Indicadores.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y subsidios.pdf' },
                { nombre: '2-Formato de programas con RCOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/4-Titulo V/2-Formato de programas con RCOG.pdf' },
                { nombre: '3-FEyDGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/4-Titulo V/3-FEyDGFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Relación de esquemas bursátiles y de cobertura financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/5-Anexos/2-Relación de esquemas bursátiles y de cobertura financiera.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F1_ESF_3132019.xls' },
                { nombre: 'F2_IADPOP_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F2_IADPOP_3132019.xls' },
                { nombre: 'F3_IAODF_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F3_IAODF_3132019.xls' },
                { nombre: 'F4_BP_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F4_BP_3132019.xls' },
                { nombre: 'F5_EAID_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F5_EAID_3132019.xls' },
                { nombre: 'F6a_EAEPED_COG_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F6a_EAEPED_COG_3132019.xls' },
                { nombre: 'F6b_EAEPED_CA_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F6b_EAEPED_CA_3132019.xls' },
                { nombre: 'F6c_EAEPED_CF_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F6c_EAEPED_CF_3132019.xls' },
                { nombre: 'F6d_EAEPED_CSP_3132019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/6-LDF 1er T. 2019/F6d_EAEPED_CSP_3132019.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SFU.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/1er_Trimestre/7-Formato SHCP/1-SFU.pdf' }
              ]
            }
            ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '11-Conciliacion entre los EPyGC', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/1-Contable/11-Conciliacion entre los EPyGC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '4-Estado Analitico del Ejercicio del Presupuesto de Egresos COG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/2-Presupuestaria/4-Estado Analitico del Ejercicio del Presupuesto de Egresos COG.pdf' },
                { nombre: '5-Estado Analitico del Ejercicio del Presupuesto de Egreso CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/2-Presupuestaria/5-Estado Analitico del Ejercicio del Presupuesto de Egreso CF.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por Ayudas y Subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/4-Titulo V/1-Montos Pagados por Ayudas y Subsidios.pdf' },
                { nombre: '2-Formato de Programas con recursos Concurrente por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/4-Titulo V/2-Formato de Programas con recursos Concurrente por OG.pdf' },
                { nombre: '3-Formato del Ejercicio y Destino de Gasto FR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/4-Titulo V/3-Formato del Ejercicio y Destino de Gasto FR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Esquemas bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/5-Anexos/2-Esquemas bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F1_ESF_3062019.xls' },
                { nombre: 'F2_IADPOP_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F2_IADPOP_3062019.xls' },
                { nombre: 'F3_IAODF_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F3_IAODF_3062019.xls' },
                { nombre: 'F4_BP_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F4_BP_3062019.xls' },
                { nombre: 'F5_EAID_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F5_EAID_3062019.xls' },
                { nombre: 'F6a_EAEPED_COG_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F6a_EAEPED_COG_3062019.xls' },
                { nombre: 'F6b_EAEPED_CA_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F6b_EAEPED_CA_3062019.xls' },
                { nombre: 'F6c_EAEPED_CF_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F6c_EAEPED_CF_3062019.xls' },
                { nombre: 'F6d_EAEPED_CSP_3062019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/6-LDF 2do T. 2019/F6d_EAEPED_CSP_3062019.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/2do_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

        ] },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADOS DE ACTIVIDADES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/1-ESTADOS DE ACTIVIDADES.pdf' },
                { nombre: '2-ESTADO DE SITUACIÓN FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/2-ESTADO DE SITUACIÓN FINANCIERA.pdf' },
                { nombre: '3-ESTADO DE CAMBIOS EN LA SITUACIÓN FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/3-ESTADO DE CAMBIOS EN LA SITUACIÓN FINANCIERA.pdf' },
                { nombre: '4-ESTADO ANALITICO DEL ACTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/4-ESTADO ANALITICO DEL ACTIVO.pdf' },
                { nombre: '5-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/5-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf' },
                { nombre: '6-ESTADO DE VARIACIÓN EN LA HACIENDA PÚBLICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/6-ESTADO DE VARIACIÓN EN LA HACIENDA PÚBLICA.pdf' },
                { nombre: '7-ESTADO DE FLUJO DE EFECTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/7-ESTADO DE FLUJO DE EFECTIVO.pdf' },
                { nombre: '8-INFORME DE PASIVOS CONTINGENTES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/8-INFORME DE PASIVOS CONTINGENTES.pdf' },
                { nombre: '9-CONCILIACIÓN ENTRE LOS INGRESOS PC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/9-CONCILIACIÓN ENTRE LOS INGRESOS PC.pdf' },
                { nombre: '10-CONCILIACIÓN ENTRE LOS EGRESOS PGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/10-CONCILIACIÓN ENTRE LOS EGRESOS PGC.pdf' },
                { nombre: '11-NOTAS FINANCIERAS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/1-Contable/11-NOTAS FINANCIERAS.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO ANALITICO DE LOS INGRESOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/1-ESTADO ANALITICO DE LOS INGRESOS.pdf' },
                { nombre: '2-ESTADO ANALITICO DEL EJERCICIO PCA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/2-ESTADO ANALITICO DEL EJERCICIO PCA.pdf' },
                { nombre: '3-ESTADO ANALITICO DEL EJERCICIO PECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/3-ESTADO ANALITICO DEL EJERCICIO PECOG.pdf' },
                { nombre: '4-ESTADO ANALITICO DEL EJERCICIO DEL PECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/4-ESTADO ANALITICO DEL EJERCICIO DEL PECE.pdf' },
                { nombre: '5-ESTADO ANALITICO DEL EJERCICIO PECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/5-ESTADO ANALITICO DEL EJERCICIO PECF.pdf' },
                { nombre: '6-ENDEUDAMIENTO NETO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/6-ENDEUDAMIENTO NETO.pdf' },
                { nombre: '7-INTERESES DE LA DEUDA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/7-INTERESES DE LA DEUDA.pdf' },
                { nombre: '8-INDICADORES DE POSTURA FISCAL.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/2-Presupuestaria/8-INDICADORES DE POSTURA FISCAL.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-GASTO POR CATEGORIA PROGRAMATICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/3-Programatica/1-GASTO POR CATEGORIA PROGRAMATICA.pdf' },
                { nombre: '2-PROGRAMAS Y PROYECTOS DE INVERSIÓN.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/3-Programatica/2-PROGRAMAS Y PROYECTOS DE INVERSIÓN.pdf' },
                { nombre: '3-INDICADOR PARA RESULTADOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/3-Programatica/3-INDICADOR PARA RESULTADOS.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/4-Titulo V/1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf' },
                { nombre: '2-FORMATO DE PROGRAMAS CON RECURSOS CONCURRENTES OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/4-Titulo V/2-FORMATO DE PROGRAMAS CON RECURSOS CONCURRENTES OG.pdf' },
                { nombre: '3-FORMATO DE EJERCICIO DGFR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/4-Titulo V/3-FORMATO DE EJERCICIO DGFR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE OBLIGACIONES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/5-Anexos/1-FORMATO DE OBLIGACIONES.pdf' },
                { nombre: '2-RELACIÓN DE ESQUEMAS BURSATILES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/5-Anexos/2-RELACIÓN DE ESQUEMAS BURSATILES.pdf' },
                { nombre: '3-AVANCE FINANCIERO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/5-Anexos/3-AVANCE FINANCIERO.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F1_ESF_3092019.xls' },
                { nombre: 'F2_IADPOP_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F2_IADPOP_3092019.xls' },
                { nombre: 'F3_IAODF_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F3_IAODF_3092019.xls' },
                { nombre: 'F4_BP_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F4_BP_3092019.xls' },
                { nombre: 'F5_EAID_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F5_EAID_3092019.xls' },
                { nombre: 'F6a_EAEPED_COG_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F6a_EAEPED_COG_3092019.xls' },
                { nombre: 'F6b_EAEPED_CA_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F6b_EAEPED_CA_3092019.xls' },
                { nombre: 'F6c_EAEPED_CF_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F6c_EAEPED_CF_3092019.xls' },
                { nombre: 'F6d_EAEPED_CSP_3092019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/6-LDF 3er T. 2019/F6d_EAEPED_CSP_3092019.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/3er_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

          ] },
        { nombre: '4to Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO DE SITUACION FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/1-ESTADO DE SITUACION FINANCIERA.pdf' },
                { nombre: '2-ESTADO DE ACTIVIDADES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/2-ESTADO DE ACTIVIDADES.pdf' },
                { nombre: '3-ESTADO DE VARIACION EN LA HACIENDA PÚBLICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/3-ESTADO DE VARIACION EN LA HACIENDA PÚBLICA.pdf' },
                { nombre: '4-ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/4-ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf' },
                { nombre: '5-ESTADO DE FLUJO DE EFECTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/5-ESTADO DE FLUJO DE EFECTIVO.pdf' },
                { nombre: '6-ESTADO ANALITICO DEL ACTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/6-ESTADO ANALITICO DEL ACTIVO.pdf' },
                { nombre: '7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf' },
                { nombre: '8-INFORME SOBRE PASIVOS CONTINGENTES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/8-INFORME SOBRE PASIVOS CONTINGENTES.pdf' },
                { nombre: '9-NOTAS A LOS ESTADOS FINANCIEROS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/9-NOTAS A LOS ESTADOS FINANCIEROS.pdf' },
                { nombre: '10-CONCILIACION ENTRE LOS INGRESOS PRESUPUESTARIOS Y CONTABLES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/10-CONCILIACION ENTRE LOS INGRESOS PRESUPUESTARIOS Y CONTABLES.pdf' },
                { nombre: '11-CONCILIACION ENTRE EGRESOS PRESUPUESTARIOS Y LOS GASTOS CONTABLES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/1-Contable/11-CONCILIACION ENTRE EGRESOS PRESUPUESTARIOS Y LOS GASTOS CONTABLES.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO ANALITICO DE INGRESOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/1-ESTADO ANALITICO DE INGRESOS.pdf' },
                { nombre: '2-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/2-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CA.pdf' },
                { nombre: '3-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/3-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CE.pdf' },
                { nombre: '4-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS COG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/4-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS COG.pdf' },
                { nombre: '5-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/5-ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CF.pdf' },
                { nombre: '6-ENDEUDAMIENTO NETO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/6-ENDEUDAMIENTO NETO.pdf' },
                { nombre: '7-INTERESES DE LA DEUDA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/7-INTERESES DE LA DEUDA.pdf' },
                { nombre: '8-INDICADORES DE POSTURA FISCAL.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/2-Presupuestaria/8-INDICADORES DE POSTURA FISCAL.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-GASTOS POR CATEGORIA PROGRAMATICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/3-Programatica/1-GASTOS POR CATEGORIA PROGRAMATICA.pdf' },
                { nombre: '2-PROGRAMAS DE PROYECTOS DE INVERSION.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/3-Programatica/2-PROGRAMAS DE PROYECTOS DE INVERSION.pdf' },
                { nombre: '3-INDICADORES PARA RESULTADOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/3-Programatica/3-INDICADORES PARA RESULTADOS.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/4-Titulo V/1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf' },
                { nombre: '2-FORMATO DE PROGRAMAS CON RECURSOS COG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/4-Titulo V/2-FORMATO DE PROGRAMAS CON RECURSOS COG.pdf' },
                { nombre: '3-FORMATO DEL EJERCICIO Y DESTINO DE GFR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/4-Titulo V/3-FORMATO DEL EJERCICIO Y DESTINO DE GFR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE OBLIGACIONES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/5-Anexos/1-FORMATO DE OBLIGACIONES.pdf' },
                { nombre: '2-RELACION DE ESQUEMAS BURSATILES Y DE COBERTURA FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/5-Anexos/2-RELACION DE ESQUEMAS BURSATILES Y DE COBERTURA FINANCIERA.pdf' },
                { nombre: '3-AVANCE FINANCIERO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/5-Anexos/3-AVANCE FINANCIERO.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F1_ESF_31122019.xls' },
                { nombre: 'F2_IADPOP_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F2_IADPOP_31122019.xls' },
                { nombre: 'F3_IAODF_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F3_IAODF_31122019.xls' },
                { nombre: 'F4_BP_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F4_BP_31122019.xls' },
                { nombre: 'F5_EAID_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F5_EAID_31122019.xls' },
                { nombre: 'F6a_EAEPED_COG_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F6a_EAEPED_COG_31122019.xls' },
                { nombre: 'F6b_EAEPED_CA_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F6b_EAEPED_CA_31122019.xls' },
                { nombre: 'F6c_EAEPED_CF_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F6c_EAEPED_CF_31122019.xls' },
                { nombre: 'F6d_EAEPED_CSP_31122019.xls', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/6-LDF 4to T. 2019/F6d_EAEPED_CSP_31122019.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.PDF', url: 'assets/contabilidad_institucional/estados_financieros/2019/4to_Trimestre/7-Formato SHCP/1-SRFT.PDF' }
              ]
            }

        ] }
      ] //trimestres 2019
    },//2019

    {//2018
      anio: 2018,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2018',
          url: 'assets/contabilidad_institucional/estados_financieros/2018/Presupuesto Estatal 2018.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2018',
          url: 'assets/contabilidad_institucional/estados_financieros/2018/Presupuesto Federal 2018.pdf'
        }
      ],
      trimestres: [//trimestres 2018
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/1-Estado de Situacion Financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variacion de la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/3-Estado de Variacion de la HP.pdf' },
                { nombre: '4-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/4-Estado de Cambios en la SF.pdf' },
                { nombre: '5-Estado de Flujos de Efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/5-Estado de Flujos de Efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/7-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '8-Pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/8-Pasivos contingentes.pdf' },
                { nombre: '9-Notas a los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/9-Notas a los EF.pdf' },
                { nombre: '10-Conciliacion entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/10-Conciliacion entre los IPyC.pdf' },
                { nombre: '11-Conciliacion entre los EPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/1-Contable/11-Conciliacion entre los EPyC.pdf' }
               
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado analitico de ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/1-Estado analitico de ingreso.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf' },
                { nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/7-Intereses de la deuda.pdf' },
                { nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/2-Presupuestaria/8-Indicadores de postura fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gastos por categoria programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/3-Programatica/1-Gastos por categoria programatica.pdf' },
                { nombre: '2-Programa y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/3-Programatica/2-Programa y proyectos de inversion.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y subsidios.pdf' },
                { nombre: '2-Programas con recurso concurrente por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/4-Titulo V/2-Programas con recurso concurrente por OG.pdf' },
                { nombre: '3-Ejercicio y destino de GFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/4-Titulo V/3-Ejercicio y destino de GFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/5-Anexos/1-Formato de obligaciones.pdf' },
                { nombre: '2-Esquemas bursatiles y coberturas financieras.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/5-Anexos/2-Esquemas bursatiles y coberturas financieras.pdf' },
                { nombre: '3-Formato Unico.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/5-Anexos/3-Formato Unico.pdf' },
                { nombre: '4-Indicadores enero-marzo 2018.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/5-Anexos/4-Indicadores enero-marzo 2018.pdf' }
              ]
            },
            { nombre: '6-LDF 1er T. 2018',
              abierto: false,
              archivos: [
                { nombre: '1-F1_ESF.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/1-F1_ESF.xls' },
                { nombre: '2-F2_IADPOP.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/2-F2_IADPOP.xls' },
                { nombre: '3-F3_IAODF_3132018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/3-F3_IAODF_3132018.xls' },
                { nombre: '4-F4_BP.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/4-F4_BP.xls' },
                { nombre: '5-F5_EAID.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/5-F5_EAID.xls' },
                { nombre: 'F6a_EAEPED_COG.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/F6a_EAEPED_COG.xls' },
                { nombre: 'F6b_EAEPED_CA.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/F6b_EAEPED_CA.xls' },
                { nombre: 'F6c_EAEPED_CF.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/F6c_EAEPED_CF.xls' },
                { nombre: 'F6d_EAEPED_CSP.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/6-LDF 1er T. 2018/F6d_EAEPED_CSP.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2018/1er_Trimestre/7-Formato SHCP/' }
              ]
            }
            ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/1-Estado de actividades.pdf' },
                { nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/2-Estado de situacion financiera.pdf' },
                { nombre: '3-Estado de cambios de la situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/3-Estado de cambios de la situacion financiera.pdf' },
                { nombre: '4-Estado analitico del activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/4-Estado analitico del activo.pdf' },
                { nombre: '5-Estado analitico de la deuda y otros pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/5-Estado analitico de la deuda y otros pasivos.pdf' },
                { nombre: '6-Estado de variacion de la Hacienda Publica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/6-Estado de variacion de la Hacienda Publica.pdf' },
                { nombre: '7-Estado de Flujos de efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/7-Estado de Flujos de efectivo.pdf' },
                { nombre: '8-Informe sobre pasivos contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/8-Informe sobre pasivos contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-CEPGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/10-CEPGC.pdf' },
                { nombre: '11-CIPC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/1-Contable/11-CIPC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado analitico del ingreso.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/1-Estado analitico del ingreso.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-ENDEUDAMIENTO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/6-ENDEUDAMIENTO.pdf' },
                { nombre: '7-INTERES DE DEUDA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/7-INTERES DE DEUDA.pdf' },
                { nombre: '8-INDICADORES DE POSTURA FISCAL.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/2-Presupuestaria/8-INDICADORES DE POSTURA FISCAL.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-GASTOS POR CATEGORIA PROGRAMATICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/3-Programatica/1-GASTOS POR CATEGORIA PROGRAMATICA.pdf' },
                { nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf' },
                { nombre: '3-Indicador de resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/3-Programatica/3-Indicador de resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos Pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/4-Titulo V/1-Montos Pagados por AyS.pdf' },
                { nombre: '2-FPRCOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/4-Titulo V/2-FPRCOG.pdf' },
                { nombre: '3-FEDGFR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/4-Titulo V/3-FEDGFR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE OBLIGACIONES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/5-Anexos/1-FORMATO DE OBLIGACIONES.pdf' },
                { nombre: '2-REBCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/5-Anexos/2-REBCF.pdf' },
                { nombre: '3-Avance financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/5-Anexos/3-Avance financiero.pdf' },
                { nombre: '4-Formato unico.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/5-Anexos/4-Formato unico.pdf' },
                { nombre: '5-Indicador estrategicos y de gestion abril-junio 18.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/5-Anexos/5-Indicador estrategicos y de gestion abril-junio 18.pdf' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'BALANCE PRESUPUESTARIO LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/BALANCE PRESUPUESTARIO LDF.pdf' },
                { nombre: 'EAEPED LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/EAEPED LDF.pdf' },
                { nombre: 'EAEPEDCA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/EAEPEDCA.pdf' },
                { nombre: 'EAEPEDCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/EAEPEDCF.pdf' },
                { nombre: 'EAEPEDCSP LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/EAEPEDCSP LDF.pdf' },
                { nombre: 'EAID LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/EAID LDF.pdf' },
                { nombre: 'ESF LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/ESF LDF.pdf' },
                { nombre: 'IADPyOP LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/IADPyOP LDF.pdf' },
                { nombre: 'IAODF LDF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/6-LDF 2do T. 2018/IAODF LDF.pdf' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                //{ nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2018/2do_Trimestre/7-Formato SHCP/' }
              ]
            }

        ] },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-Estado de Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/1-Estado de Situacion Financiera.pdf' },
                { nombre: '2-Estado de Actividades.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/2-Estado de Actividades.pdf' },
                { nombre: '3-Estado de Variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/3-Estado de Variacion en la HP.pdf' },
                { nombre: '4-Estado de Cambios en la Situacion Financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/4-Estado de Cambios en la Situacion Financiera.pdf' },
                { nombre: '5-Estado de Flujos de efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/5-Estado de Flujos de efectivo.pdf' },
                { nombre: '6-Estado Analitico del Activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/6-Estado Analitico del Activo.pdf' },
                { nombre: '7-Estado Analitico de la Deuda y Otros Pasivos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/7-Estado Analitico de la Deuda y Otros Pasivos.pdf' },
                { nombre: '8-Pasivos Contingentes.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/8-Pasivos Contingentes.pdf' },
                { nombre: '9-Notas a los Estados Financieros.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/9-Notas a los Estados Financieros.pdf' },
                { nombre: '10-Conciliacion entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/10-Conciliacion entre los IPyC.pdf' },
                { nombre: '11-Conciliacion entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/1-Contable/11-Conciliacion entre los EPyGC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-Estado Analitico de Ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/1-Estado Analitico de Ingresos.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/5-EAEPECF.pdf' },
                { nombre: '6-Endeudamiento Neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/6-Endeudamiento Neto.pdf' },
                { nombre: '7-Intereses de la Deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/7-Intereses de la Deuda.pdf' },
                { nombre: '8-Indicadores de Postura Fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/2-Presupuestal/8-Indicadores de Postura Fiscal.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-Gasto por Categoria Programatica.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf' },
                { nombre: '2-Programas y Proyectos de Inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/3-Programatica/2-Programas y Proyectos de Inversion.pdf' },
                { nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/3-Programatica/3-Indicador de Resultados.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-Montos pagados por ayudas y subsidios.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/4-Titulo V/1-Montos pagados por ayudas y subsidios.pdf' },
                { nombre: '2-Formato de programas con recursos COG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/4-Titulo V/2-Formato de programas con recursos COG.pdf' },
                { nombre: '3-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/4-Titulo V/3-Formato del ejercicio y DGFyR.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-Formato de Obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/5-Anexos/1-Formato de Obligaciones.pdf' },
                { nombre: '2-Relacion de Esquemas Bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/5-Anexos/2-Relacion de Esquemas Bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/5-Anexos/3-Avance Financiero.pdf' }
              ]
            },
            { nombre: '6-LDF 3er T. 2018',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F1_ESF_3092018.xls' },
                { nombre: 'F2_IADPOP_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F2_IADPOP_3092018.xls' },
                { nombre: 'F3_IAODF_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F3_IAODF_3092018.xls' },
                { nombre: 'F4_BP_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F4_BP_3092018.xls' },
                { nombre: 'F5_EAID_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F5_EAID_3092018.xls' },
                { nombre: 'F6a_EAEPED_COG_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F6a_EAEPED_COG_3092018.xls' },
                { nombre: 'F6b_EAEPED_CA_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F6b_EAEPED_CA_3092018.xls' },
                { nombre: 'F6c_EAEPED_CF_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F6c_EAEPED_CF_3092018.xls' },
                { nombre: 'F6d_EAEPED_CSP_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/6-LDF 3er T. 2018/F6d_EAEPED_CSP_3092018.xls' }
              ]
            },
            { nombre: '7-Formato SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/3er_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

          ] },
        { nombre: '4to Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO DE SITUACION FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/1-ESTADO DE SITUACION FINANCIERA.pdf' },
                { nombre: '2-ESTADOS DE ACTIVIDADES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/2-ESTADOS DE ACTIVIDADES.pdf' },
                { nombre: '3-ESTADO DE VARIACION DE LA HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/3-ESTADO DE VARIACION DE LA HP.pdf' },
                { nombre: '4-ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/4-ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf' },
                { nombre: '5-ESTADO DE FLUJOS DE EFECTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/5-ESTADO DE FLUJOS DE EFECTIVO.pdf' },
                { nombre: '6-ESTADO ANALITICO DEL ACTIVO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/6-ESTADO ANALITICO DEL ACTIVO.pdf' },
                { nombre: '7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/7-ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf' },
                { nombre: '8-PASIVOS CONTINGENTES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/8-PASIVOS CONTINGENTES.pdf' },
                { nombre: '9-NOTAS FINANCIERAS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/9-NOTAS FINANCIERAS.pdf' },
                { nombre: '10-CONCILIACIÓN ENTRE LOS IP Y C.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/10-CONCILIACIÓN ENTRE LOS IP Y C.pdf' },
                { nombre: '11-CONCILIACION ENTRE EP Y GC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/1-Contable/11-CONCILIACION ENTRE EP Y GC.pdf' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '1-ESTADO ANALITICO DE INGRESOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/1-ESTADO ANALITICO DE INGRESOS.pdf' },
                { nombre: '2-EAEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                { nombre: '3-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/3-EAEPECE.pdf' },
                { nombre: '4-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/4-EAEPECOG.pdf' },
                { nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/5-EAEPECF.pdf' },
                { nombre: '6-ENDEUDAMIENTO NETO.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/6-ENDEUDAMIENTO NETO.pdf' },
                { nombre: '7-INTERESES DE LA DEUDA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/7-INTERESES DE LA DEUDA.pdf' },
                { nombre: '8-INDICADORES DE POSTURA FISCAL.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/2-Presupuestaria/8-INDICADORES DE POSTURA FISCAL.pdf' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '1-GASTOS POR CATEGORIA PROGRAMATICA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/3-Programatica/1-GASTOS POR CATEGORIA PROGRAMATICA.pdf' },
                { nombre: '2-PROGRAMAS Y PROYECTOS DE INVERSION.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/3-Programatica/2-PROGRAMAS Y PROYECTOS DE INVERSION.pdf' },
                { nombre: '3-INDICADOR PARA RESULTADOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/3-Programatica/3-INDICADOR PARA RESULTADOS.pdf' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/4-Titulo V/1-MONTOS PAGADOS POR AYUDAS Y SUBSIDIOS.pdf' },
                { nombre: '2-FORMATOS DE PROGRAMAS CON RECURSOS CONCURRENTE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/4-Titulo V/2-FORMATOS DE PROGRAMAS CON RECURSOS CONCURRENTE.pdf' },
                { nombre: '3-FORMATO DEL EJERCICIO Y DESTINO DE GASTOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/4-Titulo V/3-FORMATO DEL EJERCICIO Y DESTINO DE GASTOS.pdf' }
              ]
            },
            { nombre: '5-Anexos',
              abierto: false,
              archivos: [
                { nombre: '1-FORMATO DE OBLIGACIONES.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/5-Anexos/1-FORMATO DE OBLIGACIONES.pdf' },
                { nombre: '2-Relacion de esquemas bursatiles.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/5-Anexos/2-Relacion de esquemas bursatiles.pdf' },
                { nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/5-Anexos/3-Avance Financiero.pdf' },
                { nombre: '4-GUIA DE CUMPLIMIENTO DE LA LEY DE DISCIPLINA FINANCIERA DE LAS ENTIDADES FEDERATIVAS Y MUNICIPIOS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/5-Anexos/4-GUIA DE CUMPLIMIENTO DE LA LEY DE DISCIPLINA FINANCIERA DE LAS ENTIDADES FEDERATIVAS Y MUNICIPIOS.pdf' }
              ]
            },
            { nombre: '6-LDF 4to T. 2018',
              abierto: false,
              archivos: [
                { nombre: 'F1_ESF_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F1_ESF_31122018.xls' },
                { nombre: 'F2_IADPOP_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F2_IADPOP_31122018.xls' },
                { nombre: 'F3_IAODF_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F3_IAODF_31122018.xls' },
                { nombre: 'F4_BP_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F4_BP_31122018.xls' },
                { nombre: 'F5_EAID_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F5_EAID_31122018.xls' },
                { nombre: 'F6a_EAEPED_COG_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F6a_EAEPED_COG_31122018.xls' },
                { nombre: 'F6b_EAEPED_CA_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F6b_EAEPED_CA_31122018.xls' },
                { nombre: 'F6c_EAEPED_CF_31122018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F6c_EAEPED_CF_31122018.xls' },
                { nombre: 'F6d_EAEPED_CSP_3092018.xls', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/6-LDF 4to T. 2018/F6d_EAEPED_CSP_3092018.xls' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '1-SRFT.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2018/4to_Trimestre/7-Formato SHCP/1-SRFT.pdf' }
              ]
            }

        ] }
      ] //trimestres 2018
    },//2018

    {//2017
      anio: 2017,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2017',
          url: 'assets/contabilidad_institucional/estados_financieros/2017/Presupuesto Estatal 2017.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2017',
          url: 'assets/contabilidad_institucional/estados_financieros/2017/Presupuesto Federal 2017.pdf'
        }
      ],
      trimestres: [//trimestres 2017
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/1er_Trimestre/' }
              ]
            }
            ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2017/2do_Trimestre/' }
              ]
            }

        ] },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/3er_Trimestre/' }
              ]
            }

          ] },
        { nombre: '4to Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2017/4to_Trimestre/' }
              ]
            }

        ] }
      ] //trimestres 2017
    },//2017
    {//2016
      anio: 2016,
      abierto: false,
      presupuestos: [
        {
          nombre: 'Presupuesto Estatal 2016',
          url: 'assets/contabilidad_institucional/estados_financieros/2017/Presupuesto Estatal 2016.pdf'
        },
        {
          nombre: 'Presupuesto Federal 2016',
          url: 'assets/contabilidad_institucional/estados_financieros/2017/Presupuesto Federal 2016.pdf'
        }
      ],
      trimestres: [//trimestres 2016
        {
          nombre: '1er Trimestre',
          abierto: false,
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/1er_Trimestre/' }
              ]
            }
            ]
        },
        { nombre: '2do Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: '', url: 'assets/contabilidad_institucional/estados_financieros/2016/2do_Trimestre/' }
              ]
            }

        ] },
        { nombre: '3er Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/3er_Trimestre/' }
              ]
            }

          ] },
        { nombre: '4to Trimestre', 
          abierto: false, 
          carpetas: [
            {nombre: '1-Contable',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            {nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            { nombre: '3-Programatica',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            { nombre: '4-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            { nombre: '5-Titulo V',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            { nombre: '6-LDF',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            },
            { nombre: '7-SHCP',
              abierto: false,
              archivos: [
                { nombre: 'Documento contable', url: 'assets/contabilidad_institucional/estados_financieros/2016/4to_Trimestre/' }
              ]
            }

        ] }
      ] //trimestres 2016
    },//20216

  ]
}