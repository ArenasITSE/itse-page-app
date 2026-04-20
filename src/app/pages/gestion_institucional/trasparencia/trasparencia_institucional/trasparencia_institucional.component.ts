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

  fraccionesArt74 = [
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
      num: 'XIII',
      texto: 'El domicilio de la Unidad de Transparencia, además de la dirección electrónica donde podrán recibirse las solicitudes para obtener la información. ',
      link: 'https://drive.google.com/embeddedfolderview?id=1xLUsNGFeGsM1G21C-yTTL5UshL3yCWEV#list'
    },
     {
      num: 'XIV',
      texto: 'Las convocatorias a concursos para ocupar cargos públicos y los resultados de los mismos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1JRXpTMhZrpYsfNtI4vdw59PK9jGnCp4U#list'
    },
     {
      num: 'XVI',
      texto: 'Las condiciones generales de trabajo, contratos o convenios que regulen las relaciones laborales del personal de base o de confianza, así como los recursos públicos económicos, en especie o donativos, que sean entregados a los sindicatos y ejerzan como recursos públicos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1zzhWN-uukNTIBqORz6KuFWm9XqkyHOyo#list'
    },
     {
      num: 'XVII',
      texto: 'La información curricular, desde el nivel de jefe de departamento o equivalente, hasta el titular del sujeto obligado, así como, en su caso, las sanciones administrativas de que haya sido objeto.',
      link: 'https://drive.google.com/embeddedfolderview?id=1JukkXLQDvqbGL0p9lMkNWjsTiU8opfXs#list'
    },
     {
      num: 'XVIII',
      texto: 'El listado de Servidores Públicos con sanciones administrativas definitivas, especificando la causa de sanción y la disposición.',
      link: 'https://drive.google.com/embeddedfolderview?id=1BXabWqYy88da_5iH7flNwEkcdx5NE9vr#list'
    },
     {
      num: 'XIX',
      texto: 'Los servicios que ofrecen señalando los requisitos para acceder a ellos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1j1xB-ibIYoORLND4zMo2q3Zq5Y1wuaBz#list'
    },
     {
      num: 'XX',
      texto: 'Los trámites, requisitos y formatos que ofrecen.',
      link: 'https://drive.google.com/embeddedfolderview?id=1j-S_qmNVfh7pdJQLB91yvZ5zu_zTHAyf#list'
    },
     {
      num: 'XXI',
      texto: 'La información financiera sobre el presupuesto asignado, así como los informes del ejercicio trimestral del gasto, en términos de la Ley General de Contabilidad Gubernamental y demás normatividad aplicable.',
      link: 'https://drive.google.com/embeddedfolderview?id=1WX2Me6_GnzEQmWxEJnePpALByMe6Jr2E#list'
    },
     {
      num: 'XXII',
      texto: 'La información relativa a la deuda pública, en términos de la normatividad aplicable.',
      link: 'https://drive.google.com/embeddedfolderview?id=121FI7TifqilcoJjZrYz3SGmLFh_sPbsD#list'
    },
     {
      num: 'XXIII',
      texto: 'Los montos destinados a gastos relativos a comunicación social y publicidad oficial desglosada por tipo de medio, proveedores, número de contrato y concepto o campaña.',
      link: 'https://drive.google.com/embeddedfolderview?id=1acHGDFxsTeTBotf4wyLczrVsr_ASUY8J#list'
    },
     {
      num: 'XXIV',
      texto: 'Los informes de resultados de las auditorías al ejercicio presupuestal de cada sujeto obligado que se realicen y, en su caso, las aclaraciones que correspondan',
      link: 'https://drive.google.com/embeddedfolderview?id=1RuJfZrYVRUbhUS__opU7QEiK4BGUTrhC#list'
    },
     {
      num: 'XXV',
      texto: 'El resultado de la dictaminación de los estados financieros',
      link: 'https://drive.google.com/embeddedfolderview?id=1zIErgO853hxv1kEH4O4d7IW8zUw-6vq_#list'
    },
     {
      num: 'XXVI',
      texto: 'Los montos, criterios, convocatorias y listado de personas físicas o morales a quienes, por cualquier motivo, se les asigne o permita usar recursos públicos o, en los términos de las disposiciones aplicables, realicen actos de autoridad. Asimismo, los informes que dichas personas les entreguen sobre el uso y destino de dichos recursos.',
      link: 'https://drive.google.com/embeddedfolderview?id=13tgN-j5jX62WQuwUmjgEbdfeqLc0YKko#list'
    },
     {
      num: 'XXVII',
      texto: 'Las concesiones, contratos, convenios, permisos, licencias o autorizaciones otorgados, especificando los titulares de aquéllos, debiendo publicarse su objeto, nombre o razón social del titular, vigencia, tipo, términos, condiciones, monto y modificaciones, así como si el procedimiento involucra el aprovechamiento de bienes, servicios y/o recursos públicos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1AA7ALy6SN_UYP48UvOHg2zP1-uUir6GG#list'
    },
    {
      num: 'XXVIII',
      texto: 'La información sobre los resultados sobre procedimientos de adjudicación directa, invitación restringida y licitación de cualquier naturaleza, incluyendo la Versión Pública del Expediente respectivo y de los contratos celebrados.',
      link: 'https://drive.google.com/embeddedfolderview?id=1ZwOHI39VE1GPKs7K91XUvTEUB5xPYMhJ#list'
    },
    {
      num: 'XXIX',
      texto: 'Los informes que por disposición legal generen los sujetos obligados. </a>',
      link: 'https://drive.google.com/embeddedfolderview?id=16MtSNYjTWhRDAVh8vLsYWKaR-8AZFU3B#list'
    },
    {
      num: 'XXX',
      texto: 'Las estadísticas que generen en cumplimiento de sus facultades, competencias o funciones con la mayor desagregación posible.',
      link: 'https://drive.google.com/embeddedfolderview?id=1Jh3aSHIoLR_-UyZIqkDqxmotVdq2MM8s#list'
    },
    {
      num: 'XXXI',
      texto: 'Informe de avances programáticos o presupuestales, balances generales y su estado financiero.',
      link: 'https://drive.google.com/embeddedfolderview?id=1sPuJhBrI-K40_cyCNfQ_HM7-oMw4679D#list'
    },
    {
      num: 'XXXII',
      texto: 'Padrón de proveedores y contratistas',
      link: 'https://drive.google.com/embeddedfolderview?id=1xcHiBaDAd2K1MSt8bm9FCkVll8tNl7ji#list'
    },
    {
      num: 'XXXIII',
      texto: 'Los convenios de coordinación de concertación con los sectores social y privado.',
      link: 'https://drive.google.com/embeddedfolderview?id=1FhwHIUnK9Us2i2uBemW2fYhJ0jqgi0zq#list'
    },
    {
      num: 'XXXIV',
      texto: 'El inventario de bienes muebles e inmuebles en posesión y propiedad.',
      link: 'https://drive.google.com/embeddedfolderview?id=1ja2xqCeq39Irvx7Xq1h_uV3r_HRSQ2hO#list'
    },
    {
      num: 'XXXV',
      texto: 'Las recomendaciones emitidas por los órganos públicos del Estado mexicano u organismos internacionales garantes de los derechos humanos, así como las acciones que han llevado a cabo para su atención.',
      link: 'https://drive.google.com/embeddedfolderview?id=1M6RAfgGrYflbDZEgOt6RpudlVPzuyPYD#list'
    },
    {
      num: 'XXXVI',
      texto: 'Las resoluciones y laudos que se emitan en procesos o procedimientos seguidos en forma de juicio.',
      link: 'https://drive.google.com/embeddedfolderview?id=1Vfg4Z69qYfQpLTLpQFi4s7zIbtPXFBJz#list'
    },
    {
      num: 'XXXVIII',
      texto: 'Los programas que ofrecen, incluyendo información sobre la población, objetivo y destino, así como los trámites, tiempos de respuesta, requisitos y formatos para acceder a los mismos.',
      link: 'https://drive.google.com/embeddedfolderview?id=1-60WvNrywhtypkQ4fKU-Tz3bQ7J4t8C0#list'
    },
    {
      num: 'XXXIX',
      texto: 'Las actas y resoluciones del Comité de Transparencia de los sujetos obligados.',
      link: 'https://drive.google.com/embeddedfolderview?id=1oXGmgtJ7RHJ0ldR4tHGHKPpWTd4YUl1h#list'
    },

    {
      num: 'XL',
      texto: 'Todas las evaluaciones y encuestas que hagan los sujetos obligados a programas financiados con recursos públicos',
      link: 'https://drive.google.com/embeddedfolderview?id=1DLb5o3QnM0nhL_IUydBi5r79MF5kLtmr#list'
    },

    {
      num: 'XLI',
      texto: 'Los estudios financiados con recursos públicos.',
      link: 'https://drive.google.com/embeddedfolderview?id=11tQj_ZRPNVnAUec8AlYABToRFuY7Fl_-#list'
    },

    {
      num: 'XLII',
      texto: 'El listado de jubilados y pensionados y el monto que reciben.',
      link: 'https://drive.google.com/embeddedfolderview?id=17bi77X_Sj0xwO0LfP9JHY_sQ8kWhUVL1#list'
    },

    {
      num: 'XLIII',
      texto: 'Los ingresos recibidos por cualquier concepto señalando el nombre de los responsables de recibirlos, administrarlos y ejercerlos, así como su destino, indicando el destino de cada uno de ellos.',
      link: 'https://drive.google.com/embeddedfolderview?id=17ibHwR9-wCXaqHo4nzGOxX-PYS1howR9#list'
    },

    {
      num: 'XLIV',
      texto: 'Donaciones hechas a terceros en dinero o en especie.',
      link: 'https://drive.google.com/embeddedfolderview?id=1CsA7Dlh3vm_MjqJ_ZbpGhTGkebktWLYF#list'
    },

    {
      num: 'XLV',
      texto: 'El catálogo de disposición y guía de archivo documental',
      link: 'https://drive.google.com/embeddedfolderview?id=1d1lOedNPnLHoEEQ6y3f_usqfwCvvoOAQ#list'
    },

    {
      num: 'XLVI',
      texto: 'Las actas de sesiones ordinarias y extraordinarias, así como las opiniones y recomendaciones que emitan, en su caso, los consejos consultivos (Artículo 47 de la LG)',
      link: 'https://drive.google.com/embeddedfolderview?id=1ynEgiEJ5ox3Ulfjs4kdM1TNBOQ1odn0T#list'
    },

    {
      num: 'XLVII',
      texto: 'Para efectos estadísticos, el listado de solicitudes a las empresas concesionarias de telecomunicaciones y proveedores de servicios o aplicaciones de Internet para la intervención de comunicaciones privadas, el acceso al registro de comunicaciones y la localización geográfica en tiempo real de equipos de comunicación, que contenga exclusivamente el objeto, el alcance temporal y los fundamentos legales del requerimiento, así como, en su caso, la mención de que cuenta con la autorización judicial correspondiente.',
      link: 'https://drive.google.com/embeddedfolderview?id=1eXqoLYySdR-EVsy3hBwVFrTpq59Ad5CL#list'
    },

    {
      num: 'XLVIII',
      texto: 'Cualquier otra información que sea de utilidad o se considere relevante, además de la que, con base en la información estadística, responda a las preguntas hechas con más frecuencia por el público',
      link: 'https://drive.google.com/embeddedfolderview?id=14B1bj_OumicAt0g5JP_NdNKwgigVJLrc#list'
    },
    {
      num: 'ÚLTIMA',
      texto: 'Los sujetos deberán informar a los Organismos garantes y verificar que se publiquen en la Plataforma Nacional, cuáles son los rubros que son aplicables a sus páginas de Internet, con el objeto de que éstos verifiquen y aprueben de forma fundada y motivada, la relación de la Fracciones Aplicables a cada sujeto Obligado.',
      link: 'https://drive.google.com/embeddedfolderview?id=17P7u1du8hh3rPTdUdzuZYWR8Ok0GCoGN#list'
    },

  ];

 // 🔥 ARTÍCULO 75 (SOLO 6 FRACCIONES)
  fraccionesArt75 = [
    {
      num: 'I',
      texto: 'Sexenal para el Poder Ejecutivo Federal. Las entidades federativas y el Gobierno de la Ciudad de México: cuando se decrete el Plan respectivo cada seis años; en caso de que el Congreso de la Unión realice observaciones para su ejecución, revisión o adecuación, se actualizará en marzo de cada año. Trianual para los municipios (Ayuntamientos), los cuales actualizarán el Plan Municipal de Desarrollo cada tres o cuatro años, dependiendo de la legislación local que corresponda.',
      link: 'https://drive.google.com/embeddedfolderview?id=1GZE8qunv8yubVn3xvs-W7VuHlRckdz9x#list'
    },
    {
      num: 'II',
      texto: 'El presupuesto de egresos y las fórmulas de distribución de los recursos otorgados.',
      link: 'https://drive.google.com/embeddedfolderview?id=1AWsWi6bWBElt1liQ5dOtpxUH_rJw9yEA#list'
    },
    {
      num: 'III',
      texto: 'Listado de Expropiaciones decretadas y ejecutadas.',
      link: 'https://drive.google.com/embeddedfolderview?id=1dxaa0zY9Z3zmO3HxomjulgeN46upmJNd#list'
    },
    {
      num: 'IV',
      texto: 'El nombre, denominación o razón social y clave del registro federal de los contribuyentes a los que se les hubiera cancelado o condonado algún crédito fiscal',
      link: 'https://drive.google.com/embeddedfolderview?id=1DXuD9sQyfzWYDsK7Sj7n0atpKFH64gQR#list'
    },
    {
      num: 'V',
      texto: 'Los nombres de las personas a quienes se les habilitó para ejercer como corredores y notarios públicos',
      link: 'https://drive.google.com/embeddedfolderview?id=1A3EHnofWB5WJpXUk2ssrz1cuVwnXDLZE#list'
    },
    {
      num: 'VI',
      texto: 'Las disposiciones administrativas, directamente o a través de la autoridad competente',
      link: 'https://drive.google.com/embeddedfolderview?id=1fYibe0e7hL6lJg9mwM0z8YheAYXqDjKd#list'
    }
  ];



  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}


  // 🔥 CAMBIAR TAB (RESETEA FRACCIÓN ABIERTA)
  setTab(tab: string) {
    this.tab = tab;
    this.fraccionAbierta = null;
  }

  // 🔥 ABRIR / CERRAR FRACCIÓN
  toggleFraccion(f: string) {
    this.fraccionAbierta = this.fraccionAbierta === f ? null : f;
  }

  // 🔥 EVITA ERROR DE ANGULAR CON IFRAME
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}