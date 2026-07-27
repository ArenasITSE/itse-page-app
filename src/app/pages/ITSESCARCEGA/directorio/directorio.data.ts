export type DirectorioTeam =
  | 'root'
  | 'staff'
  | 'admin'
  | 'planeacion'
  | 'vinculacion'
  | 'academica';

export type DirectorioLevel = 'root' | 'staff' | 'sub' | 'dep';

export interface DirectorioNode {
  id: string;
  departamento: string;
  nombre: string;
  puesto: string;
  correo?: string;
  driveUrl?: string;
  level: DirectorioLevel;
  team: DirectorioTeam;
  children?: DirectorioNode[];
}

/** Jerarquía del Directorio General Institucional (colores por equipo). */
export const DIRECTORIO_ROOT: DirectorioNode = {
  id: 'dir-general',
  departamento: 'DIRECCIÓN GENERAL',
  nombre: 'DANY ALEJANDRO DZIB CAUICH',
  puesto: 'DIRECTOR GENERAL',
  correo: 'director@itsescarcega.edu.mx',
  level: 'root',
  team: 'root',
  children: [
    {
      id: 'div-general',
      departamento: 'DIVISIÓN (GENERAL)',
      nombre: 'LUIS RODOLFO BERNES ROMERO',
      puesto: 'JEFE DE DIVISIÓN',
      level: 'staff',
      team: 'staff',
    },
    {
      id: 'sub-admin',
      departamento: 'SUBDIRECCIÓN ADMINISTRATIVA',
      nombre: 'MARGARITA MAY CHAN',
      puesto: 'SUBDIRECTORA ADMINISTRATIVA',
      level: 'sub',
      team: 'admin',
      driveUrl:
        'https://drive.google.com/drive/folders/1fCh5BfS_aXWCo_45Zm6hidQ1Zy5KXRUk',
      children: [
        {
          id: 'dep-capital-humano',
          departamento: 'DEPARTAMENTO DE CAPITAL HUMANO',
          nombre: 'EPIFANIA DIAZ ALVAREZ',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'admin',
          driveUrl:
            'https://drive.google.com/drive/folders/166tVSOpcRAniqbCRI22DmCNR8uT46r0r',
        },
        {
          id: 'dep-finanzas',
          departamento: 'FINANZAS',
          nombre: 'LOURDES DIAZ ALVAREZ',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'admin',
          driveUrl:
            'https://drive.google.com/drive/folders/11pLrjXV8kPZEmj2HUyYjHrdjybsd3cZ7',
        },
        {
          id: 'dep-recursos-materiales',
          departamento: 'DEPARTAMENTO DE RECURSOS MATERIALES Y SERVICIOS',
          nombre: 'AUGUSTO ROMAN DZUL ROBALDINO',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'admin',
          driveUrl:
            'https://drive.google.com/drive/folders/1cZ_0FZLVcYpvCcTTe_S9GZquR8L9bbts',
        },
        {
          id: 'dep-mantenimiento',
          departamento: 'DEPARTAMENTO DE MANTENIMIENTO',
          nombre: 'EMETERIO JOSE SANCHEZ PONCIANO',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'admin',
          driveUrl:
            'https://drive.google.com/drive/folders/10yopMtz9fQ70nG7DlBjJoJfufPUItkUH',
        },
        {
          id: 'dep-computo',
          departamento: 'DEPARTAMENTO DE COMPUTO Y TECNOLOGIAS DE LA INFORMACION',
          nombre: 'ELISEO REFUGIO HERNANDEZ',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'admin',
          driveUrl:
            'https://drive.google.com/drive/folders/1CFrRIyp6qGg2jvBfW9_02fEEF2vozMbz',
        },
      ],
    },
    {
      id: 'sub-planeacion',
      departamento: 'SUBDIRECCIÓN DE PLANEACIÓN Y DESARROLLO',
      nombre: 'GABRIELA GRANADOS CÓRDOBA',
      puesto: 'SUBDIRECTORA DE PLANEACIÓN Y DESARROLLO',
      level: 'sub',
      team: 'planeacion',
      driveUrl:
        'https://drive.google.com/drive/folders/117fR6RNuxXZbxW0T8gTn2GePO35apSB1',
      children: [
        {
          id: 'dep-planeacion-eval',
          departamento: 'DEPARTAMENTO DE PLANEACIÓN Y EVALUACIÓN',
          nombre: 'HUGO ENRIQUE SÁNCHEZ',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'planeacion',
          driveUrl:
            'https://drive.google.com/drive/folders/1Vl1DC5U33sX4MrId5k24fV5kgJaWn0RY',
        },
        {
          id: 'dep-sistema-gestion',
          departamento: 'DEPARTAMENTO DE SISTEMA DE GESTIÓN',
          nombre: 'MARIANA DE LOS ANGELES FERRER YANH',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'planeacion',
          driveUrl:
            'https://drive.google.com/drive/folders/1fPKNso5P3S_yLdK34wONyYTP7-ph5wFg',
        },
        {
          id: 'dep-admin-escolar',
          departamento:
            'DEPARTAMENTO DE ADMINISTRACIÓN ESCOLAR Y APOYO A ESTUDIANTES',
          nombre: 'LIBNI ESTHER GONZALEZ POTENCIANO',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'planeacion',
          driveUrl:
            'https://drive.google.com/drive/folders/1ADtSM4u5JRCc2sb1HqJWQa_TkTzsWH0e',
        },
      ],
    },
    {
      id: 'sub-vinculacion',
      departamento: 'SUBDIRECCIÓN DE EXTENSIÓN Y VINCULACIÓN',
      nombre: 'JUAN CARLOS RIVERA TAPIA',
      puesto: 'SUBDIRECTOR DE EXTENSIÓN Y VINCULACIÓN',
      level: 'sub',
      team: 'vinculacion',
      driveUrl:
        'https://drive.google.com/drive/folders/1uXllQ7bP0zVAdarw4KAp23wCP-d1JyZN',
      children: [
        {
          id: 'dep-vinculacion',
          departamento: 'DEPARTAMENTO DE VINCULACIÓN E INTERCAMBIO ACADÉMICO',
          nombre: 'MARTIN DE LA CRUZ',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'vinculacion',
          driveUrl:
            'https://drive.google.com/drive/folders/10yfydNeMJ_oESewMQ_JAQ9q_rSjYtRZy',
        },
        {
          id: 'dep-cultura-deporte',
          departamento: 'DEPARTAMENTO DE PROMOCIÓN DE LA CULTURA Y EL DEPORTE',
          nombre: 'MARTHA DALILA FLORES ARIAS',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'vinculacion',
          driveUrl:
            'https://drive.google.com/drive/folders/1V30CeEWetK_sBXA5Te73oP--60bNh6R6',
        },
        {
          id: 'dep-desarrollo-emprendedor',
          departamento: 'DEPARTAMENTO DE DESARROLLO EMPRENDEDOR',
          nombre: 'JOSE DEL CARMEN CHI ALCOCER',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'vinculacion',
          driveUrl:
            'https://drive.google.com/drive/folders/1WwDFocuNcN9DOr_5wzIstvR5DjzDfX7o',
        },
        {
          id: 'dep-comunicacion',
          departamento: 'DEPARTAMENTO DE COMUNICACIÓN Y DIFUSIÓN',
          nombre: 'JUAN MANUEL NAAL ESPINOSA',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'vinculacion',
          driveUrl:
            'https://drive.google.com/drive/folders/10mOYa-q78abhraHj_7RKaHG19mvuotRX',
        },
      ],
    },
    {
      id: 'sub-academica',
      departamento: 'SUBDIRECCIÓN ACADÉMICA DE INVESTIGACIÓN E INNOVACIÓN',
      nombre: 'JOSÉ ALBERTO ALAVEZ GÓNGORA',
      puesto: 'SUBDIRECTOR ACADÉMICO',
      level: 'sub',
      team: 'academica',
      driveUrl:
        'https://drive.google.com/drive/folders/1c2I8kXi-4by-PU8nbhMc15acN3pGsrKM',
      children: [
        {
          id: 'div-isc',
          departamento: 'DIVISIÓN DE INGENIERÍA EN SISTEMAS COMPUTACIONALES',
          nombre: 'MANUEL DE ATOCHA BARRANCOS',
          puesto: 'JEFE DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1rZiru6vXqtzYTDVPfUtk3GecFtObL7Em',
        },
        {
          id: 'div-admin',
          departamento: 'DIVISIÓN DE LICENCIATURA EN ADMINISTRACIÓN',
          nombre: 'GENI DEL CARMEN GOMEZ XUL',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1zuhieBZBHLbK3fw81gaDi01whO_juBBv',
        },
        {
          id: 'div-ferro',
          departamento: 'DIVISIÓN DE INGENIERÍA FERROVIARIA',
          nombre: 'GARY GEOVANI UCAN DÍAZ',
          puesto: 'JEFE DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl: 'https://drive.google.com',
        },
        {
          id: 'div-industrias',
          departamento: 'DIVISIÓN DE INGENIERÍA EN INDUSTRIAS ALIMENTARIAS',
          nombre: 'YOLANDA DEL CARMEN ESTRELLA PÉREZ',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1-w_SvzwEEOfIl63bQTwC26iiHhbX0MF_',
        },
        {
          id: 'div-gastro',
          departamento: 'DIVISIÓN DE GASTRONOMÍA',
          nombre: 'ERIKA VIVIANA FERRER GOMEZ',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1uzOAoOnRYAy8rSR1WnZ5448HqWz4OxsY',
        },
        {
          id: 'div-energias',
          departamento: 'DIVISIÓN DE INGENIERÍA EN ENERGÍAS RENOVABLES',
          nombre: 'LAURA PATRICIA PEÑA YAM',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1eZeR4661rRi8NqNmQmo8WFysn1jXy1Wn',
        },
        {
          id: 'div-turismo',
          departamento: 'DIVISIÓN DE LICENCIATURA EN TURISMO',
          nombre: 'YAZMIN ESTRADA CHAN',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1dOs81yp-6pfC-l0enFfyEhoZEHO6q2x2',
        },
        {
          id: 'dep-desarrollo-academico',
          departamento: 'DEPARTAMENTO DE DESARROLLO ACADÉMICO',
          nombre: 'MIGUEL ANGEL MEJIA BAUTISTA',
          puesto: 'JEFE DE DEPARTAMENTO',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/12xa8-6KSN6j_kqhcpv7_zQodRubfB7Us',
        },
        {
          id: 'dep-posgrado',
          departamento: 'DEPARTAMENTO DE ESTUDIO DE POSGRADO E INVESTIGACIÓN',
          nombre: 'IVETTE STEPHANY PACHECO FARFAN',
          puesto: 'JEFA DE DEPARTAMENTO',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1OBIwGsce6cyHYt9R1DnxsN6u-NuVse7s',
        },
        {
          id: 'div-contador',
          departamento: 'DIVISIÓN DE CONTADOR PÚBLICO',
          nombre: 'ARACELI MAR LUNA',
          puesto: 'JEFA DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/10GbtmjL-xq6anfHWbomyYOVBDiW8t8wy',
        },
        {
          id: 'div-animacion',
          departamento:
            'DIVISIÓN DE INGENIERÍA EN ANIMACIÓN DIGITAL Y EFECTOS VISUALES',
          nombre: 'CARLOS ENRIQUE AVILA PEREZ',
          puesto: 'JEFE DE DIVISIÓN',
          level: 'dep',
          team: 'academica',
          driveUrl:
            'https://drive.google.com/drive/folders/1YmVTcs9WM-1-_audy3fEck4QJTshjNhS',
        },
      ],
    },
  ],
};

