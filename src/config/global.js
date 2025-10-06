export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Educación inicial',
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
        numero: '2',
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
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
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
        'Rodríguez Vega, D. Hadad Larios, I. & Rodríguez Vega, D. (2013). Ideas pedagógicas: análisis de la normatividad sobre Educación Preescolar en Colombia: ( ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69916',
    },
    {
      referencia:
        'Falla Falcón, N. (Il.) & Carrión, J. J. (Il.). (2022). Acciones de innovación didáctica en entornos educativos: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/225982',
    },
    {
      referencia:
        'Osorio Villegas, M. & Herrera Púa, M. (2013). Educación Preescolar en Colombia: estructura del currículo y modelo pedagógico-didáctico: ( ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69915',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1997, 11 de septiembre). Decreto 2247 de 1997. Por el cual se establecen normas relativas a la prestación del servicio educativo del nivel preescolar y se dictan otras disposiciones.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-104840_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2018, agosto 22). Lineamientos curriculares.',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-339975.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2024, 3 de septiembre). Orientaciones pedagógicas para la educación inicial de grupos étnicos.',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-inicial/Orientaciones-pedagogicas-para-la-educacion-de-grupos-etnicos/379705:Orientaciones-pedagogicas-para-la-educacion-inicial-de-grupos-etnicos',
    },
    {
      referencia:
        'Alarcón Párraga, C. L., Camargo Abello, M., Castro Rojas, A. L., Schmidt Quintero, M., Turriago Borrero, C., Carvajal Ahumada, L., & Wells & Zea Asociados, M. (2013). Estrategia de atención integral a la primera infancia.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-177829_archivo_pdf_fundamentos_ceroasiempre.pdf',
    },
    {
      referencia:
        'Diker, G. (2001). Organización y perspectivas de la educación inicial en Iberoamérica: principales tendencias. Buenos Aires: Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura.',
      link:
        'https://es.slideshare.net/holababe80/diker-organizacin-y-perspectivas-de-la',
    },
    {
      referencia:
        'Flórez Romero, R. Castro Martínez, J. & Camelo C. I. R. (2019). El juego: un asunto serio en la formación de los niños y las niñas: ( ed.). Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127366',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2024, 2 de septiembre). Actividades rectoras de la primera infancia y de la educación inicial.',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-inicial/Sistema-de-Educacion-Inicial/178032:Actividades-rectoras-de-la-primera-infancia-y-de-la-educacion-inicial',
    },
    {
      referencia:
        'Carrera, B., & Mazzarella, C. (2001). Vygotsky: enfoque sociocultural. Educere, 5(13), 41-44.',
      link: 'https://www.redalyc.org/pdf/356/35601309.pdf',
    },
    {
      referencia:
        'Valeriano, A. D. J. H., Zeña, M. D. F. M., Delgado, L. I. A., López, L. R. P., Cornejo, K. C., & Becerra, L. M. M. (2023). Del juego simbólico a la práctica del valor de respeto: una mirada desde la virtualidad. Transdigital.',
      link:
        'https://www.editorial-transdigital.org/del-juego-simbolico-a-la-practica-del-valor-de-respetouna-mirada-desde-la-virtualidad/',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020, 5 de agosto). Documento CONPES 3999.',
      link:
        'https://colaboracion.dnp.gov.co/cdt/conpes/econ%C3%B3micos/3999.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1996, 5 de junio). Resolución 2343 de 1996.',
      link:
        'https://bibliotecadigital.usb.edu.co/entities/publication/6114ec71-1609-4afc-9259-f1e75e27870d',
    },
    {
      referencia:
        'Iafrancesco, G. M. (2003). Estructuración de estándares curriculares en la educación básica colombiana. Educación y Educadores, 6, 233-236.',
      link: 'https://www.redalyc.org/pdf/834/83400616.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Decreto 2247 de 1997',
      significado:
        'norma que regula la organización, funcionamiento y prestación del servicio de educación preescolar en Colombia.',
    },
    {
      termino: 'Desarrollo infantil',
      significado:
        'proceso continuo y dinámico mediante el cual los niños adquieren habilidades físicas, cognitivas, emocionales y sociales.',
    },
    {
      termino: 'Dimensiones del desarrollo',
      significado:
        'áreas fundamentales del crecimiento infantil: física, cognitiva, emocional, social y comunicativa.',
    },
    {
      termino: 'Educación inicial',
      significado:
        'etapa educativa dirigida a niños desde el nacimiento hasta los cinco años, enfocada en su desarrollo integral.',
    },
    {
      termino: 'Indicadores de logro',
      significado:
        'criterios específicos establecidos para evaluar el progreso y resultados en las diferentes dimensiones del desarrollo infantil.',
    },
    {
      termino: 'Juego',
      significado:
        'actividad espontánea y estructurada que permite al niño explorar, aprender y expresarse creativamente.',
    },
    {
      termino: 'Normativa educativa',
      significado:
        'conjunto de leyes, decretos y resoluciones que regulan procesos y estándares en la educación.',
    },
    {
      termino: 'Política de primera infancia',
      significado:
        'estrategias y acciones gubernamentales orientadas a garantizar derechos y bienestar de niños en sus primeros años.',
    },
    {
      termino: 'Preescolar',
      significado:
        'nivel educativo que comprende la educación inicial y básica, orientado al desarrollo y aprendizaje previo a primaria.',
    },
    {
      termino: 'Resolución 2343 de 1996',
      significado:
        'documento que establece los indicadores de logro para las dimensiones del desarrollo infantil en la educación inicial.',
    },
    {
      termino: 'Respeto a la infancia',
      significado:
        'principio que reconoce y valora los derechos, intereses y particularidades de los niños como sujetos de derechos.',
    },
    {
      termino: 'Servicio educativo',
      significado:
        'conjunto de acciones organizadas para ofrecer formación y cuidado a los niños en la educación inicial.',
    },
    {
      termino: 'Trayectoria educativa',
      significado:
        'proceso progresivo de aprendizaje y desarrollo que acompaña al niño desde la primera infancia hasta niveles superiores.',
    },
    {
      termino: 'Vínculo pedagógico',
      significado:
        'relación afectiva y educativa establecida entre educador y niño que facilita el aprendizaje y desarrollo integral.',
    },
  ],
}
