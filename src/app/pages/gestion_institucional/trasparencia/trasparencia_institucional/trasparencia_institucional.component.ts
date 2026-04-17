import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trasparencia_institucional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trasparencia_institucional.component.html',
  styleUrls: ['./trasparencia_institucional.component.css']
})
export class Trasparencia_institucionalComponent implements OnInit {

  tab: string = 'art74';
  fraccionAbierta: string | null = null;

  fracciones = [
    {
      num: 'I',
      texto: 'El marco normativo aplicable al sujeto obligado, en el que deberá incluirse leyes, códigos, reglamentos, decretos de creación, manuales administrativos, reglas de operación, criterios, políticas, entre otros',
      link: 'https://drive.google.com/embeddedfolderview?id=15nD8BlFpLSXS6vUMjTg6FKMmOSLgR5L-#list'
    },
    {
      num: 'II',
      texto: ' Su estructura orgánica completa, en un formato que permita vincular cada parte de la estructura, las atribuciones y responsabilidades que le corresponden a cada servidor público, prestador de servicios profesionales o miembro de los sujetos obligados, de conformidad con las disposiciones aplicables',
      link: 'https://drive.google.com/embeddedfolderview?id=1GDPRbUwl6vEbM2PBREWCnmwqs6Az14r6#list'
    },
    {
      num: 'III',
      texto: 'Las facultades de cada Área.',
      link: 'https://drive.google.com/embeddedfolderview?id=1Fdgp_6Au4EJXCG_5H7qnp0D-eWOCJbKP#list'
    },
    {
      num: 'IV',
      texto: 'Las metas y objetivos de las Áreas de conformidad con sus programas operativos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1XpzDWwDyn-U6vEJhcmKplRMPRbqdp6xA#listt'
    },
    {
      num: 'V',
      texto:' Los indicadores relacionados con temas de interés público o trascendencia social que conforme a sus funciones, deban establecer.',
      link: 'https://drive.google.com/embeddedfolderview?id=13IAPqpJRpKnch1P27RvnhScEeD0O0TKv#list'
    },
    {
      num: 'VI',
      texto: 'Los indicadores que permitan rendir cuenta de sus objetivos y resultados.',
      link: 'https://drive.google.com/embeddedfolderview?id=1JG_1MuzdkBCzjUeqm_a9w3G-uwf11k3Q#list'
    },
     {
      num: 'VII',
      texto: 'El directorio de todos los Servidores Públicos, a partir del nivel de jefe de departamento o su equivalente, o de menor nivel, cuando se brinde atención al público; manejen o apliquen recursos públicos; realicen actos de autoridad o presten servicios profesionales bajo el régimen de confianza u honorarios y personal de base. El directorio deberá incluir, al menos el nombre, cargo o nombramiento asignado, nivel del puesto en la estructura orgánica, fecha de alta en el cargo, número telefónico, domicilio para recibir correspondencia y dirección de correo electrónico oficiales.',
      link: 'https://drive.google.com/embeddedfolderview?id=19S0z6OmmkUdUkrFMlEBZ8FwPcMq3gjvj#list'
    },
     {
      num: 'VIII',
      texto: 'La remuneración bruta y neta de todos los Servidores Públicos de base o de confianza, de todas las percepciones, incluyendo sueldos, prestaciones, gratificaciones, primas, comisiones, dietas, bonos, estímulos, ingresos y sistemas de compensación, señalando la periodicidad de dicha remuneración.',
      link: 'https://drive.google.com/embeddedfolderview?id=1nadtgRn97ZsMDJXo1QiEMicCpce15Oi5#list'
    },
     {
      num: 'IX',
      texto: 'Los gastos de representación y viáticos, así como el objeto e informe de comisión correspondiente.',
      link: 'https://drive.google.com/embeddedfolderview?id=1DXwIz1PHcngCojd6kcsVXTEWcnGDexge#list'
    },
     {
      num: 'X',
      texto: 'El número total de las plazas y del personal de base y confianza, especificando el total de las vacantes, por nivel de puesto, para cada unidad administrativa..',
      link: 'https://drive.google.com/embeddedfolderview?id=1lDxM2JlCCLSlNEy50IwZezO9gqJSZZY_#list'
    },
     {
      num: 'XI',
      texto: 'Las contrataciones de servicios profesionales por honorarios, señalando los nombres de los prestadores de servicios, los servicios contratados, el monto de los honorarios y el periodo de contratación..',
      link: 'https://drive.google.com/embeddedfolderview?id=13PZ8g3bVqtrKHu47_ga2LAtsOm10yN9h#list'
    },
     {
      num: 'XII',
      texto: 'La información en Versión Pública de las declaraciones patrimoniales de los Servidores Públicos que así lo determinen, en los sistemas habilitados para ello, de acuerdo a la normatividad aplicable.  ',
      link: 'https://drive.google.com/embeddedfolderview?id=1TZIaLmp_ogsbFj2QszTqpoDqqYLP4AtW#list'
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },
     {
      num: 'XII',
      texto: ' ',
      link: ' '
    },


    
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  // 🔥 ABRIR / CERRAR FRACCIÓN
  toggleFraccion(f: string) {
    this.fraccionAbierta = this.fraccionAbierta === f ? null : f;
  }

  // 🔥 EVITA ERROR DE ANGULAR CON IFRAME
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}