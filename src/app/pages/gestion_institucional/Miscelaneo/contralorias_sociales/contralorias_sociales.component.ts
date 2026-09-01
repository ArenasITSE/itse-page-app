import { Component } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';


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
// AÑO S247
// =========================================================

interface AnioS247 {
  id: string;
  nombre: string;

  responsable: string;
  cargo: string;
  correo: string;
  logo: string;

  pestanas: Pestana[];
}


// =========================================================
// CONTRALORÍA
// =========================================================

interface Contraloria {
  id: string;
  nombre: string;

  responsable?: string;
  cargo?: string;
  correo?: string;
  logo?: string;

  // Pestañas normales.
  // Se utilizan principalmente para Pp U006.
  pestanas?: Pestana[];

  // Años disponibles.
  // Se utiliza para Pp S247 PRODEP.
  anios?: AnioS247[];
}


@Component({
  selector: 'app-contralorias-sociales',
  standalone: true,
  templateUrl: './contralorias_sociales.component.html',
  styleUrls: ['./contralorias_sociales.component.css']
})
export class Contralorias_socialesComponent {


  // =========================================================
  // CONTRALORÍA PRINCIPAL SELECCIONADA
  // =========================================================

  contraloriaSeleccionada = 'ppu006';


  // =========================================================
  // AÑO S247 SELECCIONADO
  // =========================================================

  anioS247Seleccionado = 's247-2026';


  // =========================================================
  // PESTAÑA SELECCIONADA
  // =========================================================

  tabSeleccionada = 'contraloria';


  // =========================================================
  // CONTRALORÍAS PRINCIPALES
  // =========================================================

