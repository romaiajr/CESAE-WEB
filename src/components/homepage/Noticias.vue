<template>
  <div id="noticias">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">MURAL CESAE</h2>
          <div id="buttons-equipe" v-show="isLogged">
            <b-button size="sm" class="btn-form" v-b-modal.modal-addNoticia
              ><p>Adicionar Noticia</p></b-button
            >
            <b-button size="sm" class="btn-form" v-b-modal.modal-removeNoticia
              ><p>Remover Noticia</p></b-button
            >
          </div>
        </div>
        <div class="col-0 col-md-3" />
        <div class="col-12 col-md-6">
          <b-carousel
            id="carousel-1"
            :interval="5000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 6px 6px 12px #333;"
            :key="this.componentKey"
          >
            <b-carousel-slide
              v-for="noticia in noticias"
              :key="noticia.id"
              :caption="noticia.titulo"
              :text="noticia.texto"
              :img-src="noticia.link"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-addNoticia"
      ref="modal-add-noticia"
      title="Adicionar Notícia ao Mural"
      @hide="resetForm"
      hide-footer
      ><b-form @submit.prevent="onSubmit" @reset="resetForm">
        <b-form-text> Título da Notícia (Opcional)</b-form-text>
        <b-form-input v-model="form.titulo"></b-form-input>
        <b-form-text> Descrição da Notícia (Opcional) </b-form-text>
        <b-form-input v-model="form.texto"></b-form-input>
        <b-form-text> Link para Imagem </b-form-text>
        <b-form-input required v-model="form.link"></b-form-input>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
    <b-modal
      id="modal-removeNoticia"
      ref="modal-remove-noticia"
      title="Remover Notícia do Mural"
      hide-footer
      ><b-form @reset="resetForm">
        <b-form-text> Selecione a Notícia a ser Removida</b-form-text>
        <b-form-select v-model="selected_noticia">
          <b-form-select-option
            v-for="noticia in noticias"
            :key="noticia._id"
            :value="noticia._id"
            >{{ noticia.titulo }}</b-form-select-option
          ></b-form-select
        >
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button v-b-modal.modal-confirm variant="primary">Remover</b-button>
        </div>
      </b-form>
    </b-modal>
    <b-modal
      id="modal-confirm"
      ref="modal-confirm"
      title="Remover Notícia do Mural"
      ok-title="Remover"
      ok-variant="success"
      cancel-variant="danger"
      @ok="onDelete"
    >
      Deseja Remover a Notícia do Mural?
    </b-modal>
  </div>
</template>
<script>
import noticiasService from "../../services/noticiasService";
export default {
  data: () => ({
    isLogged: false,
    noticias: [],
    noticiasDialog: false,
    form: {
      titulo: "",
      texto: "",
      link: "",
    },
    selected_noticia: "",
    componentKey: 0,
  }),
  methods: {
    getNoticias() {
      noticiasService.getNoticias().then((response) => {
        this.noticias = response.data.reverse();
      });
    },

    async onSubmit() {
      this.form.titulo.trim();
      this.form.texto.trim();
      this.form.link.trim();
      try {
        await noticiasService.addNoticia(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Notícia",
          text: "Notícia adicionado com sucesso!",
        });
        this.getNoticias();
        this.componentKey++;
        this.$refs["modal-add-noticia"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Notícia",
          text: "Houve um erro ao tentar adicionar a nova Notícia",
        });
      }
    },

    async onDelete() {
      try {
        console.log(`id: ${this.selected_noticia}`);
        await noticiasService.removeNoticia(this.selected_noticia);
        this.$vs.notification({
          color: "success",
          title: "Remover Notícia",
          text: "Notícia Removida com sucesso!",
        });
        this.getNoticias();
        this.componentKey++;
        this.$refs["modal-remove-noticia"].hide();
        this.$refs["modal-confirm"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Notícia",
          text: "Houve um erro ao tentar remover a Notícia",
        });
      }
    },

    openNoticias() {
      this.noticiasDialog = true;
    },
    resetForm() {
      this.form = {};
      this.$refs["modal-add-noticia"].hide();
    },
  },
  created() {
    this.getNoticias();
    this.isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
  },
};
</script>
<style>
#noticias {
  padding: 32px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
}
#noticias h6 {
  line-height: 145%;
}

#carousel-1 img {
  height: 300px !important;
}

#carousel-1 h3 {
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
}

/* .carousel-caption {
  background: rgba(0, 0, 0, 0.2);
} */

#buttons-equipe {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  float: right;
  width: 100%;
}
#buttons-equipe .btn-form {
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
  margin: 0 8px 0 0 !important;
}
/* #buttons-equipe .btn-form:first-of-type {
  margin-right: 8px !important;
} */
#buttons-equipe .btn-form:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}
#buttons-equipe .btn-form:hover {
  background-color: var(--secondary-dark-color) !important;
}

@media screen and (max-width: 760px) {
  #carousel-1 img {
    height: 240px !important;
  }

  #carousel-1 {
    margin-top: 8px;
  }
  #carousel-1 h3 {
    font-size: 24px;
  }
}
</style>
