import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planeacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planeacion.component.html',
  styleUrls: ['./planeacion.component.css']
})
export class PlaneacionComponent {

  // 🔥 REFERENCIA AL CONTENEDOR
  @ViewChild('tabsContainer', { static: false }) tabsContainer!: ElementRef;

  tabActivo: string = 'PAE 2025 Ejercicio Fiscal 2025';

  // 🔥 SCROLL
  scrollTabs(direction: string) {
    const container = this.tabsContainer.nativeElement;

    const scrollAmount = 300;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }


  // 🔥 LISTA DE TODOS LOS TABS
  tabs = [

    {
      nombre: 'PAE 2025 Ejercicio Fiscal 2025',
      archivos: [
        { nombre: '0.-ACUSE_OFICIO_DE_ENTREGA-PAE2025', url: 'assets/planeacion-pdf/PAE_2025/0-ACUSE_OFICIO_DE_ENTREGA-PAE2025.pdf'},
        { nombre: '01_INFORME FINAL-', url: 'assets/planeacion-pdf/PAE_2025/01_INFORME FINAL-.pdf'},
        { nombre: '02_TDR-.pdf', url: 'assets/planeacion-pdf/PAE_2025/02_TDR-.pdf'},
        { nombre: '03.Anexo_1Formato_para_la_Difusion_de_los_Resultados_de_las_Evaluaciones-FINAL-', url: 'assets/planeacion-pdf/PAE_2025/03.Anexo_1Formato_para_la_Difusion_de_los_Resultados_de_las_Evaluaciones-FINAL-.pdf'},
        { nombre: '04_FichaTecnicadelEvaluador-.pdf', url: 'assets/planeacion-pdf/PAE_2025/04_FichaTecnicadelEvaluador-.pdf'},
        { nombre: '05_PROPUESTA_DE_TRABAJO-.pdf', url: 'assets/planeacion-pdf/PAE_2025/05_PROPUESTA_DE_TRABAJO-.pdf'},
        { nombre: '06Resumen_Ejecutivo-.pdf', url: 'assets/planeacion-pdf/PAE_2025/06Resumen_Ejecutivo-.pdf'},
        { nombre: '08_Constancia_de_Situación Fiscal.pdf', url: 'assets/planeacion-pdf/PAE_2025/08_Constancia_de_Situación Fiscal.pdf'},
        { nombre: '09_CONTRATO-ITSE-PAE-2025.pdf', url: 'assets/planeacion-pdf/PAE_2025/09_CONTRATO-ITSE-PAE-2025.pdf'},
        { nombre: '10_CurriculumdelEvaluador.pdf', url: 'assets/planeacion-pdf/PAE_2025/10_CurriculumdelEvaluador.pdf'},
        { nombre: '11_Documentacion_que_acredite_experiencia_del_evaluador.pdf', url: 'assets/planeacion-pdf/PAE_2025/11_Documentacion_que_acredite_experiencia_del_evaluador.pdf'},
        { nombre: '12_Manifestacion_por_escrito_de_que_el_evaluador_tiene_experiencia.pdf', url: 'assets/planeacion-pdf/PAE_2025/12_Manifestacion_por_escrito_de_que_el_evaluador_tiene_experiencia.pdf'},
        { nombre: '13_Anexo_A.pdf', url: 'assets/planeacion-pdf/PAE_2025/13_Anexo_A.pdf'},
        { nombre: ' ', url: 'assets/planeacion-pdf/PAE_2025/'},
      ]
    },

    {
      nombre: 'PAE 2024 Ejercicio Fiscal 2023',
      archivos: [
        { nombre: '0_acuse_entrega_Pp014_2023_PAE_2024.pdf', url: 'assets/planeacion-pdf/PAE_2024/0_acuse_entrega_Pp014_2023_PAE_2024.pdf' },
        { nombre: '1_Informe_Final_pp_014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/1_Informe_Final_pp_014_2023.pdf'},
        { nombre: '2_TdR_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/2_TdR_pp014_2023.pdf'},
        { nombre: '3_Anexo_1_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/3_Anexo_1_pp014_2023.pdf'},
        { nombre: '4_Ficha_tecnica_del_evaluador_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/4_Ficha_tecnica_del_evaluador_pp014_2023.pdf'},
        { nombre: '5_Propuesta_de_trabajo_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/5_Propuesta_de_trabajo_pp014_2023.pdf'},
        { nombre: '6_Resumen_Ejecutivo_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/6_Resumen_Ejecutivo_pp014_2023.pdf'},
        { nombre: '7_Acta_Constitutiva_de_la_instancia_evaluadora_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/7_Acta_Constitutiva_de_la_instancia_evaluadora_pp014_2023.pdf'},
        { nombre: '8_Constancia_de_Situacion_Fiscal_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/8_Constancia_de_Situacion_Fiscal_pp014_2023.pdf'},
        { nombre: '9_Contrato_Prestacion _de _Servicio_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/9_Contrato_Prestacion _de _Servicio_pp014_2023.pdf'},
        { nombre: '10_Curriculum_del_evaluador_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/10_Curriculum_del_evaluador_pp014_2023.pdf'},
        { nombre: '11_Documentacion_que_acredite_la_experiencia_del_evaluador_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/11_Documentacion_que_acredite_la_experiencia_del_evaluador_pp014_2023.pdf'},
        { nombre: '12_Manifestacion_por_escrito_pp014 2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/12_Manifestacion_por_escrito_pp014_2023.pdf'},
        { nombre: '13_Anexo_A_pp014_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/13_Anexo_A_pp014_2023.pdf'},
        { nombre: 'ASM_PAE_2024_EJERCICIO_2023.pdf', url: 'assets/planeacion-pdf/PAE_2024/ASM_PAE_2024_EJERCICIO_2023.pdf'},

      ]
    },

    {
      nombre: 'PAE 2023 Ejercicio Fiscal 2022',
      archivos: [
        { nombre: '1_Informe Final_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/1_Informe Final_014.pdf' },
        { nombre: '2_dRPP014.pdf', url: 'assets/planeacion-pdf/PAE_2023/2_dRPP014.pdf' },
        { nombre: '3_Anexo_1_Difusion de de Resultados_ok.pdf', url: 'assets/planeacion-pdf/PAE_2023/3_Anexo_1_Difusion de de Resultados_ok.pdf' },
        { nombre: '4_Ficha_Tecnica_Instancia_ejecutora_Programa_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/4_Ficha_Tecnica_Instancia_ejecutora_Programa_014.pdf' },
        { nombre: '5_Propuesta_de_trabajo.pdf', url: 'assets/planeacion-pdf/PAE_2023/5_Propuesta_de_trabajo.pdf' },
        { nombre: '6_Resumen_ejecutivo_Programa_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/6_Resumen_ejecutivo_Programa_014.pdf' },
        { nombre: '7_Acta-Constitutiva.pdf', url: 'assets/planeacion-pdf/PAE_2023/7_Acta-Constitutiva.pdf' },
        { nombre: '8_Constancia_Situacion_Fiscal.pdf', url: 'assets/planeacion-pdf/PAE_2023/8_Constancia_Situacion_Fiscal.pdf' },
        { nombre: '9_Contrato_Pp_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/9_Contrato_Pp_014.pdf' },
        { nombre: '10_Curriculum.pdf', url: 'assets/planeacion-pdf/PAE_2023/10_Curriculum.pdf' },
        { nombre: '11-Acredita_Experiencia.pdf', url: 'assets/planeacion-pdf/PAE_2023/11-Acredita_Experiencia.pdf' },
        { nombre: '12_Manifestación_Experiencia.pdf', url: 'assets/planeacion-pdf/PAE_2023/12_Manifestación_Experiencia.pdf' },
        { nombre: 'Anexo_A_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/Anexo_A_014.pdf' },
        { nombre: 'ASM_ANEXO-F-POSICIÓN_INSTITUCIONAL.pdf', url: 'assets/planeacion-pdf/PAE_2023/ASM_ANEXO-F-POSICIÓN_INSTITUCIONAL.pdf' },
        { nombre: 'Aspectos_Susceptibles_de_Mejora-PAE_2023 Ejercicio_Fiscal 2022.pdf', url: 'assets/planeacion-pdf/PAE_2023/Aspectos_Susceptibles_de_Mejora-PAE_2023 Ejercicio_Fiscal 2022.pdf' },
        { nombre: 'AVANCE_DE_LOS_ ASPECTOS_SUSCEPTIBLES_DE_MEJORA_INSTERINSTITUCIONALES.pdf', url: 'assets/planeacion-pdf/PAE_2023/AVANCE_DE_LOS_ ASPECTOS_SUSCEPTIBLES_DE_MEJORA_INSTERINSTITUCIONALES.pdf' },
        { nombre: 'DPyCP-3552-2024_ENTREGA_ASM_PP014.pdf', url: 'assets/planeacion-pdf/PAE_2023/DPyCP-3552-2024_ENTREGA_ASM_PP014.pdf' },
        { nombre: 'OFICIO_ENTREGA_PAE_2023_Pp_014.pdf', url: 'assets/planeacion-pdf/PAE_2023/OFICIO_ENTREGA_PAE_2023_Pp_014.pdf' },


      ]
    },

    {
      nombre: 'PAE 2022 Ejercicio Fiscal 2021',
      archivos: [
        { nombre: '1InformeFinalPp107ITSE 2022CyRejerc2021mod.pdf', url: 'assets/planeacion-pdf/PAE_2022/1InformeFinalPp107ITSE 2022CyRejerc2021mod.pdf ' },
        { nombre: '1ITSEOficiodeentregaAnexoDyFPAE2022ejerc2021.pdf', url: 'assets/planeacion-pdf/PAE_2022/1ITSEOficiodeentregaAnexoDyFPAE2022ejerc2021.pdf ' },
        { nombre: '2AnexoDDocumentoInstitucionalVALIDADOPAE2022ejerc2021.pdf', url: 'assets/planeacion-pdf/PAE_2022/2AnexoDDocumentoInstitucionalVALIDADOPAE2022ejerc2021.pdf ' },
        { nombre: '2TDRCyRITSE2022mod.pdf', url: 'assets/planeacion-pdf/PAE_2022/2TDRCyRITSE2022mod.pdf ' },
        { nombre: '3Anexo1Difusionmod.pdf', url: 'assets/planeacion-pdf/PAE_2022/3Anexo1Difusionmod.pdf ' },
        { nombre: '3AnexoFPosicionInstitucionalVALIDADOPAE2022ejerc2021.pdf', url: 'assets/planeacion-pdf/PAE_2022/3AnexoFPosicionInstitucionalVALIDADOPAE202２ejerc２０２１.pdf ' },
        { nombre: '4FichatecnicaITSEmodi.pdf', url: 'assets/planeacion-pdf/PAE_2022/4FichatecnicaITSEmodi.pdf' },
        { nombre: '5Propuestadetrabajomodi.pdf', url: 'assets/planeacion-pdf/PAE_2022/5Propuestadetrabajomodi.pdf' },
        { nombre: '6ResumenEjecutivoITSEmod.pdf', url: 'assets/planeacion-pdf/PAE_2022/6ResumenEjecutivoITSEmod.pdf' },
        { nombre: '7Constanciadesituacionfiscal.pdf', url: 'assets/planeacion-pdf/PAE_2022/7Constanciadesituacionfiscal.pdf' },
        { nombre: '8Contratodeprestaciondeservicio.pdf', url: 'assets/planeacion-pdf/PAE_2022/8Contratodeprestaciondeservicio.pdf' },
        { nombre: '9Curriculumdelevaluador.pdf', url: 'assets/planeacion-pdf/PAE_2022/9Curriculumdelevaluador.pdf' },
        { nombre: '10Documentacionqueacreditelaexperienciadelevaluador.pdf', url: 'assets/planeacion-pdf/PAE_2022/10Documentacionqueacreditelaexperienciadelevaluador.pdf' },
        { nombre: '11Manifestacionporescritodequeelevaluadortieneexperienciamod.pdf', url: 'assets/planeacion-pdf/PAE_2022/11Manifestacionporescritodequeelevaluadortieneexperienciamod.pdf' },
        { nombre: 'ASMPAE2022EJERC2021cierreSECONT-1.zip', url: 'assets/planeacion-pdf/PAE_2022/ASMPAE2022EJERC2021cierreSECONT-1.zip' },
        { nombre: 'CONTRATO_PAE_2022.pdf', url: 'assets/planeacion-pdf/PAE_2022/CONTRATO_PAE_2022.pdf' },

      ]
    },

    {
      nombre: 'PAE 2021 Ejercicio Fiscal 2020',
      archivos: [
        { nombre: 'Documento 2021', url: 'assets/planeacion/pae2021.pdf' }
      ]
    },

    {
      nombre: 'PAE 2020 Ejercicio Fiscal 2019',
      archivos: [
        { nombre: 'Documento 2020', url: 'assets/planeacion/pae2020.pdf' }
      ]
    },

    {
      nombre: 'PAE 2019 Ejercicio Fiscal 2018',
      archivos: [
        { nombre: 'Documento 2019', url: 'assets/planeacion/pae2019.pdf' }
      ]
    },

    {
      nombre: 'PDI 2021-2027 ITSE ESTATAL',
      archivos: [
        { nombre: 'PDI Estatal', url: 'assets/planeacion/pdi-estatal.pdf' }
      ]
    },

    {
      nombre: 'PDI DEL ITSE 2019 - 2024',
      archivos: [
        { nombre: 'PDI 2019-2024', url: 'assets/planeacion/pdi-2019-2024.pdf' }
      ]
    },

    {
      nombre: 'PDI 2024-2027',
      archivos: [
        { nombre: 'PDI 2024-2027', url: 'assets/planeacion/pdi-2024-2027.pdf' }
      ]
    },

    {
      nombre: 'DICTAMEN PDI 2024-2027',
      archivos: [
        { nombre: 'Dictamen', url: 'assets/planeacion/dictamen.pdf' }
      ]
    },

    {
      nombre: 'Evaluación de Diseño Programa 107',
      archivos: [
        { nombre: 'Evaluación', url: 'assets/planeacion/evaluacion.pdf' }
      ]
    },

    {
      nombre: 'IRC 2023',
      archivos: [
        { nombre: 'Informe 2023', url: 'assets/planeacion/irc2023.pdf' }
      ]
    },

    {
      nombre: 'IRC 2022',
      archivos: [
        { nombre: 'Informe 2022', url: 'assets/planeacion/irc2022.pdf' }
      ]
    },

    {
      nombre: 'IRC 2021',
      archivos: [
        { nombre: 'Informe 2021', url: 'assets/planeacion/irc2021.pdf' }
      ]
    },

    {
      nombre: 'IRC 2020',
      archivos: [
        { nombre: 'Informe 2020', url: 'assets/planeacion/irc2020.pdf' }
      ]
    },

    {
      nombre: 'IRC 2012-2018',
      archivos: [
        { nombre: 'Informe histórico', url: 'assets/planeacion/irc-historico.pdf' }
      ]
    },

    {
      nombre: 'IRC 2018',
      archivos: [
        { nombre: 'Informe 2018', url: 'assets/planeacion/irc2018.pdf' }
      ]
    },

    {
      nombre: 'PROGRAMA U079',
      archivos: [
        { nombre: 'Programa U079', url: 'assets/planeacion/u079.pdf' }
      ]
    }

  ];

}