  contralorias: Contraloria[] = [

    // =======================================================
    // Pp U006
    // =======================================================

    {
      id: 'ppu006',

      nombre: 'Pp U006',

      responsable:
        'Gabriela Gutiérrez Hernández',

      cargo:
        'Responsable de Contraloría Social y CSU006',

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

          nombre: 'Contraloria Social',

          tipo: 'pdf',

          pdf:
            'assets/vinculacion/QUE-ES-CS-2024.pdf'
        },


        // ---------------------------------------------------
        // DOCUMENTOS NORMATIVOS
        // ---------------------------------------------------

        {
          id: 'documentos',

          nombre: 'Documentos Normativos',

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
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/3-Guia-Operativa-U006-TecNM.pdf'
                },

                {
                  nombre: 'Modelo 4 PATCS',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/4-PATCS-U006-TecNM-Ejecutoras-Metas-actualizadas.xlsx'
                },

                {
                  nombre: 'Oficio de Validación U006',

                  url:
                    'assets/miscelaneo/CS_ppu006/documentos_normativos/Oficio-de-Validacion-de-Documentos-Normativos-Pp-U006.pdf'
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
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-1-Acta-constitucion-de-CCS-U006-2024-TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 2 Acta sustitución de CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-2Acta-sustitucion-de-CCS-U006-2024-TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 3 Minuta Reunión CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-3-Minuta-Reunion-CCS-U006-2024-.TecNM.pdf'
                },

                {
                  nombre:
                    'Anexo 4 Informe Final del CCS U006 2024 TecNM',

                  url:
                    'assets/miscelaneo/CS_ppu006/formatos_guia_operativa/Anexo-4-Informe-Final-del-CCS-U006-2024-TecNM.pdf'
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

          nombre: 'Informes',

          tipo: 'vacio'
        },


        // ---------------------------------------------------
        // QUEJAS
        // ---------------------------------------------------

        {
          id: 'quejas',

          nombre:
            'Quejas y denuncias e Irregularidades',

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
            'Manual de operaciones SICS-Instancias ejecutoras 2024',

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
    // Pp S247 PRODEP
    // =======================================================

    {
      id: 's247',

      nombre:
        'Pp S247 PRODEP',


      // =====================================================
      // AÑOS S247
      // =====================================================

      anios: [

        // ===================================================
        // S247 2026
        // ===================================================

        {
          id: 's247-2026',

          nombre:
            'Pp S247 PRODEP_2026',

          responsable:
            'Gabriela Gutiérrez Hernández',

          cargo:
            'Responsable de Contraloría Social y S247 2026',

          correo:
            'prodep@escarcega.tecnm.mx',

          logo:
            'assets/miscelaneo/CS_S247_2026/logotipos 2026/LOGOS_GUARDIANES DEL GASTO_PNG_Mesa de trabajo 1 copia 3.png',

          pestanas: [

            // ------------------------------------------------
            // 1. ¿QUÉ ES EL S247 PRODEP 2026?
            // ------------------------------------------------

            {
              id: 'que-es-programa',

              nombre:
                'PRODEP',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2026/QUE ES EL S247 PRODEP 2026.pdf'
            },


            // ------------------------------------------------
            // 2. ¿QUÉ ES LA CONTRALORÍA SOCIAL 2026?
            // ------------------------------------------------

            {
              id: 'contraloria-social',

              nombre:
                'Contraloría Social',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2026/QUE ES LA CONTRALORIA SOCIAL 2026.pdf'
            },


            // ------------------------------------------------
            // 3. DOCUMENTOS NORMATIVOS
            // ------------------------------------------------

            {
              id: 'documentos',

              nombre:
                'Documentos Normativos S247 2026',

              tipo: 'documentos',

              secciones: [

                // =============================================
                // DOCUMENTOS NORMATIVOS
                // =============================================

                {
                  titulo:
                    'Documentos Normativos',

                  documentos: [

                    {
                      nombre:
                        '1-Lineamientos 2024 S247.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/1-Lineamientos 2024 S247.pdf'
                    },

                    {
                      nombre:
                        '2.- S247 Esquema de Contraloria Social 2026.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/2.- S247 Esquema de Contraloria Social 2026.pdf'
                    },

                    {
                      nombre:
                        '3.- S247 Actividades de seguimiento actual.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/3.- S247 Actividades de seguimiento actual.pdf'
                    },

                    {
                      nombre:
                        '4.- S247 OFICIO VALIDACION 2026.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/4.- S247 OFICIO VALIDACION 2026.pdf'
                    }

                  ]
                },


                // =============================================
                // FORMATOS DE GUÍA OPERATIVA
                // =============================================

                {
                  titulo:
                    'Formatos de Guía Operativa',

                  documentos: [

                    {
                      nombre:
                        'Anexo 1: S247 2026 Acta constitución de CCS 2026.docx',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/5.- S247 2026 Anexo 1 Acta constitucion de CCS.docx'
                    },

                    {
                      nombre:
                        'Anexo 2: S247 2026 Acta sustitución de CCS 2026.docx',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/6.- S247 2026 Anexo 2 Acta sustitucion de CCS.docx'
                    },

                    {
                      nombre:
                        'Anexo 3: S247 2026 Minuta de reunion de CCS 2026.docx',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/7.- S247 2026 Anexo 3 Minuta.docx'
                    },

                    {
                      nombre:
                        'Anexo 4: S247 2026 Informe del CCS.xlsx',

                      url:
                        'assets/miscelaneo/CS_S247_2026/documentos_normativos/8.- S247 2026 Anexo 4 Informe del CCS.xlsx'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 4. INFORME FINAL 2025
            // ------------------------------------------------

            {
              id: 'informes',

              nombre:
                'Informes',

              tipo: 'documentos',

              secciones: [

                {
                  titulo:
                    'Informe Final 2025',

                  documentos: [

                    {
                      nombre:
                        'Informe Final 2025',

                      url:
                        'assets/miscelaneo/CS_S247_2026/INFORME FINAL 2025/'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 5. QUEJAS Y DENUNCIAS
            // ------------------------------------------------

            {
              id: 'quejas',

              nombre:
                'Quejas y Denuncias',

              tipo: 'documentos',

              secciones: [

                {
                  titulo:
                    'Mecanismo de Quejas y Denuncias 2026',

                  documentos: [

                    {
                      nombre:
                        'MECANISMO DE QUEJAS y DENUNCIAS 2026',

                      url:
                        'assets/miscelaneo/CS_S247_2026/MECANISMO DE QUEJAS y DENUNCIAS 2026.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 6. LOGOTIPO
            // ------------------------------------------------

            {
              id: 'logo',

              nombre:
                'Logotipo de Contraloría Social 2026',

              tipo: 'documentos',

              secciones: [

                {
                  titulo:
                    'Logotipo Contraloría Social',

                  documentos: [

                    {
                      nombre:
                        'Logotipo 1 Contraloría Social 2026.png',

                      url:
                        'assets/miscelaneo/CS_S247_2026/logotipos 2026/LOGOS_GUARDIANES DEL GASTO_PNG_Mesa de trabajo 1 copia 2.png'
                    },

                    {
                      nombre:
                        'Logotipo 2 Contraloría Social 2026.png',

                      url:
                        'assets/miscelaneo/CS_S247_2026/logotipos 2026/LOGOS_GUARDIANES DEL GASTO_PNG_Mesa de trabajo 1 copia 3.png'
                    }

                  ]
                }

              ]
            }

          ]
        },


        // ===================================================
        // S247 2025
        // ===================================================

        {
          id: 's247-2025',

          nombre:
            'Pp S247 PRODEP_2025',

          responsable:
            'Gabriela Gutiérrez Hernández',

          cargo:
            'Responsable de Contraloría Social y S247 2025',

          correo:
            'prodep@escarcega.tecnm.mx',

          logo:
            'assets/miscelaneo/CS_S247_2025/Logotipos 2025/LOGOS_2025_1.png',

          pestanas: [

            // ------------------------------------------------
            // PRODEP 2025
            // ------------------------------------------------

            {
              id: 'prodep',

              nombre:
                'PRODEP',

              tipo: 'pdf',

              pdf:
                'assets/vinculacion/S247_2025.pdf'
            },


            // ------------------------------------------------
            // CONTRALORÍA SOCIAL
            // ------------------------------------------------

            {
              id: 'contraloria',

              nombre:
                'Contraloría Social',

              tipo: 'pdf',

              pdf:
                'assets/vinculacion/CS2025.pdf'
            },


            // ------------------------------------------------
            // DOCUMENTOS NORMATIVOS
            // ------------------------------------------------

            // ------------------------------------------------
// DOCUMENTOS NORMATIVOS
// ------------------------------------------------

    {
      id: 'documentos',

      nombre:
        'Documentos Normativos S247 2025',

      tipo: 'documentos',

      secciones: [

        // ==============================================
        // DOCUMENTOS NORMATIVOS
        // ==============================================

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
        },


    // ==============================================
    // FORMATOS DE GUÍA OPERATIVA
    // ==============================================

    {
      titulo:
        'Formatos de Guía Operativa',

      documentos: [

                    {
                      nombre:
                        'Anexo 1.- Acta de Constitución de Comité de Contraloría Social 2025',

                      url:
                        'assets/miscelaneo/CS_247/formatos_guia/Anexo 1.- Acta de Constitucion de Comite de Contraloria Social 2025.pdf'
                    },

                    {
                      nombre:
                        'Anexo 2.- Acta de Sustitución de Integrante de Comité de C.S. 2025',

                      url:
                        'assets/miscelaneo/CS_247/formatos_guia/Anexo 2.- Acta de Sustitucion de Integrante de Comite de C.S. 2025.pdf'
                    },

                    {
                      nombre:
                        'Anexo 3.- Minutas de reunión de Comité de Contraloría Social 2025',

                      url:
                        'assets/miscelaneo/CS_247/formatos_guia/Anexo 3.- Minutas de reunion de Comite de Contraloria Social 2025.pdf'
                    },

                    {
                      nombre:
                        'Anexo 4.- Informe de Comité de Contraloría Social 2025',

                      url:
                        'assets/miscelaneo/CS_247/formatos_guia/Anexo 4.- Informe de Comite de Contraloria Social 2025.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // INFORMES
            // ------------------------------------------------

            {
              id: 'informes',

              nombre:
                'Informes',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Anexo 4: Informe final PRODEP 2024',

                      url:
                        'assets/miscelaneo/CS_247/Informe final_Anexo 4_PRODEP 2024.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // QUEJAS
            // ------------------------------------------------

            {
              id: 'quejas',

              nombre:
                'Quejas y Denuncias',

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


            // ------------------------------------------------
            // LOGOTIPO
            // ------------------------------------------------

            {
              id: 'logo',

              nombre:
                'Logotipo de Contraloria Social 2026',

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
        },

                // ===================================================
        // S247 2024
        // ===================================================

        {
          id: 's247-2024',

          nombre:
            'Pp S247 PRODEP_2024',

          responsable:
            'Gabriela Gutiérrez Hernández',

          cargo:
            'Responsable de Contraloría Social y S247 2024',

          correo:
            'prodep@escarcega.tecnm.mx',

          logo:
            'assets/miscelaneo/CS_S247_2024/Logotipo 2024/logo_conta.jpg',

          pestanas: [

            // ------------------------------------------------
            // 1. PRODEP
            // ------------------------------------------------

            {
              id: 'prodep',

              nombre:
                'PRODEP',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2024/PRODEP 2024/INFORMACION S247-2024.pdf'
            },


            // ------------------------------------------------
            // 2. CONTRALORÍA SOCIAL
            // ------------------------------------------------

            {
              id: 'contraloria',

              nombre:
                'Contraloría Social',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2024/Contraloria 2024/QUE ES CS 2024.pdf'
            },


            // ------------------------------------------------
            // 3. DOCUMENTOS NORMATIVOS
            // ------------------------------------------------

            {
              id: 'documentos',

              nombre:
                'Documentos Normativos S247 2024',

              tipo: 'documentos',

              secciones: [

                // ============================================
                // DOCUMENTOS NORMATIVOS
                // ============================================

                {
                  titulo:
                    'Documentos Normativos',

                  documentos: [

                    {
                      nombre:
                        'Lineamientos 2024 S247.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/documentos formativos 2024/1.-Lineamientos 2024 S247.pdf'
                    },

                    {
                      nombre:
                        'Esquema de Contraloría Social 2024.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/documentos formativos 2024/2.- S247 2024 Modelo 2 Esquema.pdf'
                    },

                    {
                      nombre:
                        'Guía Operativa de Contraloría Social 2024.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/documentos formativos 2024/3.- S247 2024 Modelo 3 Guía Operativa.pdf'
                    },

                    {
                      nombre:
                        'Programa Anual de Trabajo de Contraloría Social “PATCS” 2024.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/documentos formativos 2024/4.- S247 2024 Modelo 4 PATCS-1.pdf'
                    },

                    {
                      nombre:
                        'Oficio de Validación de documentos normativos 2024.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/documentos formativos 2024/OF VALIDACION S247 2024.pdf'
                    }

                  ]
                },


                // ============================================
                // FORMATOS DE GUÍA OPERATIVA
                // ============================================

                {
                  titulo:
                    'Formatos de Guía Operativa',

                  documentos: [

                    {
                      nombre:
                        'Anexo 1.- Acta de Constitución de Comité de Contraloría Social 2024',

                      url:
                        'assets/miscelaneo/CS_S247_2024/formatos guia 2024/Anexo 1 Acta constitucion de CCS S247 2024.pdf'
                    },

                    {
                      nombre:
                        'Anexo 2.- Acta de Sustitución de Integrante de Comité de C.S. 2024',

                      url:
                        'assets/miscelaneo/CS_S247_2024/formatos guia 2024/Anexo 2 Acta sustitucion de CCS S247 2024.pdf'
                    },

                    {
                      nombre:
                        'Anexo 3.- Minutas de reunión de Comité de Contraloría Social 2024',

                      url:
                        'assets/miscelaneo/CS_S247_2024/formatos guia 2024/Anexo 3 Minuta Reunion CCS S247 2024.pdf'
                    },

                    {
                      nombre:
                        'Anexo 4.- Informe de Comité de Contraloría Social 2024',

                      url:
                        'assets/miscelaneo/CS_S247_2024/formatos guia 2024/Anexo 4 Informe Final del CCS S247 2024.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 4. INFORMES
            // ------------------------------------------------

            {
              id: 'informes',

              nombre:
                'Informes',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Informe Final S247 2024',

                      url:
                        'assets/miscelaneo/CS_S247_2024/Informes 2024/2.-INFORME FINAL S247 2023.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 5. QUEJAS Y DENUNCIAS
            // ------------------------------------------------

            {
              id: 'quejas',

              nombre:
                'Quejas, Denuncias e Irregularidades',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Mecanismo de Quejas y Denuncias 2024.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2024/Quejas 2024/MECANISMO DE QUEJAS 2024.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 6. LOGOTIPO
            // ------------------------------------------------

            {
              id: 'logo',

              nombre:
                'Logotipo de Contraloría Social 2024',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Logotipo Contraloría Social 2024.jpg',

                      url:
                        'assets/miscelaneo/CS_S247_2024/Logotipo 2024/logo_conta.jpg'
                    }

                  ]
                }

              ]
            }

          ]
        },

        // ===================================================
        // S247 2023
        // ===================================================

        {
          id: 's247-2023',

          nombre:
            'Pp S247 PRODEP_2023',

          responsable:
            'Gabriela Gutiérrez Hernández',

          cargo:
            'Responsable de Contraloría Social y S247 2023',

          correo:
            'prodep@escarcega.tecnm.mx',

          logo:
            'assets/miscelaneo/CS_S247_2023/logotipo 2023/logo contraloria socialf-01.png',

          pestanas: [

            // ------------------------------------------------
            // 1. PRODEP 2023
            // ------------------------------------------------

            {
              id: 'prodep',

              nombre:
                'PRODEP',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2023/PRODEP S247/1.- Informacion del Programa S-247.pdf'
            },


            // ------------------------------------------------
            // 2. CONTRALORÍA SOCIAL
            // ------------------------------------------------

            {
              id: 'contraloria',

              nombre:
                'CONTRALORÍA SOCIAL',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2023/contraloria 2023/2.- QUE ES CONTRALORIA SOCIAL.pdf'
            },


            // ------------------------------------------------
            // 3. DOCUMENTOS NORMATIVOS
            // ------------------------------------------------

            {
              id: 'documentos',

              nombre:
                'DOCUMENTOS NORMATIVOS S247 2023',

              tipo: 'documentos',

              secciones: [

                {
                  titulo:
                    'Documentos Normativos',

                  documentos: [

                    {
                      nombre:
                        '1.- Lineamientos S247 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/documentos normativos 2023/1.-Lineamientos_CS_28-10-2016, S247.pdf'
                    },

                    {
                      nombre:
                        '2.- Esquema de Contraloría Social 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/documentos normativos 2023/2.- ESQUEMA S247 PRODEP 2023.pdf'
                    },

                    {
                      nombre:
                        '3.- Guía Operativa de Contraloría Social 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/documentos normativos 2023/3.- GUIA OPERATIVA S247 PRODEP 2023.pdf'
                    },

                    {
                      nombre:
                        '4.- Programa Anual de Trabajo de Contraloría Social “PATCS” 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/documentos normativos 2023/4.- PATCS S247 PRODEP 2023.pdf'
                    },

                    {
                      nombre:
                        '5.- Oficio de Validación de documentos normativos 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/documentos normativos 2023/5.- OFICIO DE VALIDACION S247 2023.pdf'
                    }

                  ]
                },


                // --------------------------------------------
                // FORMATOS DE GUÍA OPERATIVA
                // --------------------------------------------

                {
                  titulo:
                    'Formatos de Guía Operativa',

                  documentos: [

                    {
                      nombre:
                        'Anexo 1.- Acta de Constitución del Comité de Contraloría Social 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/formatos guia 2023/Anexo 1 Acta Const.docx'
                    },

                    {
                      nombre:
                        'Anexo 2, Acta de Sustitución de Integrante (s) del Comité de C.S. 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/formatos guia 2023/Anexo 2 Acta de Sust.docx'
                    },

                    {
                      nombre:
                        'Anexo 3, Minuta de Reunión de Comité de Contraloría Social 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/formatos guia 2023/Anexo 3 Mint reunion.docx'
                    },

                    {
                      nombre:
                        'Anexo 4, Informe de Comité de Contraloría Social 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/formatos guia 2023/Anexo 4 Informe.xlsx'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 4. INFORMES
            // ------------------------------------------------

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
                        '1.- S247 INFORME F PRODEP-TecNM-2022',

                      url:
                        'assets/miscelaneo/CS_S247_2023/informes 2023/1.- S247 INFORME F PRODEP-TecNM-2022.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 5. QUEJAS Y DENUNCIAS
            // ------------------------------------------------

            {
              id: 'quejas',

              nombre:
                'Quejas, Denuncias e Irregularidades',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Mecanismo de Quejas y Denuncias 2023',

                      url:
                        'assets/miscelaneo/CS_S247_2023/quejas 2023/MECANISMOS PARA QUEJAS y DENUNCIAS 2023.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 6. LOGOTIPO
            // ------------------------------------------------

            {
              id: 'logo',

              nombre:
                'Manual de Operación del SICS-Instancias Ejecutoras 2023',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Logotipo Contraloría Social 2023.png',

                      url:
                        'assets/miscelaneo/CS_S247_2023/logotipo 2023/logo contraloria socialf-01.png'
                    }

                  ]
                }

              ]
            }

          ]
        },

        // ===================================================
        // S247 2022
        // ===================================================

        {
          id: 's247-2022',

          nombre:
            'Pp S247 PRODEP_2022',

          responsable:
            'Gabriela Gutiérrez Hernández',

          cargo:
            'Responsable de Contraloría Social y S247 2022',

          correo:
            'prodep@escarcega.tecnm.mx',

          logo:
            'assets/miscelaneo/CS_S247_2023/logotipo 2023/logo contraloria socialf-01.png',

          pestanas: [

            // ------------------------------------------------
            // 1. PRODEP 2022
            // ------------------------------------------------

            {
              id: 'prodep',

              nombre:
                'PRODEP',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2022/prodep 2022/1.- Informacion del Programa PRODEP.pdf'
            },


            // ------------------------------------------------
            // 2. CONTRALORÍA SOCIAL
            // ------------------------------------------------

            {
              id: 'contraloria',

              nombre:
                'CONTRALORÍA SOCIAL',

              tipo: 'pdf',

              pdf:
                'assets/miscelaneo/CS_S247_2022/contraloria 2022/2.- Contraloria Social 2022.pdf'
            },


            // ------------------------------------------------
            // 3. DOCUMENTOS NORMATIVOS
            // ------------------------------------------------

            {
              id: 'documentos',

              nombre:
                'DOCUMENTOS NORMATIVOS',

              tipo: 'documentos',

              secciones: [

                // ==============================================
                // DOCUMENTOS NORMATIVOS
                // ==============================================

                {
                  titulo:
                    'Documentos Normativos',

                  documentos: [

                    {
                      nombre:
                        '1.- Lineamientos CS 28-10-2016.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2022/documentos normativos 2022/1.- Lineamientos CS 28-10-2016.pdf'
                    },

                    {
                      nombre:
                        '2.- Esquema de Contraloría Social 2022.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2022/documentos normativos 2022/2.- Anexo I. Esquema CS S247.pdf'
                    },

                    {
                      nombre:
                        '3.- Programa Anual de Trabajo de Contraloría Social “PATCS” 2022',

                      url:
                        'assets/miscelaneo/CS_S247_2022/documentos normativos 2022/3.- Anexo VII. Programa A T PATCS.pdf'
                    },

                    {
                      nombre:
                        '4.- Guía Operativa de Contraloría Social 2022.pdf',

                      url:
                        'assets/miscelaneo/CS_S247_2022/documentos normativos 2022/4.- Anexo II. Guía OCS S247.pdf'
                    }

                  ]
                },


                // ==============================================
                // FORMATOS DE GUÍA OPERATIVA
                // ==============================================

                {
                  titulo:
                    'Formatos de Guía Operativa',

                  documentos: [

                    {
                      nombre:
                        'Anexo III.- Acta de Constitución del Comité de Contraloría Social',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo III. Acta de Constitucion del Comite de Contraloria Social S247.docx'
                    },

                    {
                      nombre:
                        ' Anexo IV.- Acta de Sustitución de Integrante (s) del Comité de C.S.',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo IV. Acta de sustitucion de integrante(s) del Comite.docx'
                    },

                    {
                      nombre:
                        'Anexo IX.- Programa Institucional de Trabajo PITCS 2022.',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo IX. Programa lnstitucional de Trabajo PITCS 2022.xlsx'
                    },

                    {
                      nombre:
                        'Anexo V.- Minuta de reunión de Contraloría Social',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo V. Minuta de Reunion del CS S247.docx'
                    },

                    {
                      nombre:
                        ' Anexo VI. - Informe de Comité de Contraloría Social 2022',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo VI. Informe del Comite de Contraloría Social 2022.xlsx'
                    },

                    {
                      nombre:
                        'Anexo VIII.- Quejas, Denuncias o Peticiones 2022',

                      url:
                        'assets/miscelaneo/CS_S247_2022/formatos guia 2022/Anexo VIII Quejas, Denuncias o Peticiones 2022.docx'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 4. INFORMES
            // ------------------------------------------------

            {
              id: 'quejas',

              nombre:
                'Quejas, Denuncias o Peticiones',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Mecanismo de Quejas y Denuncias 2022',

                      url:
                        'assets/miscelaneo/CS_S247_2022/quejas 2022/MECANISMO DE QUEJAS Y DENUNCIAS.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 5. QUEJAS Y DENUNCIAS
            // ------------------------------------------------

            {
              id: 'informes',

              nombre:
                'Informes Trimestrales',

              tipo: 'documentos',

              secciones: [

                {
                  documentos: [

                    {
                      nombre:
                        'Informe Final 2022',

                      url:
                        'assets/miscelaneo/CS_S247_2022/informe 2022/Informe CS S247_2022.pdf'
                    }

                  ]
                }

              ]
            },


            // ------------------------------------------------
            // 6. LOGOTIPO
            // ------------------------------------------------

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
                        'Logotipo Contraloría Social 2022',

                      url:
                        'assets/RUTA/2022/logotipos/LOGOTIPO-2022.png'
                    }

                  ]
                }

              ]
            }

          ]
        },

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
  // AÑO S247 ACTUAL
  // =========================================================

  get anioS247Actual(): AnioS247 | undefined {

    const contraloria = this.contraloriaActual;

    if (contraloria.id !== 's247') {
      return undefined;
    }

    return contraloria.anios?.find(
      anio =>
        anio.id === this.anioS247Seleccionado
    ) ?? contraloria.anios?.[0];

  }


  // =========================================================
  // PESTAÑAS ACTUALES
  // =========================================================

  get pestanasActuales(): Pestana[] {

    // -------------------------------------------------------
    // Pp S247 PRODEP
    // -------------------------------------------------------

    if (
      this.contraloriaActual.id === 's247'
    ) {

      return this.anioS247Actual?.pestanas ?? [];

    }


    // -------------------------------------------------------
    // Pp U006
    // -------------------------------------------------------

    return this.contraloriaActual.pestanas ?? [];

  }


  // =========================================================
  // PESTAÑA ACTUAL
  // =========================================================

  get pestanaActual(): Pestana | undefined {

    return this.pestanasActuales.find(
      pestana =>
        pestana.id === this.tabSeleccionada
    );

  }


  // =========================================================
  // CAMBIAR CONTRALORÍA PRINCIPAL
  // =========================================================

  seleccionarContraloria(id: string): void {

    this.contraloriaSeleccionada = id;


    // -------------------------------------------------------
    // Si entramos a S247, comenzamos siempre en 2026
    // -------------------------------------------------------

    if (id === 's247') {

      this.anioS247Seleccionado = 's247-2026';

    }


    // -------------------------------------------------------
    // Obtener las pestañas correspondientes
    // -------------------------------------------------------

    const pestanas = this.pestanasActuales;


    if (pestanas.length > 0) {

      this.tabSeleccionada =
        pestanas[0].id;

    }

  }


  // =========================================================
  // CAMBIAR AÑO S247
  // =========================================================

  seleccionarAnioS247(id: string): void {

    this.anioS247Seleccionado = id;


    const pestanas = this.pestanasActuales;


    if (pestanas.length > 0) {

      this.tabSeleccionada =
        pestanas[0].id;

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