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
        <button class="a-button" @click="openModal">
          <h6>VEJA UM POUCO MAIS SOBRE O CESAE</h6>
        </button>
      </div>
    </div>
    <div class="center">
      <vs-dialog blur v-model="openDialog" id="dialog-equipe">
        <template #header>
          <h4
            class="not-margin"
            style="color: var(--secondary-dark-color) !important; font-weight: normal !important"
          >
            O Grupo CESAE
          </h4>
        </template>
        <div id="cesae-info">
          <h5 class="cesae-section">
            O CESAE
          </h5>
          <p class="section-text">
            O Grupo de estudos e pesquisas Cuidado, Educação em Saúde e Análise
            Existencial (CESAE) está situado na Universidade Estadual de Feira
            de Santana (UEFS) no estado da Bahia integrado ao Departamento de
            Saúde. Os pressupostos do grupo abrangem:
            <br /><br />
            Cuidado – Teoria Transpessoal de Jean Watson

            <br /><br />
            O cuidado é “uma consciência ‘cuidativa’, de valores e de motivos”,
            nutrida por intencionalidade, relacionamento, cientificidade,
            integralidade e guiada por um imperativo ético e moral, constituído
            pelas leis do exercício profissional (WATSON, 2002, p. 103).
            <br /><br />
            Educação – Logoterapia e Análise Existencial de Viktor Frankl (1905
            – 1997)
            <br /><br />
            Educar é transmitir motivações e conhecimentos, é decidir por suas
            próprias escolhas e ações, é o aguçar da consciência para a
            percepção de possibilidades e desafios, ou seja, é despertar para
            valores potenciais em quaisquer situações concretas (FRANKL; LAPIDE,
            2014).
            <br /><br />
          </p>

          <h5 class="cesae-section">
            O Que Buscamos?
          </h5>
          <ul class="section-text">
            <li>
              <p>
                Investigar e divulgar a produção do conhecimento sobre a
                educação na formação em Enfermagem abrangendo as diretrizes
                curriculares, ética e bioética do compromisso e da
                responsabilidade profissional, vivências da prática de cuidar em
                Enfermagem, tecnologias para a sistematização do cuidado
                fundamentado nas teorias de Enfermagem.
              </p>
            </li>
            <li>
              <p>
                Desenvolver atividades de ensino, pesquisa e extensão com
                fundamentos na pesquisa qualitativa, fenomenologia, logoterapia
                e Análise Existencial, sobretudo quanto às vivências na
                academia, cuidado nas instituições hospitalares e unidades e
                centros de saúde priorizando a educação voltada para ser
                responsável, o sentido da vida e a tridimensionalidade do ser
                biológica, psicológica e espiritual.
              </p>
            </li>
            <li>
              <p>
                Focar na atenção ao ser humano vulnerável com a situação de
                adoecimento e possibilitar ao estudante a autocompreensão e a
                autotransformação nesse contexto pelo encontro de sentido
                tornando-se agente consciente, comprometido, responsável e
                crítico na sua formação considerando as condições necessárias
                para esse processo.
              </p>
            </li>
            <li>
              <p>
                Desenvolver projetos de pesquisa e de extensão para obtenção de
                bolsas de iniciação científica e extensão.
              </p>
            </li>
          </ul>
          <h5 class="cesae-section">
            Nossa História
          </h5>
          <p class="section-text">
            A ideia de criar o grupo CESAE surgiu em 14 de junho de 2018 com a
            efetividade do 1º Workshop sobre o Sentido da Vida na Universidade
            Estadual de Feira de Santana (UEFS). A partir deste dia, o percurso
            de institucionalizar o CESAE foi se organizando e em 20 de outubro
            de 2019 foi compartilhado à comunidade acadêmica por meio de
            palestra Núcleo Interdisciplinar de Pesquisas e Estudo em Saúde
            (NIPES), pela mentora e coordenadora Profa. Dra. Adriana Braitt
            Lima, a estrutura do grupo e foco da linha de pesquisa. Nessa
            altura, era intitulado de Cuidado à pessoa em estado de adoecimento
            e formação em saúde relacionados à pesquisa qualitativa e Análise
            Existencial.
            <br /><br />
            A referência surgiu da tese de doutorado “Sentido de tornar-se
            responsável nas vivências dos estudantes de Enfermagem” defendida em
            29 de julho de 2016 na Escola de Enfermagem da Universidade Federal
            da Bahia (UFBA).
          </p>
          <h5 class="cesae-section">
            O Contexto
          </h5>
          <p class="section-text">
            Os estudantes de Enfermagem, nos âmbitos de aprendizagem (sala de
            aula, laboratórios de habilidades e campos de prática de cuidado ao
            ser humano) vivenciam situações concretas que podem deixar marcas
            por toda vida. Sentimentos, inquietações e desafios podem emergir
            dessas vivências, assim como o sentido de tornar-se responsável pela
            sua formação. <br /><br />As Diretrizes Curriculares Nacionais do
            Curso de Graduação em Enfermagem na Resolução do Conselho Nacional
            de Educação de 7 de novembro de 2001 fomentam que os cursos de
            Enfermagem devem capacitar os estudantes para a assunção da
            responsabilidade como agente provedor da saúde integral do ser
            humano. <br /><br />Ao final do curso, o estudante deverá estar apto
            para o exercício profissional com formação científica e intelectual
            para intervir de modo crítico, reflexivo, humanista e ético. Como
            seria vivenciar este ensino e aprendizagem nos âmbitos da
            universidade?
          </p>
          <h5 class="cesae-section">
            Linhas de Pesquisa
          </h5>
          <ul class="section-text">
            <li>
              Educação, Ética e Bioética na formação em Enfermagem
            </li>
            <li>
              Fenomenologia, Logoterapia e Análise Existencial Frankliana.
            </li>
          </ul>
        </div>
      </vs-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    openDialog: false,
  }),
  methods: {
    openModal() {
      this.openDialog = true;
    },
  },
};
</script>
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
#cesae-info {
  border-top: 1px solid #dee2e6 !important;
  padding: 8px 0px;
}

.cesae-section {
  color: var(--secondary-dark-color);
  margin-top: 8px;
}
.section-text {
  padding-bottom: 16px;
  padding-top: 4px;
  border-bottom: 2px solid #dee2e6 !important;
}

#autor-img {
  width: 200px !important;
  height: 200px !important;
}

@media screen and (max-width: 760px) {
  #cesae-info {
    padding: 4px 0px;
  }

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
  #cesae-info {
    padding: 4px 0px;
  }
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
