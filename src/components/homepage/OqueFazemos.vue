<template>
  <div id="materiais" ref="materiais">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <!-- <h2 class="title-section">O QUE BUSCAMOS</h2> -->
          <h2 class="title-section">NOSSO OBJETIVO</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h6>
            O CESAE tem como objetivo desenvolver atividades de ensino, pesquisa
            e extensão com fundamentos na pesquisa qualitativa, fenomenologia,
            logoterapia e Análise Existencial na educação e na atenção ao ser
            humano vulnerável com a situação de adoecimento, através de
            atividades em salas de aula, laboratórios e campos de práticas dos
            estudantes de enfermagem e de cuidado do ser humano.
          </h6>
        </div>
      </div>
      <!-- <div class="row m-0" id="card-container">
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/producoes/iniciacao-cientifica"
            icone="bx bx-atom"
            cor="color:RGB(59, 89, 153)"
            nome="Iniciação Científica"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/producoes/projetos-de-extensao"
            icone="fa fa-laptop"
            cor="color:#dc3546"
            nome="Projetos de Extensão"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/producoes/artigos"
            icone="fa fa-file-text-o"
            cor="color:RGB(59, 89, 153)"
            nome="Artigos"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/producoes/livros"
            icone="bx bx-book"
            cor="color:#1fa67b"
            nome="Livros"
          >
          </CardMaterial>
        </div>
      </div> -->
      <div id="button-section">
        <router-link to="/producoes" exact>
          <button class="a-button">
            <h6>VEJA O CONTEÚDO PRODUZIDO</h6>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// import CardMaterial from "../reutilizavel/CardMaterial";
export default {
  // components: { CardMaterial: CardMaterial },
};
</script>
<style>
a {
  text-decoration: none !important;
  color: #525c65 !important;
}
#materiais {
  box-sizing: border-box;
  padding: 32px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
}
#materiais h6 {
  line-height: 145%;
}
#card-container {
  padding-top: 24px;
}

#button-section {
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.a-button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid var(--primary-color);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 600 !important;
  color: var(--secondary-dark-color);
  background-color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}

.a-button:hover {
  color: #ffffff;
  background-color: var(--secondary-dark-color);
  border: 0.1em solid var(--secondary-dark-color);
}

@media screen and (max-width: 760px) {
  #materiais {
    padding-bottom: 16px;
  }
  #materiais br {
    display: none !important;
  }
  .a-button {
    display: block;
    margin: 0.4em auto;
  }
}

@media screen and (max-width: 1140px) and (min-width: 761px) {
  #materiais br {
    display: none !important;
  }
}
</style>
