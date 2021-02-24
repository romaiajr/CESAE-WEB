<template>
  <div id="quem-somos" ref="quem-somos">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <!-- <h2 class="title-section">O GRUPO CESAE</h2> -->
          <h2 class="title-section">GRUPO CESAE</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h6>
            O Grupo de estudos e pesquisas Cuidado, Educação em Saúde e Análise
            Existencial (CESAE) surgiu em 14 de julho de 2018 com a efetividade
            do 1º Workshop sobre o Sentido da Vida na Universidade Estadual de
            Feira de Santana (UEFS). A partir deste dia, o percurso de
            institucionalizar o CESAE foi se organizando e em 20 de outubro de
            2019 foi compartilhado à comunidade acadêmica por meio da palestra
            Núcleo Interdisciplinar de Pesquisas e Estudo em Saúde (NIPES). O
            Grupo atualmente está situado na Universidade Estadual de Feira de
            Santana (UEFS) no estado da Bahia integrado ao Departamento de
            Saúde.
          </h6>
        </div>
      </div>
      <div id="button-section">
        <router-link to="/producoes" exact>
          <button class="a-button">
            <h6>VEJA UM POUCO MAIS SOBRE O CESAE</h6>
          </button>
        </router-link>
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
