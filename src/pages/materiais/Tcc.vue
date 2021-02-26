<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav"
        >Trabalhos de Conclusão de Curso</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="producoes/artigos" exact
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item
        class="mobile-nav"
        to="/producoes/atividades-desenvolvidas"
        exact
        >Atividades Desenvolvidas</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/leituras-recomendadas" exact
        >Leituras Recomendadas</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="8" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            nome="Trabalhos de Conclusão de Curso (TCC)"
            sortBy="Nome"
            :fields="fields"
            @itemRemove="itemRemove"
          />

          <div
            class="container"
            style="padding-top: 8px; border-top: 1px solid #dee2e6 !important; margin-top: 8px"
          >
            <h5>Mural de Apresentações de TCC</h5>
            <div
              class="row m-0"
              id="carousel-desktop"
              style="width:100%;margin:10px auto;height: 450px"
            >
              <slider
                ref="slider-desktop"
                :options="optionsDesktop"
                v-if="fotos.length != 0"
              >
                <!-- slideritem wrapped package with the components you need -->
                <slideritem
                  v-for="(foto, index) in fotos"
                  :key="index"
                  :style="styleDesktop"
                >
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      :src="foto.imagem"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-title text-wrap">
                        {{ `Apresentação de ${foto.autor} (${foto.ano})` }}
                        <br />
                      </p>

                      <div id="action-card">
                        <b-button
                          v-show="isLogged"
                          v-b-modal.modal-remover
                          @click="removeId(2, foto._id)"
                          size="sm"
                          variant="danger"
                          squared
                        >
                          <i class="bx bx-trash"></i>
                          Excluir</b-button
                        >
                      </div>
                    </div>
                  </div>
                </slideritem>
                <!-- Customizable loading -->
              </slider>
              <div v-else style="width: 100% !important;">
                <b-alert show variant="warning">
                  <h6>
                    Ainda não foram inseridas fotos nesta sessão
                  </h6></b-alert
                >
              </div>
            </div>
            <div
              class="row m-0"
              id="carousel-mobile"
              style="width:100%;margin:10px auto;height: 500px"
            >
              <slider
                ref="slider-mobile"
                :options="optionsMobile"
                v-if="fotos.length != 0"
              >
                <!-- slideritem wrapped package with the components you need -->
                <slideritem
                  v-for="(foto, index) in fotos"
                  :key="index"
                  :style="styleMobile"
                >
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      :src="foto.imagem"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-title text-wrap">
                        {{ `Apresentação de ${foto.autor} (${foto.ano})` }}
                        <br />
                      </p>

                      <div id="action-card">
                        <b-button
                          v-show="isLogged"
                          v-b-modal.modal-remover
                          @click="removeId(2, foto._id)"
                          size="sm"
                          variant="danger"
                          squared
                        >
                          <i class="bx bx-trash"></i>
                          Excluir</b-button
                        >
                      </div>
                    </div>
                  </div>
                </slideritem>
                <!-- Customizable loading -->
              </slider>
              <div v-else style="width: 100% !important;">
                <b-alert show variant="warning">
                  <h6>
                    Ainda não foram inseridas fotos nesta sessão
                  </h6></b-alert
                >
              </div>
              <div
                class="row m-0"
                id="carousel-medium"
                style="width:100%;margin:10px auto;height: 450px"
              >
                <slider
                  ref="slider-medium"
                  :options="optionsMobile"
                  v-if="fotos.length != 0"
                >
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem
                    v-for="(foto, index) in fotos"
                    :key="index"
                    :style="styleMedium"
                  >
                    <div class="card">
                      <img
                        class="card-img-top img-fluid"
                        :src="foto.imagem"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-title text-wrap">
                          {{ `Apresentação de ${foto.autor} (${foto.ano})` }}
                          <br />
                        </p>
                        <div id="action-card">
                          <b-button
                            v-show="isLogged"
                            v-b-modal.modal-remover
                            @click="removeId(2, foto._id)"
                            size="sm"
                            variant="danger"
                            squared
                          >
                            <i class="bx bx-trash"></i>
                            Excluir</b-button
                          >
                        </div>
                      </div>
                    </div>
                  </slideritem>
                  <!-- Customizable loading -->
                </slider>
                <div slot="loading" v-show="fotos.length == 0">
                  <b-alert show variant="warning"
                    ><h6>
                      Ainda não foram inseridas fotos nesta sessão
                    </h6></b-alert
                  >
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>

    <b-modal
      id="modal-1"
      ref="modal-tcc"
      title="Adicionar Novo TCC"
      hide-footer
      @hide="onReset"
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título do TCC </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Nome do Autor </b-form-text>
        <b-form-input required v-model="form.autor"></b-form-input>
        <b-form-text> Nome do Orientador </b-form-text>
        <b-form-input required v-model="form.orientador"></b-form-input>
        <b-form-text> Ano de Conclusão </b-form-text>
        <b-form-input required v-model="form.ano"></b-form-input>
        <b-form-text> Link da foto (Opcional)</b-form-text>
        <b-form-input v-model="form.imagem"></b-form-input>
        <b-form-text id="password-help-block">
          Sugestão: Para melhor harmonia entre as fotos, é recomendado que todas
          estejam na mesma proporção. Ex: 10x8, 1x1
        </b-form-text>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- MODAL REMOVER -->
    <b-modal
      id="modal-remover"
      title="Confirmar Remoção"
      ok-variant="success"
      cancel-variant="danger"
      ok-title="Confirmar"
      cancel-title="Cancelar"
      @ok="onDelete"
    >
      <p>Deseja realmente remover este item?</p>
    </b-modal>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Footer from "../../components/reutilizavel/Footer";
