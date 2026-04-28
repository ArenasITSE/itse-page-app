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
                {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/1-Estado analitico de ingresos.pdf' },
                {nombre: '2-EAEPECA.pdf', url:'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/2-EAEPECA.pdf' },
                {nombre: '3-EAEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/3-EAEPECOG.pdf'},
                {nombre: '4-EAEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/4-EAEPECE.pdf'},
                {nombre: '5-EAEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/5-EAEPECF.pdf'},
                {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/6-Endeudamiento neto.pdf'},
                {nombre: '7-Interes de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/7-Interes de la deuda.pdf'},
                {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/8-Indicadores de la postura fiscal.pdf'},
                {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/2-Presupuestaria/9-Flujo de fondos.pdf'}


              ]
            },
            {
            nombre: '3-Programatica',
              abierto: false,
              archivos: [
                {nombre: '1-Gasto por Categoria Programatica-pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/3-Programatica/1-Gasto por Categoria Programatica.pdf'},
                {nombre: '2-Programas y proyectos de inversion.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/3-Programatica/2-Programas y proyectos de inversion.pdf'},
                {nombre: '3-Indicador de Resultados.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/3-Programatica/3-Indicador de Resultados.pdf'}
               

              ]
            },
            {
            nombre: '4-Titulo-V',
            abierto: false,
            archivos: [
              {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/4-Titulo-V/1-Montos pagados por AyS.pdf'},
              {nombre: '2-Formato del Ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/4-Titulo-V/2-Formato del Ejercicio y DGFyR.pdf'},
              {nombre: '3-Fondo de programas con RC por OG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/4-Titulo-V/3-Fondo de programas con RC por OG.pdf'}

            ]
            },
            {
            nombre: '5-Anexos',
            abierto: false,
            archivos: [
              {nombre: '1-Formato de obligaciones.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/5-Anexos/1-Formato de obligaciones.pdf'},
              {nombre: '2-Relacion de esquemas ByCF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/5-Anexos/2-Relacion de esquemas ByCF.pdf'},
              {nombre: '3-Avance Financiero.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/5-Anexos/3-Avance Financiero.pdf'}

            ]
            },
            {
            nombre: '6-LDF-1-ert-2025',
            abierto: false,
            archivos:[
              {nombre: 'F1_ESF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F1_ESF_3132025.xls'},
              {nombre: 'F2_IADPOP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F2_IADPOP_3132025.xls'},
              {nombre: 'F3_IAODF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F3_IAODF_3132025.xls'},
              {nombre: 'F4_BP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F4_BP_3132025.xls'},
              {nombre: 'F5_EAID_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F5_EAID_3132025.xls'},
              {nombre: 'F6a_EAEPED_COG_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F6a_EAEPED_COG_3132025.xls'},
              {nombre: 'F6b_EAEPED_CA_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F6b_EAEPED_CA_3132025.xls'},
              {nombre: 'F6c_EAEPED_CF_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F6c_EAEPED_CF_3132025.xls'},
              {nombre: 'F6d_EAEPED_CSP_3132025.xls', url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/6-LDF-1-ert-2025/F6d_EAEPED_CSP_3132025.xls'}

           

            ] 
            },
            {
            nombre: '7-Formato-de-la-SHCP',
            abierto: false,
            archivos:[
              {nombre: 'ITSE ReporteFinal.pdf' , url: 'assets/contabilidad_institucional/estados_financieros/2025/1re_Trimestre/7-Formato-de-la-SHCP/ITSE ReporteFinal.pdf'}
              


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
              {nombre: '1-Estado de actividades.pdf' , url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/1-Estado de actividades.pdf'},
              {nombre: '2-Estado de situacion financiera.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/2-Estado de situacion financiera.pdf'},
              {nombre: '3-Estado de Cambios en la SF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/3-Estado de Cambios en la SF.pdf'},
              {nombre: '4-Estado analitico del activo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/4-Estado analitico del activo.pdf'},
              {nombre: '5-Estado Analitico de la D y OP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/5-Estado Analitico de la D y OP.pdf'},
              {nombre: '6-Estado de variacion en la HP.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/6-Estado de variacion en la HP.pdf'},
              {nombre: '7-Estado de flujos de efectivo.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/7-Estado de flujos de efectivo.pdf'},
              {nombre: '8-Informe sobre PC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/8-Informe sobre PC.pdf'},
              {nombre: '9-Conciliacion entre los IPyC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/9-Conciliacion entre los IPyC.pdf'},
              {nombre: '10-Conciliacion entre los EPyGC.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/10-Conciliacion entre los EPyGC.pdf'},
              {nombre: '11-Notas de los EF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/1- Contable/11-Notas de los EF.pdf'}



              ]
            },
            { nombre: '2-Presupuestaria',
              abierto: false,
              archivos: [
              {nombre: '1-Estado analitico de ingresos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/1-Estado analitico de ingresos.pdf'},
              {nombre: '2-Estado AEPECA.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/2-Estado AEPECA.pdf'},
              {nombre: '3-Estado AEPECE.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/3-Estado AEPECE.pdf'},
              {nombre: '4-Estado AEPECOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/4-Estado AEPECOG.pdf'},
              {nombre: '5-Estado AEPECF.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/5-Estado AEPECF.pdf'},
              {nombre: '6-Endeudamiento neto.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/6-Endeudamiento neto.pdf'},
              {nombre: '7-Intereses de la deuda.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/7-Intereses de la deuda.pdf'},
              {nombre: '8-Indicadores de postura fiscal.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/8-Indicadores de postura fiscal.pdf'},
              {nombre: '9-Flujo de fondos.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/2- Presupuestaria/9-Flujo de fondos.pdf'}

              


                     
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
              {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4- Titulo V/1-Montos pagados por AyS.pdf'},
              {nombre: '2-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4- Titulo V/2-Formato del ejercicio y DGFyR.pdf'},
              {nombre: '3-Formato de PRCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/4- Titulo V/3-Formato de PRCporOG.pdf'}


              ]

            },

            { nombre: '5-Anexos',
              abierto: false,
              archivos:[
                {nombre: '1-Montos pagados por AyS.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5- Anexos/1-Montos pagados por AyS.pdf'},
                {nombre: '2-Formato del ejercicio y DGFyR.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5- Anexos/2-Formato del ejercicio y DGFyR.pdf'},
                {nombre: '3-Formato de PRCporOG.pdf', url: 'assets/contabilidad_institucional/estados_financieros/2025/2do_Trimestre/5- Anexos/3-Formato de PRCporOG.pdf'}


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

  ]

}