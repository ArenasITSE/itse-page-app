export type ConvocatoriaEstado = 'ABIERTA' | 'CERRADA';

export interface ConvocatoriaDocumento {
  label: string;
  url: string;
  kind?: 'pdf' | 'zip';
}

export interface ConvocatoriaGanador {
  nombre: string;
  programa: string;
}

export interface ConvocatoriaResultado {
  titulo: string;
  descripcion: string;
  documento?: ConvocatoriaDocumento;
  ganadores?: ConvocatoriaGanador[];
}

export interface ConvocatoriaItem {
  id: string;
  titulo: string;
  estado: ConvocatoriaEstado;
  fechaPublicacion: string;
  /** ISO date for sorting (YYYY-MM-DD) */
  fechaPublicacionIso: string;
  periodoRecepcion: string;
  departamento: string;
  descripcion: string;
  documentos: ConvocatoriaDocumento[];
  resultado?: ConvocatoriaResultado;
}

const ASSETS = 'https://convocatoriasitse.netlify.app/assets';

export const CONVOCATORIAS: ConvocatoriaItem[] = [
  {
    id: 'asociado-a-2026',
    titulo: 'Concurso de oposición para la promoción a Profesor Asociado A',
    estado: 'CERRADA',
    fechaPublicacion: '24 de abril de 2026',
    fechaPublicacionIso: '2026-04-24',
    periodoRecepcion: 'Del 24 al 29 de abril de 2026 (10:00 a 14:00 horas)',
    departamento: 'Dirección General / Departamento de Capital Humano',
    descripcion:
      'Se convoca al personal docente al concurso de oposición de promoción de categoría a PROFESOR ASOCIADO A. Esta convocatoria tiene el propósito de fortalecer la investigación, el desarrollo tecnológico y el impulso a la innovación.',
    documentos: [
      {
        label: 'Convocatoria',
        url: `${ASSETS}/CONCURSO_OPOSICION_ASOCIADO_A_1-3.pdf`,
      },
      {
        label: 'ANEXO I',
        url: `${ASSETS}/ANEXO_I_ASOCIADO_A.pdf`,
      },
      {
        label: 'ANEXO II',
        url: `${ASSETS}/ANEXO_II_ASOCIADO_A.pdf`,
      },
    ],
    resultado: {
      titulo: 'Dictamen del concurso',
      descripcion:
        'Consulta el documento oficial con la resolución emitida por la Comisión Dictaminadora.',
      documento: {
        label: 'Dictamen de la Comisión Dictaminadora',
        url: `${ASSETS}/DICTAMEN_DE_COMISION_DICTAMINADORA.pdf`,
      },
    },
  },
  {
    id: 'asociado-b-externo-2026',
    titulo: 'Concurso de oposición externo para Profesor Asociado B',
    estado: 'CERRADA',
    fechaPublicacion: '15 de mayo de 2026',
    fechaPublicacionIso: '2026-05-15',
    periodoRecepcion: '15 al 30 de mayo de 2026',
    departamento: 'Capital Humano',
    descripcion:
      'Se convoca al concurso de oposición para reclutamiento de personal docente de categoría a PROFESOR ASOCIADO B. Esta convocatoria tiene el propósito de fortalecer la investigación, el desarrollo tecnológico y el impulso a la innovación. Está dirigida a profesores que cuenten con al menos 3 años de experiencia laboral y que cuenten con posgrado en un área afín al programa educativo ofertado.',
    documentos: [
      {
        label: 'Convocatoria',
        url: `${ASSETS}/CONCURSO_EXTERNO_ASOCIADO_B_1-3.pdf`,
      },
      {
        label: 'ANEXO I',
        url: `${ASSETS}/ANEXO_I_ASOCIADO_B.pdf`,
      },
      {
        label: 'ANEXO II',
        url: `${ASSETS}/ANEXO_II_ASOCIADO_B.pdf`,
      },
    ],
    resultado: {
      titulo: 'Ganadores del concurso',
      descripcion:
        'Con base en el Procedimiento del SGI para el Reclutamiento, Selección y Contratación de Personal (ITSE-SGI-AD-PO-003) y en la convocatoria correspondiente, se comunica a los ganadores del proceso:',
      ganadores: [
        {
          nombre: 'Kevin Alejandro Avilés Betanzos',
          programa: 'Posgrado',
        },
        {
          nombre: 'Emmanuel de Jesús Chi Gutiérrez',
          programa: 'Ingeniería en Industrias Alimentarias',
        },
      ],
    },
  },
  {
    id: 'asociado-b-promocion-2026',
    titulo: 'Concurso de oposición para la promoción a Profesor Asociado “B”',
    estado: 'CERRADA',
    fechaPublicacion: '18 de marzo de 2026',
    fechaPublicacionIso: '2026-03-18',
    periodoRecepcion: 'Del 19 al 20 de marzo de 2026 (10:00 a 14:00 horas)',
    departamento:
      'Dirección General / Subdirección Académica de Investigación e Innovación',
    descripcion:
      'Se convoca al personal docente al concurso de oposición de promoción de categoría a PROFESOR ASOCIADO “B”, en relación al cumplimiento de los criterios de la evaluación docente establecidos por el Tecnológico Nacional de México. Esta convocatoria tiene el propósito fundamental de fortalecer la investigación, el desarrollo tecnológico y el impulso a la innovación en la institución. Está dirigida a profesores que cuenten con al menos 2 años de experiencia con contrato vigente en el modelo del Instituto Tecnológico Superior de Escárcega y que hayan obtenido el grado y cédula de Maestría en un área afín al programa educativo al que se encuentran adscritos.',
    documentos: [
      {
        label: 'Convocatoria',
        url: `${ASSETS}/CONCURSO%20OPOSICION%20PARA%20PROMOCION%20A%20PROFESOR%20ASOCIADO%20B.pdf`,
      },
      {
        label: 'Anexo',
        url: `${ASSETS}/ANEXO%20CONVOCATORIA%20PROMOCION%20ASOCIADO%20B.pdf`,
      },
    ],
    resultado: {
      titulo: 'Dictamen del concurso',
      descripcion:
        'Consulta el documento oficial con la resolución emitida por la Comisión Dictaminadora.',
      documento: {
        label: 'Dictamen de la Comisión Dictaminadora',
        url: `${ASSETS}/DICTAMEN%20DE%20COMISION%20DICTAMINADORA.pdf`,
      },
    },
  },
  {
    id: 'verano-delfin-2026',
    titulo:
      'Convocatoria del Verano de la Investigación Científica y Tecnológica del Pacífico 2026',
    estado: 'CERRADA',
    fechaPublicacion: '10 de marzo de 2026',
    fechaPublicacionIso: '2026-03-10',
    periodoRecepcion: 'Hasta el 13 de marzo de 2026',
    departamento: 'Subdirección Académica — Consejero Técnico del Programa Delfín',
    descripcion:
      'Este programa de movilidad estudiantil está dirigido a jóvenes a partir de sexto semestre con talento y vocación por la ciencia, humanidades, tecnología, innovación y la creación artística y cultural, quienes, gracias a la experiencia personal y académica adquirida, optan por integrar la investigación en su formación profesional y continuar con estudios de posgrado. El objetivo fundamental es contribuir a la formación de capital intelectual de alto nivel académico. Los estudiantes seleccionados se incorporarán a proyectos de investigación de su interés, bajo la asesoría de reconocidos investigadores, en una estancia académica de 7 (siete) semanas en Instituciones de Educación Superior o Centros de Investigación en los países que integran el Programa.',
    documentos: [
      {
        label: 'Convocatoria',
        url: `${ASSETS}/CONVOCATORIA%20VERANO%20DELFIN%202026.pdf`,
      },
    ],
  },
  {
    id: 'pedd-2026',
    titulo:
      'Estímulo al Desempeño del Personal Docente de los Institutos Tecnológicos Descentralizados 2026 (PEDD 2026)',
    estado: 'CERRADA',
    fechaPublicacion: '27 de febrero de 2026',
    fechaPublicacionIso: '2026-02-27',
    periodoRecepcion: '16 de marzo al 17 de abril de 2026',
    departamento:
      'Subdirección Académica de Investigación e Innovación / Departamento de Desarrollo Académico',
    descripcion:
      'El Tecnológico Nacional de México (TecNM), por medio de la Dirección de Institutos Tecnológicos Descentralizados, con la finalidad de impulsar y conocer las actividades sustantivas desarrolladas por el profesorado, convocan al profesorado del Instituto Tecnológico Superior de Escárcega que se encuentra actualmente desempeñando actividades de docencia, investigación y desarrollo tecnológico, vinculación y gestión académica, que cumpla con lo dispuesto en las Condiciones Específicas de trabajo de la institución, a participar en el Programa de Estímulo al Desempeño Docente de los Institutos Tecnológicos Descentralizados 2026 (PEDD 2026).',
    documentos: [
      {
        label: 'Convocatoria',
        url: `${ASSETS}/CONVOCATORIA_PEDD-2026.pdf`,
      },
      {
        label: 'Circular',
        url: `${ASSETS}/CIRCULAR_DEL_PEDD-2026.pdf`,
      },
      {
        label: 'Lineamientos PEDD 2026',
        url: `${ASSETS}/LINEAMIENTO_GENERAL_PEDD-2026.pdf`,
      },
      {
        label: 'Sistema de evaluación 2026',
        url: `${ASSETS}/SISTEMA_DE_EVALUACION_PEDD-2026.pdf`,
      },
      {
        label: 'Formatos',
        url: `${ASSETS}/FORMATOS_PEDD-2026.pdf`,
      },
      {
        label: 'Formatos PEDD 2026 (ZIP)',
        url: `${ASSETS}/Formatos.zip`,
        kind: 'zip',
      },
    ],
  },
];

export function convocatoriaMatches(item: ConvocatoriaItem, query: string): boolean {
  if (!query) {
    return true;
  }
  const haystack = [
    item.titulo,
    item.departamento,
    item.descripcion,
    item.periodoRecepcion,
    item.estado,
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}
