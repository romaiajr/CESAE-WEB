<template>
  <div id="materiais" ref="materiais">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">O QUE FAZEMOS</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h6>
            <!-- O NUPEC trabalha com estudos e intervenções que tem como eixos a
            promoção da saúde, proteção específica, reabilitação e cura, com
            enfoque no adoecimento agudo e crônico no contexto individual,
            familiar e de grupos, tendo como recorte os itinerários terapêuticos
            e as dimensões da produção do cuidado nos campos da clínica, da
            saúde coletiva e da saúde mental, privilegiando o trabalho com
            narrativas autobiográficas. -->
            <ul>
              <li>
                Investigar e divulgar a produção do conhecimento sobre a
                educação na formação em Enfermagem abrangendo as diretrizes
                curriculares, ética e bioética do compromisso e da
                responsabilidade profissional, vivências da prática de cuidar em
                Enfermagem, tecnologias para a sistematização do cuidado
                fundamentado nas teorias de Enfermagem.
              </li>
              <li>
                Desenvolver atividades de ensino, pesquisa e extensão com
                fundamentos na pesquisa qualitativa, fenomenologia, logoterapia
                e Análise Existencial, sobretudo quanto às vivências na
                academia, cuidado nas instituições hospitalares e unidades e
                centros de saúde priorizando a educação voltada para ser
                responsável, o sentido da vida e a tridimensionalidade do ser
                biológica, psicológica e espiritual.
              </li>
              <li>
                Focar na atenção ao ser humano vulnerável com a situação de
                adoecimento e possibilitar ao estudante a autocompreensão e a
                autotransformação nesse contexto pelo encontro de sentido
                tornando-se agente consciente, comprometido, responsável e
                crítico na sua formação considerando as condições necessárias
                para esse processo.
              </li>
              <li>
                Desenvolver projetos de pesquisa e de extensão para obtenção de
                bolsas de iniciação científica e extensão.
              </li>
            </ul>
          </h6>
        </div>
      </div>
      <div class="row m-0" id="card-container">
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
      </div>
      <div id="button-section">
        <router-link to="/producoes" exact>
          <button class="a-button">
            <h6>VEJA TODO CONTEÚDO PRODUZIDO</h6>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import CardMaterial from "../reutilizavel/CardMaterial";
export default {
  components: { CardMaterial: CardMaterial },
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
