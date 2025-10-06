<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Componentes del Plan de Mejoramiento Institucional (PMI)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Cuando se forma parte de una institución educativa comprometida con la mejora continua, es fundamental comprender las herramientas que orientan sus procesos de transformación. Una de las más importantes es el Plan de Mejoramiento Institucional (PMI), instrumento que organiza las acciones necesarias para avanzar hacia una educación de mayor calidad.
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y finalidad del Plan de Mejoramiento Institucional (PMI)
    
    .bg-full-width.bg-color-4
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El Plan de Mejoramiento Institucional es un instrumento de planeación estratégica que permite identificar, organizar y ejecutar acciones orientadas a fortalecer la calidad educativa. Se construye a partir de un proceso de autoevaluación institucional, mediante el cual se reconocen fortalezas, se detectan debilidades y se definen metas específicas que guían el camino hacia el mejoramiento continuo (Avaca y De León, 2010).
        
            .bg-color-5.p-4(data-aos="fade-left").mb-3
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 No debe entenderse como un simple requisito normativo o un documento archivado, sino como una herramienta dinámica, participativa y transformadora. Articula la misión institucional con acciones concretas, medibles y sostenibles.
            p El PMI responde a las siguientes preguntas clave:

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 01
                  p.mb-0 ¿Qué necesita mejorarse en la institución educativa?
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 02
                  p.mb-0 ¿Qué se propone hacer para lograrlo?
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 03
                  p.mb-0 ¿Quiénes serán los responsables?
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 04
                  p.mb-0 ¿En cuánto tiempo se desarrollarán las acciones?
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 05
                  p.mb-0 ¿Cómo se evaluarán los avances y resultados?
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/9.svg").mx-auto
    
        h2(data-aos="fade-left") Finalidad del PMI
        p.mb-5 La finalidad del PMI es elevar la calidad del servicio educativo mediante un proceso sistemático y reflexivo de análisis, diseño, implementación, seguimiento y evaluación de acciones de mejora. Además, busca fomentar una cultura institucional de aprendizaje, corresponsabilidad y participación.

        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación de oportunidades de mejora
                p.text-center Basadas en evidencias recogidas en la evaluación institucional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Proyección de acciones concretas
                p.text-center Responden a necesidades reales de la comunidad educativa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fortalecimiento de la gestión institucional
                p.text-center En dimensiones directiva, académica, administrativa, financiera y comunitaria.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Participación activa
                p.text-center Involucra a todos los actores institucionales en la construcción y ejecución del plan.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cultura de autoevaluación permanente
                p.text-center Reconoce el error como oportunidad de aprendizaje y transformación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mejora de los aprendizajes
                p.text-center Favorece el desarrollo integral, especialmente en la educación infantil.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/10.png', alt='')
        
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") En el campo de la educación infantil, aplicar el PMI es crucial. Un entorno educativo que mejora continuamente propicia condiciones para el aprendizaje, desarrollo emocional, juego, exploración y la participación activa de niñas y niños. También permite fortalecer los vínculos con las familias, mejorar la gestión de recursos y propiciar ambientes seguros y enriquecedores (Pareja, 2009).
        
            .bg-color-7.p-5(data-aos="fade-left")
              p.mb-0 Conocer el concepto y la finalidad del PMI no solo implica entender una estructura técnica, sino acceder a una visión profunda de cómo una institución educativa puede transformarse desde adentro. Se invita, entonces, a asumir una mirada crítica, propositiva y comprometida, entendiendo que la calidad no es un destino, sino un camino que se construye día a día con la participación de todos.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Relación entre el PMI y el Proyecto Educativo Institucional (PEI)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿Cómo garantizar que las acciones implementadas en una institución educativa respondan coherentemente a su identidad y metas de desarrollo? Esta pregunta lleva al análisis del vínculo esencial entre dos documentos estratégicos: el Proyecto Educativo Institucional (PEI) y el Plan de Mejoramiento Institucional (PMI). Su interrelación es clave para asegurar el éxito y sostenibilidad de los procesos educativos.
    
        .bg-color-1.p-5(data-aos="fade-left")
          h5 ¿Qué es el PEI?
          p.mb-0 El PEI es el documento base que expresa la identidad institucional, incluyendo su misión, visión, valores y objetivos a largo plazo. Refleja la visión compartida de la comunidad educativa sobre la formación que se desea ofrecer, los principios pedagógicos que la guían y su contribución a la sociedad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p(data-aos="fade-left") En educación infantil, su relevancia es aún mayor, pues define cómo se atenderán las necesidades integrales de niñas y niños, promoviendo ambientes que favorezcan su desarrollo cognitivo, social, emocional y físico. También incorpora principios como la inclusión, equidad y respeto por la diversidad, en sintonía con el contexto educativo actual.
    
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Este documento orienta las prácticas cotidianas, alineándose con las políticas educativas nacionales, como las del Ministerio de Educación Nacional (MEN), y debe reflejar las características del contexto local y cultural.
    
    h2(data-aos="fade-left").mb-5 ¿Qué papel cumple el PMI?

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El PMI es el instrumento de gestión que traduce las metas del PEI en acciones organizadas, con responsables definidos, recursos asignados y plazos establecidos. Surge de diagnósticos rigurosos y procesos de autoevaluación institucional que permiten identificar fortalezas, debilidades y necesidades prioritarias.
    
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según la Resolución 13561 de 2017 del MEN, el PMI debe construirse participativamente, involucrando a docentes, directivos, familias, estudiantes y otros actores, fomentando así la corresponsabilidad y el sentido de pertenencia. Funciona como una hoja de ruta hacia la mejora continua, asegurando que los procesos institucionales sean efectivos y estén alineados con las metas estratégicas del PEI.
        p La articulación entre ambos documentos puede visualizarse con mayor claridad mediante la siguiente comparación:
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación entre PEI y PMI
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-8.text-white.text-center Elemento
            th.bg-color-8.text-white.text-center Proyecto Educativo Institucional (PEI)
            th.bg-color-8.text-white.text-center Plan de Mejoramiento Institucional (PMI)
        tbody.bg-color-7
          tr
            th Propósito
            td Define la identidad institucional y su visión a largo plazo
            td Operativiza las metas del PEI mediante acciones concretas
          tr
            th Preguntas guía
            td ¿Quiénes somos?, ¿Qué queremos lograr?, ¿Por qué lo hacemos?
            td ¿Cómo lo haremos?, ¿Cuándo?, ¿Con qué recursos?, ¿Quiénes son responsables?
          tr
            th Enfoque
            td Estratégico y filosófico
            td Operativo y práctico
          tr
            th Construcción
            td Basado en la reflexión colectiva y políticas educativas
            td Basado en diagnóstico y autoevaluación participativa
          tr
            th Alcance
            td Marco general de acción educativa
            td Plan específico de mejora institucional
    
    h2(data-aos="fade-left").mb-5 Ejemplo de articulación

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Si el PEI establece como prioridad el fortalecimiento de las competencias socioemocionales en la primera infancia, el PMI debe incluir:
    
        .bg-color-3.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Capacitación docente en pedagogías afectivas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Programas de bienestar emocional.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Estrategias para la participación familiar.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Indicadores claros para evaluar el impacto.
        p Las ventajas de una articulación efectiva PEI-PMI son: 

    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5
        .row.justify-content-center.mb-3.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Coherencia institucional
                p.text-center Las acciones responden a una visión común.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Eficiencia en la gestión
                p.text-center Recursos optimizados en función de metas definidas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Participación comunitaria
                p.text-center Inclusión activa de todos los actores educativos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cultura de mejora continua
                p.text-center Estrategias ajustadas mediante retroalimentación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cumplimiento normativo
                p.text-center Alineación con las políticas educativas vigentes.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/23.png', alt='')

        .bg-full-width.bg-color-8
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/29.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Comprender esta relación dinámica permite a los profesionales de la educación infantil traducir la visión institucional en acciones que impactan directamente en la calidad educativa. Reforzar la articulación entre PEI y PMI ayuda a la institución a adaptarse a cambios, responder a las necesidades de su comunidad y garantizar un desarrollo integral y significativo para niñas y niños. Por ello, la revisión, ajuste y socialización permanente de ambos documentos debe ser una práctica habitual que impulse el crecimiento institucional y el bienestar colectivo.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estructura del PMI: diagnóstico, metas, acciones, cronograma, responsables y mecanismos de seguimiento
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ¿Cómo se puede asegurar que una institución educativa avance sostenidamente hacia la excelencia y la equidad? Esta pregunta invita a reflexionar sobre la necesidad de un proceso sistemático y planificado que oriente todas las acciones institucionales hacia el logro de resultados significativos. El Plan de Mejoramiento Institucional (PMI) representa la herramienta clave para estructurar esta ruta de transformación, facilitando una gestión estratégica y participativa, sustentada en la evidencia.
    
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          p.mb-0 En el contexto educativo actual, caracterizado por desafíos crecientes y demandas diversas, es fundamental que el PMI cuente con una estructura clara, dinámica y articulada. Esta debe ajustarse a la realidad particular de cada institución y permitir el monitoreo riguroso de avances, ajustes y resultados.
        p A continuación, se detallan los componentes fundamentales que conforman la estructura del PMI, destacando su función y características en el proceso de mejoramiento continuo:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/31.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Diagnóstico institucional")
            p Es la primera y más crítica etapa del PMI. Consiste en un análisis exhaustivo y sistemático que permite comprender la situación actual de la institución en sus dimensiones académica, administrativa, comunitaria e infraestructural. Incluye indicadores cuantitativos como resultados de pruebas, tasas de promoción y asistencia, e indicadores cualitativos como el clima escolar y la cultura institucional. Se basa en metodologías participativas, involucra a todos los actores educativos, utiliza triangulación de fuentes para mayor validez, e integra el análisis de contexto externo a través de herramientas como el FODA.
    
          .div(titulo="Metas claras y contextualizadas")
            p A partir del diagnóstico, se deben formular metas bajo el enfoque SMART (específicas, medibles, alcanzables, relevantes y temporales). Estas metas guían el esfuerzo institucional, permiten evaluar avances de forma concreta y deben alinearse con el PEI y con políticas nacionales e internacionales como los Objetivos de Desarrollo Sostenible (particularmente el ODS 4). Por ejemplo, una meta puede ser: “incrementar en un 15% el nivel de competencia lectora en los estudiantes de educación infantil para el cierre del año escolar”.
    
          .div(titulo="Acciones estratégicas")
            p Representan los planes operativos diseñados para alcanzar las metas establecidas. Deben estar basadas en las prioridades identificadas, abordar las causas raíz de los problemas, y contemplar aspectos pedagógicos, administrativos, de infraestructura y participación comunitaria. Es importante integrar la innovación educativa, el uso de tecnologías digitales, la formación docente continua y enfoques pedagógicos centrados en el estudiante. También se recomienda articular las acciones con programas y proyectos externos.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Cronograma detallado y flexible")
            p Es una herramienta de planificación que organiza las acciones en el tiempo. Debe establecer plazos claros para la ejecución y revisión de cada actividad, permitir una distribución adecuada de las cargas laborales, coordinar esfuerzos entre responsables y prever evaluaciones intermedias y finales. A la vez, el cronograma debe tener la capacidad de adaptarse a cambios contextuales o hallazgos emergentes, fortaleciendo así la resiliencia institucional.
    
          .div(titulo="Responsables y liderazgo compartido")
            p Cada acción debe contar con responsables definidos, lo que garantiza la rendición de cuentas y el compromiso con la ejecución. Se promueve un liderazgo distribuido que involucre a directivos, docentes, estudiantes, familias y comunidad. Esta participación colaborativa fortalece la cultura organizacional, fomenta la innovación y asegura la sostenibilidad del proceso de mejora. La calidad del liderazgo y la motivación del equipo son factores determinantes para el éxito del PMI.
    
          .div(titulo="Mecanismos de seguimiento y evaluación")
            p Son indispensables para transformar el PMI en un proceso dinámico y reflexivo. El seguimiento implica recolectar datos sobre la implementación de acciones, mientras que la evaluación permite valorar el impacto y los resultados. La autoevaluación institucional es clave, ya que promueve la reflexión crítica interna. Debe apoyarse en indicadores claros, instrumentos confiables y participación de toda la comunidad educativa. Los resultados permiten tomar decisiones informadas, realizar ajustes y garantizar la transparencia.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Marco Normativo del Plan de Mejoramiento Institucional (PMI)
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Marco Normativo del Plan de Mejoramiento Institucional (PMI), donde se aborda el sustento legal y técnico que regula la planeación y ejecución del PMI en las instituciones educativas de Colombia. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Marco Normativo del Plan de Mejoramiento Institucional (PMI)
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/33.png', alt='')
         



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/17408" target="_blank" rel="noopener noreferrer") Ahumada, L. (2011). Liderazgo distribuido durante el proceso de elaboración e implementación de planes de mejoramiento educativo en una comuna rural en Chile. Revista de Ciencias Sociales. 17(2), 2011: ( ed.). Red Universidad del Zulia.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/310/31053180015.pdf " target="_blank" rel="noopener noreferrer") González, F. M., Escorcia, M. R., Pinto, M. C., Caballero, S. R., & Paredes, A. J. (2017). Gestión participativa y calidad educativa en el contexto del Plan de Mejoramiento Institucional en Escuelas Colombianas. Opción, 33(82), 344-365. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/39077053/_GU%C3%8DA_PARA_LA_ELABORACI%C3%93N_E_IMPLEMENTACI%C3%93N_DEL_PLAN_DE_MEJORA_INSTITUCIONAL_ " target="_blank" rel="noopener noreferrer") Santo Domingo, D. N. (2017). Guía para la elaboración e implementación del plan de mejora institucional. Dominican Repúblic: Publicaciones MAP. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://manglar.uninorte.edu.co/handle/10584/7559" target="_blank" rel="noopener noreferrer") Herrera Boom, V., Montes Alfaro, I., Tapia García, M., & Santiago Barros, E. (2017). Diseño de un plan de mejoramiento como propuesta de intervención para el fortalecimiento de los procesos curriculares de una institución educativa (Master's thesis, Universidad del Norte).  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pmicatamarca.blogspot.com/p/descargas.html " target="_blank" rel="noopener noreferrer") FORMULACIÓN DE PROYECTOS. (s.f.). Plan de Mejora Institucional. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://edu21.cl/blog/innovacion-educativa/que-es-el-plan-de-mejoramiento-educativo-pme/?srsltid=AfmBOop2hqUDySmNlxzGvzIaeSJVDfEZVHkLyFm5IlMFD-y9oiPgnpXN " target="_blank" rel="noopener noreferrer") ¿Qué es el Plan de Mejoramiento Educativo? (PME). (s.f.). Edu21 I Tecnología educativa. 



           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=TkrYTVJvj2I" target="_blank" rel="noopener noreferrer") JaredJPR 30. (2023b, 9 de marzo). Plan de Mejoramiento [Video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=43_ECQJLOU0 " target="_blank" rel="noopener noreferrer") Dirección General de Impuestos Internos. (2021, 15 de marzo). Plan Estratégico Institucional 2021-2024 [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-PCr1eIK8Wk  " target="_blank" rel="noopener noreferrer") INDEE. (2022, 6 de abril). Enfoques de Gestión Escolar [Video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
