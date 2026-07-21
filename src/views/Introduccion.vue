<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La educación inicial en Colombia se fundamenta en normativas que aseguran el desarrollo integral de la infancia. El Decreto 2247 de 1997 establece la estructura administrativa y pedagógica de la educación preescolar. Las actividades rectoras —juego, arte, literatura, exploración del medio y expresión corporal— son ejes del currículo. La Resolución 2343 de 1996 define indicadores de logro en dimensiones como lo cognitivo, emocional y comunicativo.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left").mb-4
          p(data-aos="fade-left") Estos documentos fortalecen la práctica docente, promoviendo un enfoque crítico, ético y contextualizado. Su análisis permite interpretar cómo se relacionan con la política pública de primera infancia, garantizando una educación inicial con enfoque de derechos, inclusión y participación.

          figure.justify-content-end.d-flex
            img(src="@/assets/curso/intro/3.svg" data-aos="zoom-in", style="max-width: 104px")
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-2 La unidad se organiza en tres bloques temáticos: análisis del Decreto 2247, estudio de las actividades rectoras y evaluación mediante la Resolución 2343. Se espera una participación activa y reflexiva para aplicar estos lineamientos en experiencias pedagógicas significativas para la infancia.
            p.mb-0 #[strong “Educar en la primera infancia es sembrar con amor las raíces que sostendrán el futuro de una sociedad más justa y humana.”]





</template>
