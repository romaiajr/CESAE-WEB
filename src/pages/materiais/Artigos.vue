<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item
        class="mobile-nav"
        to="/producoes/trabalhos-de-conclusao-de-curso"
        exact
        >Trabalhos de Conclusão de Curso</b-nav-item
      >
      <b-nav-item class="mobile-nav">Artigos</b-nav-item>
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
          <Sidebar active="3" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            nome="Artigos"
            sortBy="Nome"
            :fields="fields"
            @itemRemove="itemRemove"
          />
          <Footer />
        </div>
      </div>
    </div>

    <b-modal
      id="modal-1"
      ref="modal-artigos"
      title="Adicionar Novo Artigo"
      hide-footer
      @hide="onReset"
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título do Artigo </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Nome do(s) Autor(es) </b-form-text>
        <b-form-input required v-model="form.autor"></b-form-input>
        <b-form-text> Link para Acesso </b-form-text>
        <b-form-input required v-model="form.link"></b-form-input>
        <b-form-text id="password-help-block">
          O link para acesso deve seguir o exemplo: "http://www.uefs.br/"
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
import artigoService from "../../services/artigoService";

export default {
  components: {
    Navbar,
    Footer,
    Management,
    Sidebar,
  },
  data: () => ({
    text: "",
    deleteId: "",
    fields: [
      {
        key: "titulo",
        label: "Título do Artigo",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "autor",
        label: "Autor(es)",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "link", label: "Link" },
      { key: "remove", label: "" },
    ],
    form: {
      titulo: "",
      autor: "",
      link: "",
    },

    items: [],
  }),
  created() {
    this.getArtigos();
  },
  methods: {
    async onSubmit() {
      this.form.titulo.trim();
      this.form.autor.trim();
      this.form.link.trim();
      try {
        await artigoService.addArtigo(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Artigo",
          text: "Artigo adicionado com sucesso!",
        });
        this.getArtigos();
        this.$refs["modal-artigos"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Artigo",
          text: "Houve um erro ao tentar adicionar o novo artigo",
        });
      }
    },
    onReset() {
      this.form = {};
      this.$refs["modal-artigos"].hide();
    },
    getArtigos() {
      const loading = this.$vs.loading();
      artigoService.getArtigos().then((response) => {
        this.items = response.data.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo);
        });
        loading.close();
      });
    },
    itemRemove(obj) {
      this.deleteId = obj;
    },
    async onDelete() {
      try {
        await artigoService.removeArtigo(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Artigo",
          text: "Artigo removido com sucesso!",
        });
        this.getArtigos();
        // this.items.slice(
        //   this.items.findIndex((item) => item._id == this.deleteId),
        //   1
        // );
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Artigo",
          text: "Houve um erro ao tentar remover o artigo",
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