import Management from "../../components/manager/Management";
import Sidebar from "../../components/manager/Sidebar";
import tccService from "../../services/tccService";
import { slider, slideritem } from "vue-concise-slider";

export default {
  components: {
    Navbar,
    Footer,
    Management,
    Sidebar,
    slider,
    slideritem,
  },
  data: () => ({
    text: "",
    deleteId: "",
    fields: [
      {
        key: "titulo",
        label: "Título do TCC",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "autor",
        label: "Autor",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "orientador",
        label: "Orientador",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "ano",
        label: "Ano de Apresentação",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "remove", label: "" },
    ],
    form: {
      titulo: "",
      autor: "",
      orientador: "",
      ano: "",
      imagem: "",
    },
    items: [],
    fotos: [],
    styleDesktop: {
      height: "auto",
      width: "31.3%",
      "margin-right": "2%",
    },
    styleMobile: {
      height: "auto",
      width: "98%",
      "margin-right": "2%",
    },
    styleMedium: {
      height: "auto",
      width: "49%",
      "margin-right": "2%",
    },
    //Slider configuration [obj]
    optionsDesktop: {
      currentPage: 0,
      slidesToScroll: 2,
      thresholdDistance: "50",
      pagination: false,
    },
    optionsMobile: {
      currentPage: 0,
      slidesToScroll: 1,
      thresholdDistance: "50",
      pagination: false,
    },
  }),
  created() {
    this.getTcc();
  },
  methods: {
    async onSubmit() {
      this.form.titulo.trim();
      this.form.autor.trim();
      this.form.orientador.trim();
      this.form.ano.trim();
      this.form.imagem.trim();
      try {
        await tccService.addTcc(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Tcc",
          text: "Tcc adicionado com sucesso!",
        });
        this.getTcc();
        this.$refs["modal-tcc"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Tcc",
          text: "Houve um erro ao tentar adicionar o novo Tcc",
        });
      }
    },
    onReset() {
      this.form = {};
      this.$refs["modal-tcc"].hide();
    },
    getTcc() {
      const loading = this.$vs.loading();
      tccService.getTcc().then((response) => {
        this.items = response.data.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo);
        });
        this.items.map((item) => {
          console.log(item.foto);
          if (item.foto != undefined) {
            this.fotos.push(item);
          }
        });
        loading.close();
      });
    },
    itemRemove(obj) {
      this.deleteId = obj;
    },
    async onDelete() {
      try {
        await tccService.removeTcc(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Tcc",
          text: "Tcc removido com sucesso!",
        });
        this.fotos = [];
        this.getTcc();
        // this.items.slice(
        //   this.items.findIndex((item) => item._id == this.deleteId),
        //   1
        // );
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Tcc",
          text: "Houve um erro ao tentar remover o Tcc",
        });
      }
    },
  },
};
</script>
<style>
#button-modal {
  padding-top: 24px;
  display: flex;
  justify-content: flex-end;
}

#sidebar .active {
  border: 1px solid var(--secondary-dark-color) !important;

  color: white !important;

  background-color: var(--primary-dark-color);
}

@media screen and (max-width: 760px) {
  .mobile-nav {
    display: block !important;
  }

  #sidebar {
    display: none !important;
  }
}
</style>