export function flattenDirectorio(
  node: DirectorioNode,
  depth = 0
): { node: DirectorioNode; depth: number }[] {
  const self = [{ node, depth }];
  const kids = (node.children ?? []).flatMap((child) =>
    flattenDirectorio(child, depth + 1)
  );
  return [...self, ...kids];
}

export function nodeMatches(node: DirectorioNode, query: string): boolean {
  if (!query) {
    return true;
  }
  const haystack = [
    node.departamento,
    node.nombre,
    node.puesto,
    node.correo ?? '',
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

/** Conserva nodos que coinciden o tienen descendientes que coinciden. */
export function filterDirectorioTree(
  node: DirectorioNode,
  query: string
): DirectorioNode | null {
  if (!query) {
    return node;
  }

  const filteredChildren = (node.children ?? [])
    .map((child) => filterDirectorioTree(child, query))
    .filter((child): child is DirectorioNode => child !== null);

  if (nodeMatches(node, query) || filteredChildren.length > 0) {
    return {
      ...node,
      children: filteredChildren.length ? filteredChildren : undefined,
    };
  }

  return null;
}

export function nodeCssClasses(node: DirectorioNode): string[] {
  const classes = ['node', `level-${node.level}`, `team-${node.team}`];

  if (node.level === 'sub') {
    classes.push(`sub-${node.team}`);
  }
  if (node.level === 'dep') {
    classes.push(node.team);
  }

  return classes;
}
