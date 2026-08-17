import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


// =========================================================
// DOCUMENTO
// =========================================================

interface Documento {
  nombre: string;
  url: string;
}


// =========================================================
// SECCIÓN DE DOCUMENTOS
// =========================================================

interface SeccionDocumentos {
  titulo?: string;
  documentos: Documento[];
}


// =========================================================
// PESTAÑA
// =========================================================

interface Pestana {
  id: string;
  nombre: string;
  tipo: 'pdf' | 'documentos' | 'vacio';
  pdf?: string;
  secciones?: SeccionDocumentos[];
}


// =========================================================
// CONTRALORÍA
// =========================================================

interface Contraloria {
  id: string;
  nombre: string;
  titulo: string;
  responsable: string;
  correo: string;
  logo: string;
  pestanas: Pestana[];
}


@Component({
  selector: 'app-contralorias-sociales',
  standalone: true,
  templateUrl: './contralorias_sociales.component.html',
  styleUrls: ['./contralorias_sociales.component.css']
})
export class Contralorias_socialesComponent {


  // =========================================================
  // CONTRALORÍA SELECCIONADA
  // =========================================================

  contraloriaSeleccionada = 'ppu006';


  // =========================================================
  // PESTAÑA SELECCIONADA
  // =========================================================

  tabSeleccionada = 'contraloria';


  // =========================================================
  // CONTRALORÍAS
  // =========================================================

  contralorias: Contraloria[] = [


    // =======================================================
    // CSU006
    // =======================================================

    {
      id: 'ppu006',

      nombre: 'CSU006',

      titulo: 'CSU006',

      responsable:
        'Gabriela Gutiérrez Hernández | Responsable de Contraloría Social y CSU006',

      correo:
        'prodep@escarcega.tecnm.mx',

      logo:
        'assets/home_logos/logo_conta.jpg',

      pestanas: [


        // ---------------------------------------------------
        // CONTRALORÍA SOCIAL
        // ---------------------------------------------------

        {
          id: 'contraloria',

          nombre: 'CONTRALORÍA SOCIAL',

          tipo: 'pdf',

          pdf:
            'assets/vinculacion/QUE-ES-CS-2024.pdf'
        },


        // ---------------------------------------------------
        // DOCUMENTOS NORMATIVOS
        // ---------------------------------------------------

        {
          id: 'documentos',

          nombre: 'DOCUMENTOS NORMATIVOS',

          tipo: 'documentos',

          secciones: [

            {
              titulo: 'Documentos Normativos',

              documentos: [

                {
                  nombre: 'Lineamientos',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/1_Lineamientos_CS_28-10_2016.pdf'
                },

                {
                  nombre: 'Esquema U006',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/2-Esquema-U006-TecNM.pdf'
                },

                {
                  nombre: 'Guía Operativa U006',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/3-Guía-Operativa-U006-TecNM.pdf'
                },

                {
                  nombre: 'Modelo 4 PATCS',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/4-PATCS-U006-TecNM-Ejecutoras-Metas-actualizadas.xlsx'
                },

                {
                  nombre: 'OF Validación U006',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/Oficio-de-Validación-de-Documentos-Normativos-Pp-U006.pdf'
                }

              ]
            },


            // ------------------------------------------------
            // FORMATOS DE LA GUÍA OPERATIVA
            // ------------------------------------------------

            {
              titulo: 'Formatos de la Guía Operativa',

              documentos: [

                {
                  nombre:
                    'Anexo 1 Acta constitución de CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-1-Acta-constitución-de-CCS-U006-2024-TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 2 Acta sustitución de CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-2Acta-sustitución-de-CCS-U006-2024-TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 3 Minuta Reunión CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-3-Minuta-Reunión-CCS-U006-2024-.TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 4 Informe Final del CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo4Informe-Final-del-CCS-U006-2024-TecNM.pdf'
                }

              ]
            }

          ]
        },


        // ---------------------------------------------------
        // INFORMES
        // ---------------------------------------------------

        {
          id: 'informes',

          nombre: 'INFORMES',

          tipo: 'vacio'
        },


        // ---------------------------------------------------
        // QUEJAS
        // ---------------------------------------------------

        {
          id: 'quejas',

          nombre:
            'QUEJAS, DENUNCIAS O IRREGULARIDADES',

          tipo: 'documentos',

          secciones: [

            {
              documentos: [

                {
                  nombre:
                    '1.-MECANISMOS PARA QUEJAS',

                  url:
                    'assets/miscelaneo/CS_ppu006/MECANISMO_DE_QUEJAS_2024.pdf'
                }

              ]
            }

          ]
        },


        // ---------------------------------------------------
        // MANUAL
        // ---------------------------------------------------

        {
          id: 'manual',

          nombre:
            'MANUAL DE OPERACIONES DEL SICS-INSTANCIAS EJECUTORAS 2024',

          tipo: 'vacio'
        },


        // ---------------------------------------------------
        // LOGOTIPO
        // ---------------------------------------------------

        {
          id: 'logo',

          nombre:
            'LOGOTIPO CONTRALORIA SOCIAL',

          tipo: 'documentos',

          secciones: [

            {
              documentos: [

                {
                  nombre:
                    '1. - Logotipo Contraloría Social',

                  url:
                    'assets/CSU006/logo-contraloria-socialf.pdf'
                }

              ]
            }

          ]
        }

      ]
    },


    // =======================================================
    // CS_S247_PRODEP
    // =======================================================

    {
      id: 's247',

      nombre:
        'CS_S247_PRODEP',

      titulo:
        'CONTRALORÍA SOCIAL 2025',

      responsable:
        'Gabriela Gutiérrez Hernández | Responsable de Contraloría Social y CS_s247',

      correo:
        'prodep@escarcega.tecnm.mx',

      logo:
        'assets/home_logos/logo_conta.jpg',

      pestanas: [


        // ---------------------------------------------------
        // PRODEP 2025
        // ---------------------------------------------------

        {
          id: 'prodep',

          nombre:
            'PRODEP2025',

          tipo: 'pdf',

          pdf:
            'assets/vinculacion/S247_2025.pdf'
        },


        // ---------------------------------------------------
        // CONTRALORÍA SOCIAL
        // ---------------------------------------------------

        {
          id: 'contraloria',

          nombre:
            'CONTRALORÍA SOCIAL',

          tipo: 'pdf',

          pdf:
            'assets/vinculacion/CS2025.pdf'
        },


        // ---------------------------------------------------
        // DOCUMENTOS NORMATIVOS
        // ---------------------------------------------------

        {
          id: 'documentos',

          nombre:
            'DOCUMENTOS NORMATIVOS',

          tipo: 'documentos',

          secciones: [

            {
              titulo:
                'Documentos Normativos',

              documentos: [

                {
                  nombre:
                    'Lineamientos',

                  url:
                    'assets/miscelaneo/CS_247/documentos_normativos/1-Lineamientos-2024-S247.pdf'
                },

                {
                  nombre:
                    'Esquema de Contraloría Social 2025',

                  url:
                    'assets/miscelaneo/CS_247/documentos_normativos/2-Esquema-S247.pdf'
                },

                {
                  nombre:
                    'Modelo Guía Operativa',

                  url:
                    'assets/miscelaneo/CS_247/documentos_normativos/S247-Modelo-3-Guia-O.pdf'
                },

                {
                  nombre:
                    'Modelo 4 PATCS',

                  url:
                    'assets/miscelaneo/CS_247/documentos_normativos/S247-2025-Modelo-4-PATCS.pdf'
                },

                {
                  nombre:
                    'OF Validación S247 2025',

                  url:
                    'assets/miscelaneo/CS_247/documentos_normativos/OF-DE-VALIDA-S247.pdf'
                }

              ]
            }

          ]
        },


        // ---------------------------------------------------
        // INFORMES
        // ---------------------------------------------------

        {
          id: 'informes',

          nombre:
            'INFORMES',

          tipo: 'documentos',

          secciones: [

            {
              documentos: [

                {
                  nombre:
                    '1. - S247 INFORME F PRODEP-TecNM-2024',

                  url:
                    'assets/miscelaneo/CS_247/INFORME-FINAL-I-N-2024.docx'
                }

              ]
            }

          ]
        },


        // ---------------------------------------------------
        // QUEJAS
        // ---------------------------------------------------

        {
          id: 'quejas',

          nombre:
            'QUEJAS',

          tipo: 'documentos',

          secciones: [

            {
              documentos: [

                {
                  nombre:
                    '1. - MECANISMOS PARA QUEJAS y DENUNCIAS 2025',

                  url:
                    'assets/miscelaneo/CS_247/MECANISMOS-DE-QUEJAS-Y-DENUNCIAS-S247-2025.pdf'
                }

              ]
            }

          ]
        },


        // ---------------------------------------------------
        // LOGOTIPO
        // ---------------------------------------------------

        {
          id: 'logo',

          nombre:
            'LOGOTIPO',

          tipo: 'documentos',

          secciones: [

            {
              documentos: [

                {
                  nombre:
                    '1. - Logotipo Guardianes del Gasto',

                  url:
                    'assets/miscelaneo/CS_247/LOGOS_GUARDIANES DEL GASTO_PNG_3.png'
                },

                {
                  nombre:
                    '2. - Logotipo Guardianes del Gasto',

                  url:
                    'assets/miscelaneo/CS_247/LOGOS_GUARDIANES DEL GASTO_PNG_2.png'
                }

              ]
            }

          ]
        }

      ]
    }

  ];


