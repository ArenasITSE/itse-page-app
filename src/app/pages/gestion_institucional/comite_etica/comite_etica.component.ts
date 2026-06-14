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
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/cuarto trimestre/'
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
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2024/primer trimestre/'
            }
          ]
        },

        {
          nombre: 'Segundo Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/cuarto trimestre/'
            }
          ]
        }
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
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2023/primer trimestre/'
            }
          ]
        },

        {
          nombre: 'Segundo Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/segundo trimestre/'
            }
          ]
        },
        {
          nombre: 'Tercer Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/tercer trimestre/'
            }
          ]
        },
        {
          nombre: 'Cuarto Trimestre',
          abierto: false,

          archivos: [
            {
              nombre: 'archivo pdf',
              url: 'assets/CEPCI_ITSE/2025/cuarto trimestre/'
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
                nombre: 'Anexo 1.pdf',
                url: 'assets/CEPCI_ITSE/Anexos/Anexo 1.pdf'
              },
              {
                nombre: 'Anexo 2.pdf',
                url: 'assets/CEPCI_ITSE/Anexos/Anexo 2.pdf'
              }
            ]
          }
        ]
      }



  ];//data
}//export class