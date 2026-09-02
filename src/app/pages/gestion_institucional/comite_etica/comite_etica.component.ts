import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comite_etica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comite_etica.component.html',
  styleUrls: ['./comite_etica.component.css']
})
export class Comite_eticaComponent {

  data = [
    {
      anio: '2025',
      abierto: false,

      trimestres: [
        {
          nombre: 'Primer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '7. Formato Primer Contacto.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/7. Formato Primer Contacto.pdf'
            },
            {
              nombre: 'Acta primera sesión.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Acta primera sesión.pdf'
            },
            {
              nombre: 'Calendario Anual de Sesiones 2025.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Calendario Anual de Sesiones 2025.pdf'
            },
            {
              nombre: 'Directorio Integrantes del Comite 2025.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Directorio Integrantes del Comite 2025.pdf'
            },
            {
              nombre: 'Indicadores de Cumplimiento.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Indicadores de Cumplimiento.pdf'
            },
            {
              nombre: 'Informe de Denuncias.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Informe de Denuncias.pdf'
            },
            {
              nombre: 'Organigrama Integrantes del Comite 2025.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Organigrama Integrantes del Comite 2025.pdf'
            },
            {
              nombre: 'PAT2025.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/PAT2025.pdf'
            },
            {
              nombre: 'POSICIONAMIENTO.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/POSICIONAMIENTO.pdf'
            },
            {
              nombre: 'Primer Informe.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/Primer Informe.pdf'
            },
            {
              nombre: 'PRONUNCIAMIENTO.pdf',
              url: 'assets/CEPCI_ITSE/2025/primer trimestre/PRONUNCIAMIENTO.pdf'
            }
          ]
        },

        {
          nombre: 'Segundo Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '10. Proced para presentar denuncias archivo .pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/10. Proced para presentar denuncias.pdf'
            },
            {
              nombre: '11. Protocolo de Atención a Denuncias.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/11. Protocolo de Atención a Denuncias.pdf'
            },
            {
              nombre: 'Acta de Ratificacion del comite.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Acta de Ratificacion del comite.pdf'
            },
            {
              nombre: 'Acta instalación.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Acta instalación.pdf'
            },
            {
              nombre: 'Acuerdo de Confidencialidad.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Acuerdo de Confidencialidad.pdf'
            },
            {
              nombre: 'Carta compromiso.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Carta compromiso.pdf'
            },
            {
              nombre: 'Código de Conducta.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Código de Conducta.pdf'
            },
            {
              nombre: 'Segunda Sesión Ordinaria.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Segunda Sesión Ordinaria.pdf'
            },
            {
              nombre: 'Segundo Informe de no denuncias.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Segundo Informe de no denuncias.pdf'
            },
            {
              nombre: 'Segundo Informe Trimestral.pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/Segundo Informe Trimestral.pdf'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'Acta de la Tercera Sesión Ordinaria.pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/Acta de la Tercera Sesión Ordinaria.pdf'
            },
            {
              nombre: 'Oficio de no denuncias.pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/Oficio de no denuncias.pdf'
            },
            {
              nombre: 'Tercer Informe de Actividades.pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/Tercer Informe de Actividades.pdf'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'Oficio de no denuncias.pdf',
              url: 'assets/CEPCI_ITSE/2025/cuarto trimestre/Oficio de no denuncias.pdf'
            }
          ]
        }
      ]
    },//año2025

    {
      anio: '2024',
      abierto: false,

      trimestres: [
        {
          nombre: 'Primer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '1.1 PRIMER INFORME TRIMESTRAL ACTIVIDADES  DEL CEPCI 2024.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/1.1 PRIMER INFORME TRIMESTRAL ACTIVIDADES  DEL CEPCI 2024.PDF'
            },
            {
              nombre: '1.2 PROGRAMA ANUAL DE TRABAJO 2024 CEPCI.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/1.2 PROGRAMA ANUAL DE TRABAJO 2024 CEPCI.PDF'
            },
            {
              nombre: '1.3 CALENDARIO ANUAL DE SESIONES ORDINARIAS DEL CEPCI2024.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/1.3 CALENDARIO ANUAL DE SESIONES ORDINARIAS DEL CEPCI2024.PDF'
            },
            {
              nombre: '1.4 ORGANIGRAMA DEL COMITE DE ETICA 2024.pdf',
              url: 'assets/CEPCI_ITSE/2024/1/1.4 ORGANIGRAMA DEL COMITE DE ETICA 2024.pdf'
            },
            {
              nombre: '1.5 DIRECTORIO DE INTEGRANTES DEL CEPCI 2024.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/1.5 DIRECTORIO DE INTEGRANTES DEL CEPCI 2024.PDF'
            },
            {
              nombre: '1.6 FORMATO DE PRIMER CONTACTO EN CASOS DE HOSTIGAMIENTO Y ACOSO SEXUAL 2024.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/1.6 FORMATO DE PRIMER CONTACTO EN CASOS DE HOSTIGAMIENTO Y ACOSO SEXUAL 2024.PDF'
            },
            {
              nombre: '2.1 ACTA _PRIMERA_SESIÓN _ORDINARIA 2024 CEPCI.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/2.1ACTA _PRIMERA_SESIÓN _ORDINARIA 2024 CEPCI.PDF'
            },
            {
              nombre: '2.2 LISTA DE ASISTENCIA DE INTEGRANTES DEL COMITE ETICA.pdf',
              url: 'assets/CEPCI_ITSE/2024/1/2.2 LISTA DE ASISTENCIA DE INTEGRANTES DEL COMITE ETICA.pdf'
            },
            {
              nombre: '2.3 INDICADORES DE CUMPLIMIENTO A LOS CODIGOS DE ETICA Y CONDUCTA.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/2.3 INDICADORES DE CUMPLIMIENTO A LOS CODIGOS DE ETICA Y CONDUCTA.PDF'
            },
            {
              nombre: '2.4 OFICIO DE LA 1RA REUNION ORDINARIA 2024 CEPCI.PDF',
              url: 'assets/CEPCI_ITSE/2024/1/2.4 OFICIO DE LA 1RA REUNION ORDINARIA 2024 CEPCI.PDF'
            }
          ]
        },

        {
          nombre: 'Segundo Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'ACTA DE LA 2DA SESION ORDINARIA CEPCI.pdf',
              url: 'assets/CEPCI_ITSE/2024/2/ACTA DE LA 2DA SESION ORDINARIA CEPCI.PDF'
            },
            {
              nombre: 'INVITACION 2DA SESION ORDINARIA.pdf',
              url: 'assets/CEPCI_ITSE/2024/2/INVITACION 2DA SESION ORDINARIA.PDF'
            },
            {
              nombre: 'LISTA DE ASISTENCIA  2 SESION ORDINARIA CEPCI.PDF',
              url: 'assets/CEPCI_ITSE/2024/2/LISTA DE ASISTENCIA  2 SESION ORDINARIA CEPCI.PDF'
            },
            {
              nombre: 'SEGUNDO INFORME TRIMESTRAL DEL COMITE DE ETICA.PDF',
              url: 'assets/CEPCI_ITSE/2024/2/SEGUNDO INFORME TRIMESTRAL DEL COMITE DE ETICA.PDF'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'Acta Tercera Reunión.pdf',
              url: 'assets/CEPCI_ITSE/2024/3/Acta Tercera Reunión.pdf'
            },
            {
              nombre: 'Informe Trimestral de Actividades.pdf',
              url: 'assets/CEPCI_ITSE/2024/3/Informe Trimestral de Actividades.pdf'
            },
            {
              nombre: 'Lista de Asistencia Tercera Sesión.pdf',
              url: 'assets/CEPCI_ITSE/2024/3/Lista de Asistencia Tercera Sesión.pdf'
            },
            {
              nombre: 'Tercera Reunión Invitación.pdf',
              url: 'assets/CEPCI_ITSE/2024/3/Tercera Reunión Invitación.pdf'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'Acta Cuarta Sesión.pdf',
              url: 'assets/CEPCI_ITSE/2024/4/Acta Cuarta Sesión.pdf'
            },
            {
              nombre: 'Cuarto Informe de Actividades.pdf',
              url: 'assets/CEPCI_ITSE/2024/4/Cuarto Informe de Actividades.pdf'
            },
            {
              nombre: 'Invitación Cuarta Sesión.pdf',
              url: 'assets/CEPCI_ITSE/2024/4/Invitación Cuarta Sesión.pdf'
            },
            {
              nombre: 'Lista de Asistencia Cuarta Sesión.pdf',
              url: 'assets/CEPCI_ITSE/2024/4/Lista de Asistencia Cuarta Sesión.pdf'
            }

            
          ]
        },
        {
          nombre: 'Anexos',
          abierto: false,

          archivos: [
            {
              nombre: '5.5.-CÓDIGO DE CONDUCTA ACTUALIZADO ENERO 2024.pdf',
              url: 'assets/CEPCI_ITSE/2024/5.5.-CÓDIGO DE CONDUCTA ACTUALIZADO ENERO 2024.pdf'
            },
            {
              nombre: 'Directorio Integrantes del Comite.pdf',
              url: 'assets/CEPCI_ITSE/2024/Directorio Integrantes del Comite.pdf'
            },
            {
              nombre: 'Organigrama Integrantes del Comite dIC.pdf',
              url: 'assets/CEPCI_ITSE/2024/Organigrama Integrantes del Comite dIC.pdf'
            }
          ]
        },
      ]
    }, //año2024

    {
      anio: '2023',
      abierto: false,

      trimestres: [
        {
          nombre: 'Primer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '2.-ACTA DE SESION 1RA SESION EXTRAORDINARIA.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.-ACTA DE SESION 1RA SESION EXTRAORDINARIA.PDF'
            },
            {
              nombre: '2.1-ORDEN DEL DIA.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.1-ORDEN DEL DIA.PDF'
            },
            {
              nombre: '2.2-LISTA DE ASISTENCIA.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.2-LISTA DE ASISTENCIA.PDF'
            },
            {
              nombre: '2.3.-INDICADORES DE CUMPLIMIENTO 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.3.-INDICADORES DE CUMPLIMIENTO 2023.PDF'
            },
            {
              nombre: '2.4.-NOMBRAMIENTO  Y CARTA COMPROMISO DE SUPLENTE- CONSEJERA.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.4.-NOMBRAMIENTO  Y CARTA COMPROMISO DE SUPLENTE- CONSEJERA.PDF'
            },
            {
              nombre: '2.5.-NOMBRAMIENTO Y CARTA COMPROMISO CONSEJERA.PDF',
              url: 'assets/CEPCI_ITSE/2023/2/2.5.-NOMBRAMIENTO Y CARTA COMPROMISO CONSEJERA.PDF'
            }
          ]
        },

        {
          nombre: 'Segundo Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '3.-ACTA DE SEGUNDA SESION ORDINARIA 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.-ACTA DE SEGUNDA SESION ORDINARIA 2023.pdf'
            },
            {
              nombre: '3.1.-ORDEN DEL DIA SEGUNDA SESION 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.1.-ORDEN DEL DIA SEGUNDA SESION 2023.pdf'
            },
            {
              nombre: '3.2. LISTA DE ASISTENCIA.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.2. LISTA DE ASISTENCIA.pdf'
            },
            {
              nombre: '3.3.-ACUERDO DE CONFIDENCIALIDAD.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.3.-ACUERDO DE CONFIDENCIALIDAD.pdf'
            },
            {
              nombre: '3.4.-CODIGO DE ETICA 2023 POE 4 MAYO 2023 SEGUNDA SECCION FIRMADO.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.4.-CODIGO DE ETICA 2023   POE 4 MAYO 2023 SEGUNDA SECCION FIRMADO.pdf'
            },
            {
              nombre: '3.5.-PROCEDIMIENTO PARA PRESENTAR DENUNCIAS  ACTUALIZADO 18 DE AGOSTO 23.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.5.-PROCEDIMIENTO PARA PRESENTAR DENUNCIAS  ACTUALIZADO 18 DE AGOSTO 23.pdf'
            },
            {
              nombre: '3.6.-PROTOCOLO PARA LA ATENCION DE DENUNCIAS  RATIFICADO 18 DE AGOSTO 23.pdf',
              url: 'assets/CEPCI_ITSE/2023/3/3.6.-PROTOCOLO PARA LA ATENCION DE DENUNCIAS  RATIFICADO 18 DE AGOSTO 23.pdf'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '4.-Lista de asistencia y Acta de tercera sesión Ordinaria.pdf',
              url: 'assets/CEPCI_ITSE/2023/4/4.-Lista de asistencia y Acta de tercera sesión Ordinaria.PDF'
            },
            {
              nombre: '4.1 Orden del día de la tercera reunión 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/4/4.1 Orden del día de la tercera reunión 2023.pdf'
            },
            {
              nombre: '4.2 Tercer Informe de Denuncias 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/4/4.2 Tercer Informe de Denuncias 2023.pdf'
            },
            {
              nombre: '4.3 Informe de actividades del tercer trimestre 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/4/4.3Informe de actividades del tercer trimestre 2023.PDF'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: '5.1.-INVITACIÓN Y LISTA DE ASISTENCIA 4TA SESIÓN.pdf',
              url: 'assets/CEPCI_ITSE/2023/5/5.1.-INVITACIÓN Y LISTA DE ASISTENCIA 4TA SESIÓN.pdf'
            },
            {
              nombre: '5.2.-ACTA DE LA CUARTA SESIÓN ORDINARIA 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/5/5.2.-ACTA DE LA CUARTA SESIÓN ORDINARIA 2023.pdf'
            },
            {
              nombre: '5.3.-CUARTO INFORME TRIMESTRAL 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/5/5.3.-CUARTO INFORME TRIMESTRAL 2023.pdf'
            },
            {
              nombre: '5.4.-INFORME ANUAL 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/5/5.4.-INFORME ANUAL 2023.pdf'
            },
            {
              nombre: '5.5.-CÓDIGO DE CONDUCTA ACTUALIZADO ENERO 2024.pdf',
              url: 'assets/CEPCI_ITSE/2023/5/5.5.-CÓDIGO DE CONDUCTA ACTUALIZADO ENERO 2024.pdf'
            }
          ]
        },
        {
          nombre: 'Anexos',
          abierto: false,

          archivos: [
            {
              nombre: 'CALENDARIO ANUAL DE SESIONES ORDINARIAS 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/CALENDARIO ANUAL DE SESIONES ORDINARIAS 2023.PDF'
            },
            {
              nombre: 'CODIGO DE CONDUCTA.pdf',
              url: 'assets/CEPCI_ITSE/2023/CODIGO DE CONDUCTA.pdf'
            },
            {
              nombre: 'CODIGO DE ETICA 2023 POE 4 MAYO 2023 SEGUNDA SECCION FIRMADO.pdf',
              url: 'assets/CEPCI_ITSE/2023/CODIGO DE ETICA 2023 POE 4 MAYO 2023 SEGUNDA SECCION FIRMADO.pdf'
            },
            {
              nombre: 'CODIGO DE ETICA.pdf',
              url: 'assets/CEPCI_ITSE/2023/CODIGO DE ETICA.pdf'
            },
            {
              nombre: 'CONVOCATORIA PERSONA CONSEJERA 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/CONVOCATORIA PERSONA CONSEJERA 2023.PDF'
            },
            {
              nombre: 'DIRECTORIO DE LOS INTEGRANTES DEL COMITE 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/DIRECTORIO DE LOS INTEGRANTES DEL COMITE 2023.PDF'
            },
            {
              nombre: 'FORMATO DE PRIMER CONTACTO 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/FORMATO DE PRIMER CONTACTO 2023.PDF'
            },
            {
              nombre: 'INFORME ANUAL DE ACTIVIDADES 2022.PDF',
              url: 'assets/CEPCI_ITSE/2023/INFORME ANUAL DE ACTIVIDADES 2022.PDF'
            },
            {
              nombre: 'ORGANIGRAMA DEL COMITE DE ETICA ITSE 2023.PDF',
              url: 'assets/CEPCI_ITSE/2023/ORGANIGRAMA DEL COMITE DE ETICA ITSE 2023.PDF'
            },
            {
              nombre: 'PROCEDIMIENTO Y FORMATOS PARA DENUNCIAS.rar',
              url: 'assets/CEPCI_ITSE/2023/PROCEDIMIENTO Y FORMATOS PARA DENUNCIAS.rar'
            },
            {
              nombre: 'PROCEDIMIENTO Y FORMATOS PARA DENUNCIAS.zip',
              url: 'assets/CEPCI_ITSE/2023/PROCEDIMIENTO Y FORMATOS PARA DENUNCIAS.zip'
            },
            {
              nombre: 'PROGRAMA ANUAL DE TRABAJO 2023.pdf',
              url: 'assets/CEPCI_ITSE/2023/PROGRAMA ANUAL DE TRABAJO 2023.pdf'
            },
            {
              nombre: 'PRONUNCIAMIENTO DE CERO TOLERANCIA.pdf',
              url: 'assets/CEPCI_ITSE/2023/PRONUNCIAMIENTO DE CERO TOLERANCIA.pdf'
            }
          ]
        }
      ]
    }, //año2023

    {
        anio: 'Anexos',
        abierto: false,

        trimestres: [
          {
            nombre: 'Documentos Generales',
            abierto: false,

            archivos: [
              {
                nombre: 'ACTUALIZACION DEL CODIGO DE CONDUCTA AL 12 DE SEPTIEMBRE- POR ACTUALIZACION DEL CODIGO DE ETICA.pdf',
                url: 'assets/CEPCI_ITSE/ACTUALIZACION DEL CODIGO DE CONDUCTA AL 12 DE SEPTIEMBRE- POR ACTUALIZACION DEL CODIGO DE ETICA.pdf'
              },
              {
                nombre: 'ANEXO 3 GUIA DE CUMPLIMIENTO DE LA LEY DE DISCIPLINA FINANCIERA DE LAS ENTIDADES FEDERATIVAS Y MUNICIPIOS.pdf',
                url: 'assets/CEPCI_ITSE/ANEXO 3 GUIA DE CUMPLIMIENTO DE LA LEY DE DISCIPLINA FINANCIERA DE LAS ENTIDADES FEDERATIVAS Y MUNICIPIOS.pdf'
              },
              {
                nombre: 'CODIGO DE CONDUCTA ITSE.ACTUALIZACION 10.2020.pdf',
                url: 'assets/CEPCI_ITSE/CODIGO DE CONDUCTA ITSE.ACTUALIZACION 10.2020.pdf'
              },
              {
                nombre: 'CODIGO DE ETICA SERVIDORES.pdf',
                url: 'assets/CEPCI_ITSE/CODIGO DE ETICA SERVIDORES.pdf'
              },
              {
                nombre: 'FORMATO DE DELACION(DENUNCIA) POR CONFLICTOS DE INTERES O ACTOS DE CORRUPCION.docx',
                url: 'assets/CEPCI_ITSE/FORMATO DE DELACION(DENUNCIA) POR CONFLICTOS DE INTERES O ACTOS DE CORRUPCION.docx'
              },
              {
                nombre: 'INFORME DEL PAT 2021.pdf.pdf',
                url: 'assets/CEPCI_ITSE/INFORME DEL PAT 2021.pdf'
              },
              {
                nombre: 'PAT 2022.pdf',
                url: 'assets/CEPCI_ITSE/PAT 2022.pdf'
              }
            ]
          }
        ]
      }



  ];//data
}//export class