  // =========================================================
  // CONTRALORÍA ACTUAL
  // =========================================================

  get contraloriaActual(): Contraloria {

    return this.contralorias.find(

      contraloria =>
        contraloria.id === this.contraloriaSeleccionada

    ) ?? this.contralorias[0];

  }


  // =========================================================
  // PESTAÑA ACTUAL
  // =========================================================

  get pestanaActual(): Pestana | undefined {

    return this.contraloriaActual.pestanas.find(

      pestana =>
        pestana.id === this.tabSeleccionada

    );

  }


  // =========================================================
  // CAMBIAR CONTRALORÍA
  // =========================================================

  seleccionarContraloria(id: string): void {

    this.contraloriaSeleccionada = id;

    const contraloria =
      this.contralorias.find(

        item =>
          item.id === id

      );

    if (
      contraloria &&
      contraloria.pestanas.length > 0
    ) {

      this.tabSeleccionada =
        contraloria.pestanas[0].id;

    }

  }


  // =========================================================
  // CAMBIAR PESTAÑA
  // =========================================================

  seleccionarTab(id: string): void {

    this.tabSeleccionada = id;

  }


  // =========================================================
  // PDF SEGURO PARA IFRAME
  // =========================================================

  constructor(
    private sanitizer: DomSanitizer
  ) {}


  // =========================================================
  // CACHÉ DE PDF
  // =========================================================

  private pdfCache =
    new Map<string, SafeResourceUrl>();


  obtenerPdfSeguro(
    url: string | undefined
  ): SafeResourceUrl {

    const pdfUrl =
      url ?? '';


    if (!this.pdfCache.has(pdfUrl)) {

      this.pdfCache.set(

        pdfUrl,

        this.sanitizer
          .bypassSecurityTrustResourceUrl(pdfUrl)

      );

    }


    return this.pdfCache.get(pdfUrl)!;

  }

}