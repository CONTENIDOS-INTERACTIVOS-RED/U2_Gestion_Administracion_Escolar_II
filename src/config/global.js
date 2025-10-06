export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Planes de mejoramiento',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes del Plan de Mejoramiento Institucional (PMI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto y finalidad del Plan de Mejoramiento Institucional (PMI)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Relación entre el PMI y el Proyecto Educativo Institucional (PEI)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estructura del PMI: diagnóstico, metas, acciones, cronograma, responsables y mecanismos de seguimiento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestiones que conforman el Plan de Mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Gestión directiva: liderazgo, visión institucional y clima escolar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Gestión académica: currículo, procesos pedagógicos y resultados de aprendizaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Gestión administrativa y financiera: recursos humanos, infraestructura y presupuesto',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Gestión de la comunidad: participación de familias, estudiantes y actores del entorno',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Integración de las gestiones en el proceso de mejoramiento continuo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Decreto 2247 de 1997',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Contextualización de la política educativa para la infancia en Colombia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura y principales apartados del Decreto 2247',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Condiciones organizativas del nivel preescolar',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Actividades rectoras de la educación inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Definición y fundamento pedagógico de las actividades rectoras',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'El juego como actividad rectora: características y potencial educativo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'El arte y la literatura como ejes de formación integral',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Relación entre actividades rectoras y dimensiones del desarrollo infantil',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Orientaciones del MEN y su implementación en el aula',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pareja Fernández de la Reguera, J. A. (2009). Una clave para la calidad de la institución educativa: los planes de mejora. Educación y Educadores, 9 (2): ( ed.). D - Universidad de La Sabana.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5879',
    },
    {
      referencia:
        'Avaca, Patricia y De Leon, Elizabeth. 2010. Los planes de mejoras institucionales, se constituyen en verdaderos desafíos para las escuelas secundarias, un abordaje evaluativo.  ',
      link:
        'http://eventosacademicos.filo.uba.ar/index.php/JIFIICE/III-I/paper/view/2976/1567',
    },
    {
      referencia:
        'Bio, U. B.2009. Plan de mejoramiento institucional según acreditación institucional y debilidades identificadas por pares externos.  ',
      link:
        'https://repositorio.cuc.edu.co/bitstream/handle/11323/399/49738743.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Congreso de la República. 1994. Ley 115 de 1994, Ley General de Educación. Bogotá (Colombia) Diario oficial: 41.214.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. 2008.Guía 34,Mejoramiento institucional de la autoevaluación al plan de mejoramiento.  ',
      link: 'https://www.mineducacion.gov.co/1621/article-177745.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1994). Decreto 1860 de 1994. ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-172061_archivo_pdf_decreto1860_94.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2023). Plan Estratégico Institucional 2022-2026. Bogotá: MEN.  ',
      link:
        'https://www.mineducacion.gov.co/1780/articles-413730_recurso_32.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (2021). Gestión Educativa. Bogotá: MEN.  ',
      link:
        'https://www.mineducacion.gov.co/portal/adelante-maestros/Formacion/Gestion-Educativa/231098:Gestion-Educativa',
    },
    {
      referencia:
        'Leithwood, K., Harris, A., & Hopkins, D. (2022). Seven strong claims about successful school leadership revisited. School Leadership & Management, 42(1), 5-22.  ',
      link:
        'https://www.researchgate.net/publication/251888122_Seven_Strong_Claims_about_Successful_School_Leadership',
    },
    {
      referencia:
        'Naciones Unidas (ONU). (2015). Objetivos de Desarrollo Sostenible: 17 objetivos para transformar nuestro mundo. Nueva York: ONU.  ',
      link:
        'https://www.un.org/es/climatechange/17-goals-to-transform-our-world',
    },
    {
      referencia: 'Constitución Política de Colombia. (1991).  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'República de Colombia. (2015). Decreto 1075 de 2015 - Decreto Único Reglamentario del Sector Educación.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913',
    },
    {
      referencia:
        'UNESCO. (2021). Reimaginar juntos nuestros futuros: un nuevo contrato social para la educación. París: UNESCO. ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000379381_spa ',
    },
    {
      referencia:
        'Gvirtz, S. (2010). Mejorar la gestión directiva en la escuela: ( ed.). Ediciones Granica.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66670',
    },
    {
      referencia:
        'Polo Albarracín, M. & Sánchez Buitrago, J. O. (2022). La gestión directiva en las instituciones educativas: (1 ed.). Editorial Unimagdalena.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/223861',
    },
    {
      referencia:
        'Flórez Gutiérrez, A. & Castellanos Adarme, M. (2018). Gestión Académica en instituciones de educación superior: reflexiones y experiencias exitosas: (1 ed.). Corporación Universitaria del Caribe - CECAR.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217599',
    },
    {
      referencia: 'UNESCO. (2024). Liderazgo en la educación.  ',
      link: 'https://www.unesco.org/gem-report/es/leadership',
    },
    {
      referencia:
        'Thapa, A., Cohen, J., Guffey, S., & Higgins-D’Alessandro, A. (2013). A review of school climate research.  ',
      link:
        'https://www.researchgate.net/publication/258183185_A_Review_of_School_Climate_Research',
    },
    {
      referencia:
        'Ministerio de Educación Nacional (2024). Guía para el mejoramiento institucional. MEN.  ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-177745_archivo_pdf.pdf',
    },
    {
      referencia:
        'UNICEF (2022). Derecho a la participación de niños, niñas y adolescentes.   ',
      link:
        'https://www.unicef.org/chile/media/7031/file/Mod%204%20derecho%20participacion.pdf',
    },
    {
      referencia:
        'Spakowsky, E. (2021). La evaluación institucional: tejiendo tramas: ( ed.). Homo Sapiens Ediciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/177037',
    },
    {
      referencia:
        'Hernández Gutiérrez, D. (2006). La evaluación institucional frente a los retos actuales de la universalización de la universidad. Revista Pedagogía Universitaria, 11(2): 18-30, 2006: ( ed.). Editorial Universitaria.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/22442',
    },
    {
      referencia:
        'Ahumada, Luis., Galdames, Sergio., González, Álvaro y Herrera, Paula. 2009. El funcionamiento del equipo directivo durante un proceso de autoevaluación institucional en el marco de políticas de aseguramiento de la calidad de la gestión escolar en Chile. Universitas Psychologica, Vol. 8. N°2: 353-370. ',
      link: 'https://www.redalyc.org/pdf/647/64712165006.pdf ',
    },
    {
      referencia:
        'Aigneren, Miguel. 2006. La técnica de recolección de información mediante los grupos focales. Centro de Estudio de Opinión. Bogotá (Colombia).  ',
      link: 'https://revistas.udea.edu.co/index.php/ceo/article/view/1611',
    },
    {
      referencia:
        'Viloria, I. N. (2022). La evaluación institucional como estrategia para el mejoramiento continuo de la educación colombiana. Praxis, 18(2), 1-19.  ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/8897823.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acciones',
      significado:
        'conjunto de actividades planificadas para alcanzar las metas definidas en el plan de mejoramiento.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'proceso mediante el cual una institución analiza su propio desempeño para identificar fortalezas y áreas de mejora.',
    },
    {
      termino: 'Componentes',
      significado:
        'elementos fundamentales que conforman el plan de mejoramiento, como diagnóstico, metas, acciones, cronograma y responsables.',
    },
    {
      termino: 'Cronología',
      significado:
        'planificación temporal que establece fechas específicas para el desarrollo de las actividades del plan.',
    },
    {
      termino: 'Evaluación Institucional',
      significado:
        'proceso sistemático de recolección y análisis de información para valorar el desempeño y resultados de una institución educativa.',
    },
    {
      termino: 'Gestión Académica',
      significado:
        'área que comprende la organización y supervisión de los procesos pedagógicos y curriculares en la institución.',
    },
    {
      termino: 'Gestión Administrativa',
      significado:
        'conjunto de acciones relacionadas con la administración de recursos humanos, financieros y materiales en la escuela.',
    },
    {
      termino: 'Gestión de la Comunidad',
      significado:
        'participación activa de familias, estudiantes y actores del entorno en el proceso educativo y de mejoramiento.',
    },
    {
      termino: 'Gestión Directiva',
      significado:
        'liderazgo y toma de decisiones orientadas a mantener una visión institucional clara y un ambiente escolar adecuado.',
    },
    {
      termino: 'Mecanismos de Seguimiento',
      significado:
        'herramientas y procedimientos usados para monitorear el avance y cumplimiento de las acciones del plan.',
    },
    {
      termino: 'Objetivos',
      significado:
        'objetivos específicos y medibles que se buscan alcanzar con el plan de mejoramiento.',
    },
    {
      termino: 'Plan de Mejoramiento Institucional (PMI)',
      significado:
        'documento estratégico que establece las acciones y procesos para mejorar la calidad y funcionamiento de la institución educativa.',
    },
    {
      termino: 'Proyecto Educativo Institucional (PEI)',
      significado:
        'documento que define la misión, visión y objetivos de la institución, con el cual se articula el plan de mejoramiento.',
    },
    {
      termino: 'Resultados de Aprendizaje',
      significado:
        'conocimientos, habilidades y actitudes que se esperan desarrollar al finalizar la unidad o curso.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'proceso de monitoreo continuo para asegurar el cumplimiento de las actividades y metas del plan de mejoramiento.',
    },
  ],
}
