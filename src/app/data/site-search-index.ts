/** Entrada del índice de búsqueda en sitio (equivalente a los registros de vista=Buscar en TecNM). */
export interface SiteSearchEntry {
  title: string;
  description: string;
  /**
   * Ruta interna (`/Inicio`) o URL absoluta (`https://...`).
   * Las absolutas se abren en nueva pestaña (plataformas externas del menú).
   */
  route: string;
  keywords: string[];
}

/** Rutas internas de la SPA empiezan con `/` (no `http` ni `assets/...`). */
export function isInternalAppRoute(route: string): boolean {
  return route.startsWith('/') && !route.startsWith('//');
}

export function isExternalSearchRoute(route: string): boolean {
  return !isInternalAppRoute(route);
}

/**
 * Catálogo estático de páginas internas.
 * Ampliar aquí al publicar secciones nuevas (sin backend).
 */
export const SITE_SEARCH_INDEX: readonly SiteSearchEntry[] = [
  {
    title: 'Inicio',
    description: 'Página principal del Instituto Tecnológico Superior de Escárcega.',
    route: '/Inicio',
    keywords: ['home', 'principal', 'itse', 'tecnm', 'escárcega', 'escarcega']
  },
  {
    title: 'Ingeniería en Inteligencia Artificial',
    description: 'Programa educativo de Ingeniería en Inteligencia Artificial.',
    route: '/programas-educativos/ing-ia',
    keywords: ['ia', 'inteligencia artificial', 'programa', 'carrera']
  },
  {
    title: 'Ingeniería en Sistemas Computacionales Virtual',
    description: 'Programa educativo en modalidad virtual.',
    route: '/programas-educativos/ing-sc-virtual',
    keywords: ['sistemas', 'virtual', 'computacionales', 'programa']
  },
  {
    title: 'Ingeniería en Animación Digital y Efectos Visuales',
    description: 'Programa educativo de animación digital y VFX.',
    route: '/programas-educativos/ing-animacion',
    keywords: ['animación', 'animacion', 'efectos', 'digital', 'vfx']
  },
  {
    title: 'Ingeniería en Energías Renovables',
    description: 'Programa educativo de energías renovables.',
    route: '/programas-educativos/ing-energias-renovables',
    keywords: ['energías', 'energias', 'renovables', 'sustentable']
  },
  {
    title: 'Ingeniería Ferroviaria',
    description: 'Programa educativo de Ingeniería Ferroviaria.',
    route: '/programas-educativos/ing-ferro',
    keywords: ['ferroviaria', 'tren', 'ferrocarril']
  },
  {
    title: 'Ingeniería en Industrias Alimentarias',
    description: 'Programa educativo de industrias alimentarias.',
    route: '/programas-educativos/ing-industrias-alianza',
    keywords: ['alimentos', 'alimentarias', 'industria']
  },
  {
    title: 'Ingeniería en Sistemas Computacionales',
    description: 'Programa educativo de Ingeniería en Sistemas Computacionales.',
    route: '/programas-educativos/ing-isc',
    keywords: ['sistemas', 'computacionales', 'isc', 'software']
  },
  {
    title: 'Licenciatura en Administración Modalidad Mixta',
    description: 'Licenciatura en Administración en modalidad mixta.',
    route: '/programas-educativos/lic-admin-mixta',
    keywords: ['administración', 'administracion', 'mixta']
  },
  {
    title: 'Licenciatura en Administración',
    description: 'Licenciatura en Administración.',
    route: '/programas-educativos/lic-admin',
    keywords: ['administración', 'administracion', 'licenciatura']
  },
  {
    title: 'Licenciatura en Gastronomía',
    description: 'Licenciatura en Gastronomía.',
    route: '/programas-educativos/lic-gastro',
    keywords: ['gastronomía', 'gastronomia', 'cocina']
  },
  {
    title: 'Licenciatura en Turismo',
    description: 'Licenciatura en Turismo.',
    route: '/programas-educativos/lic-turismo',
    keywords: ['turismo', 'hotelería', 'hoteleria']
  },
  {
    title: 'Contador Público',
    description: 'Programa educativo de Contador Público.',
    route: '/programas-educativos/contador-publico',
    keywords: ['contador', 'contaduría', 'contaduria', 'público', 'publico']
  },
  {
    title: 'Maestría en Economía Social y Solidaria',
    description: 'Posgrado en Economía Social y Solidaria.',
    route: 'https://maestriaeconomiasocialitse.netlify.app/',
    keywords: ['maestría', 'maestria', 'posgrado', 'economía', 'economia']
  },
  {
    title: 'Historia',
    description: 'Historia del Instituto Tecnológico Superior de Escárcega.',
    route: '/ITSESCARCEGA/historia',
    keywords: ['historia', 'origen', 'fundación', 'fundacion']
  },
  {
    title: 'Directorio',
    description: 'Directorio institucional del personal.',
    route: '/ITSESCARCEGA/directorio',
    keywords: ['directorio', 'personal', 'contacto', 'teléfono', 'telefono']
  },
  {
    title: 'Normatividad',
    description: 'Normatividad institucional.',
    route: '/ITSESCARCEGA/normativa',
    keywords: ['norma', 'normatividad', 'reglamento']
  },
  {
    title: 'Manual de Lineamientos TecNM',
    description: 'Manual de lineamientos del Tecnológico Nacional de México.',
    route: 'assets/home_logos/Manual_de_Lineamientos_TecNM.pdf',
    keywords: ['manual', 'lineamientos', 'tecnm', 'pdf']
  },
  {
    title: 'Convocatorias',
    description: 'Convocatorias institucionales vigentes.',
    route: '/ITSESCARCEGA/convocatoria',
    keywords: ['convocatoria', 'inscripción', 'inscripcion', 'admisión', 'admision']
  },
  {
    title: 'Organigrama',
    description: 'Organigrama institucional.',
    route: '/ITSESCARCEGA/organigrama',
    keywords: ['organigrama', 'estructura', 'organización', 'organizacion']
  },
  {
    title: 'Siaceb',
    description: 'Plataforma Siaceb.',
    route: '/Plataforma/siaceb',
    keywords: ['siaceb', 'plataforma']
  },
  {
    title: 'Tutorías',
    description: 'Sistema de tutorías.',
    route: '/Plataforma/tutorias',
    keywords: ['tutorías', 'tutorias', 'tutor']
  },
  {
    title: 'Moodle',
    description: 'Plataforma académica Moodle del campus.',
    route: 'https://acad.itsescarcega.edu.mx/login/index.php',
    keywords: ['moodle', 'aula', 'virtual', 'plataforma', 'académica', 'academica']
  },
  {
    title: 'SITSE',
    description: 'Sistema de Información del TecNM Escárcega.',
    route: 'https://app.itsescarcega.edu.mx/',
    keywords: ['sitse', 'plataforma', 'sistema']
  },
  {
    title: 'Sistema de Mantenimiento',
    description: 'Sistema de mantenimiento institucional.',
    route: 'https://ti.itsescarcega.edu.mx/mantenimiento-app/#/login',
    keywords: ['mantenimiento', 'plataforma', 'ti']
  },
  {
    title: 'Registro Biblioteca',
    description: 'Acceso al registro de biblioteca Digitalia.',
    route: 'https://tecnmmx.digitaliapublishing.com/',
    keywords: ['biblioteca', 'registro', 'digitalia']
  },
  {
    title: 'Elibro ITSE',
    description: 'Acceso a Elibro ITSE.',
    route: 'https://elibro.net/es/lc/itsescarcega/login_usuario/',
    keywords: ['elibro', 'libro', 'biblioteca']
  },
  {
    title: 'Certificados',
    description: 'Consulta de certificados institucionales.',
    route: 'https://itsecertificado.netlify.app/',
    keywords: ['certificados', 'constancia', 'título', 'titulo']
  },
  {
    title: 'Encuesta de Servicio',
    description: 'Encuesta de servicio institucional.',
    route: 'https://ti.itsescarcega.edu.mx/encuesta-app/#/login',
    keywords: ['encuesta', 'servicio']
  },
  {
    title: 'Centro de Cómputo',
    description: 'Servicios del Centro de Cómputo.',
    route: '/Servicios/centro-computo',
    keywords: ['cómputo', 'computo', 'laboratorio', 'servicios']
  },
  {
    title: 'Recursos Financieros',
    description: 'Información de Recursos Financieros.',
    route: '/Servicios/recursos-financieros',
    keywords: ['finanzas', 'pago', 'recursos', 'financieros']
  },
  {
    title: 'Centro de Información',
    description: 'Centro de Información / biblioteca.',
    route: '/Servicios/centro-informacion',
    keywords: ['biblioteca', 'información', 'informacion', 'centro']
  },
  {
    title: 'Servicios Escolares',
    description: 'Servicios escolares del instituto.',
    route: '/Servicios/servicios-escolares',
    keywords: ['escolares', 'trámites', 'tramites', 'constancia']
  },
  {
    title: 'Sistema de Gestión de Igualdad de Género',
    description: 'Sistema de gestión de igualdad de género y no discriminación.',
    route: '/sistema-gestion/sistema-ges-igualdad',
    keywords: ['igualdad', 'género', 'genero', 'discriminación', 'discriminacion']
  },
  {
    title: 'Sistema de Gestión Integral (SGI)',
    description: 'Sistema de Gestión Integral del instituto.',
    route: '/sistema-gestion/sistema-ges-integral',
    keywords: ['sgi', 'calidad', 'gestión', 'gestion']
  },
  {
    title: 'Protección Civil y Accesibilidad',
    description: 'Protección civil y accesibilidad.',
    route: '/sistema-gestion/proteccion-civil',
    keywords: ['protección', 'proteccion', 'civil', 'accesibilidad']
  },
  {
    title: 'Quejas y Denuncias',
    description: 'Canal de quejas y denuncias.',
    route: '/sistema-gestion/quejas-denuncias',
    keywords: ['queja', 'denuncia', 'reporte']
  },
  {
    title: 'Buzón Digital ITSE',
    description: 'Buzón digital de sugerencias.',
    route: 'https://itsebuzondiigital.000webhostapp.com',
    keywords: ['buzón', 'buzon', 'sugerencia', 'digital']
  },
  {
    title: 'Archivo',
    description: 'Archivo institucional.',
    route: '/gestion_institucional/archivo',
    keywords: ['archivo', 'documentos']
  },
  {
    title: 'Contabilidad Institucional',
    description: 'Información de contabilidad institucional.',
    route: '/gestion_institucional/contabilidad-institucional',
    keywords: ['contabilidad', 'finanzas']
  },
  {
    title: 'Accesibilidad',
    description: 'Información de accesibilidad institucional.',
    route: '/gestion_institucional/accesibilidad',
    keywords: ['accesibilidad', 'inclusión', 'inclusion']
  },
  {
    title: 'Comité de Ética',
    description: 'Comité de Ética institucional.',
    route: '/gestion_institucional/comite-etica',
    keywords: ['ética', 'etica', 'comité', 'comite']
  },
  {
    title: 'Vinculación',
    description: 'Área de vinculación institucional.',
    route: '/gestion_institucional/vinculacion',
    keywords: ['vinculación', 'vinculacion', 'empresa', 'residencia']
  },
  {
    title: 'Transparencia Institucional',
    description: 'Portal de transparencia institucional.',
    route: '/gestion_institucional/trasparencia-institucional',
    keywords: ['transparencia', 'obligaciones']
  },
  {
    title: 'Aviso de Privacidad',
    description: 'Aviso de privacidad del instituto.',
    route: '/gestion_institucional/aviso-privacidad',
    keywords: ['privacidad', 'datos', 'aviso']
  },
  {
    title: 'Index de Transparencia',
    description: 'Índice de transparencia.',
    route: '/gestion_institucional/index-trasparencia',
    keywords: ['índice', 'indice', 'transparencia']
  },
  {
    title: 'Informes de Transparencia',
    description: 'Informes de transparencia.',
    route: '/gestion_institucional/informes-trasparencia',
    keywords: ['informes', 'transparencia']
  },
  {
    title: 'CIIE',
    description: 'Centro de Incubación e Innovación Empresarial.',
    route: '/gestion_institucional/ciie',
    keywords: ['ciie', 'incubación', 'incubacion', 'innovación', 'innovacion']
  },
  {
    title: 'Indicadores CIA',
    description: 'Indicadores de la Comisión Interna de Administración.',
    route: '/gestion_institucional/indicadores-cia',
    keywords: ['indicadores', 'cia']
  },
  {
    title: 'Planeación',
    description: 'Planeación institucional.',
    route: '/gestion_institucional/planeacion',
    keywords: ['planeación', 'planeacion', 'plan']
  },
  {
    title: 'Contáctenos',
    description: 'Datos de contacto del instituto.',
    route: '/gestion_institucional/contactenos',
    keywords: ['contacto', 'correo', 'teléfono', 'telefono', 'ubicación', 'ubicacion']
  },
  {
    title: 'Rendición de Cuentas (IERC)',
    description: 'Rendición de cuentas institucional.',
    route: '/gestion_institucional/rendicion-cuentas',
    keywords: ['rendición', 'rendicion', 'cuentas', 'ierc']
  }
];
