<template>
  <div id="quem-somos" ref="quem-somos">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">GRUPO CESAE</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h6>
            A ideia de criar o Grupo de estudos e pesquisas Cuidado, Educação em
            Saúde e Análise Existencial (CESAE) surgiu em 2018 tendo como
            objetivo desenvolver atividades de ensino, pesquisa e extensão
            <!-- com fundamentos na pesquisa qualitativa, fenomenologia, logoterapia
            e Análise Existencial, sobretudo quanto às vivências na academia,
            cuidado nas instituições hospitalares e unidades e centros de saúde -->
            priorizando a educação voltada para ser responsável, o sentido da
            vida e a tridimensionalidade do ser biológica, psicológica e
            espiritual.

            <!-- <br /><br />
            Cuidado – Teoria Transpessoal de Jean Watson<br />
            O cuidado é “uma consciência ‘cuidativa’, de valores e de motivos”,
            nutrida por intencionalidade, relacionamento, cientificidade,
            integralidade e guiada por um imperativo ético e moral, constituído
            pelas leis do exercício profissional (WATSON, 2002, p. 103)

            <br /><br />
            Educação – Logoterapia e Análise Existencial de Viktor Frankl (1905
            – 1997)<br />

            Educar é transmitir motivações e conhecimentos, é decidir por suas
            próprias escolhas e ações, é o aguçar da consciência para a
            percepção de possibilidades e desafios, ou seja, é despertar para
            valores potenciais em quaisquer situações concretas (FRANKL; LAPIDE,
            2014). -->
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#quem-somos {
  padding: 32px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f2f2f2;
}
#quem-somos h6 {
  line-height: 145%;
}
@media screen and (max-width: 760px) {
  #quem-somos br {
    display: none;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: inline;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #quem-somos br {
    display: none;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: inline;
  }
}
</style>
