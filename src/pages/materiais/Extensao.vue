<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav">Projetos de Extensão</b-nav-item>
      <b-nav-item
        class="mobile-nav"
        to="/producoes/trabalhos-de-conclusao-de-curso"
        exact
        >Trabalhos de Conclusão de Curso</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/artigos" exact
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
          <Sidebar active="2" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :fields="fields"
            :conteudo="items"
            nome="Projetos de Extensão"
            sortBy="nome"
            @itemRemove="itemRemove"
          />
          <Footer />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-extensao"
      title="Adicionar Novo Projeto de Extensão"
      @hide="onReset"
      hide-footer
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título do Projeto de Extensão</b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text>
          Título do Projeto Maior ao qual está Vinculado</b-form-text
        >
        <b-form-input required v-model="form.projeto_vinculado"></b-form-input>
        <b-form-text> Nome do(s) Bolsista(as) </b-form-text>
        <b-form-input required v-model="form.bolsista"></b-form-input>
        <b-form-text> Nome do(s) Orientador(es) </b-form-text>
        <b-form-input required v-model="form.orientador"></b-form-input>
        <b-form-text> Período de Vigência </b-form-text>
        <b-form-input required v-model="form.periodo"></b-form-input>
        <b-form-text id="password-help-block">
          O Período de Vigência deve estar no formato AAAA-AAAA: "2020-2021"
        </b-form-text>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
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
import extensaoService from "../../services/extensaoService";
export default {
  components: {
    Navbar,
    Footer,
    Management,
    Sidebar,
  },
  data: () => ({
    form: {
      titulo: "",
      bolsista: "",
      orientador: "",
      periodo: "",
      projeto_vinculado: "",
    },
    deleteId: "",
    fields: [
      {
        key: "titulo",
        label: "Tema do Projeto",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "projeto_vinculado",
        label: "Projeto Vinculado",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "bolsista",
        label: "Bolsista",
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
        key: "periodo",
        label: "Período",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "remove", label: "" },
    ],
    items: [],
  }),
  created() {
    this.getProjetos();
  },
  methods: {
    async onSubmit() {
      this.form.titulo.trim();
      this.form.bolsista.trim();
      this.form.orientador.trim();
      this.form.projeto_vinculado.trim();
      this.form.periodo.trim();
      try {
        await extensaoService.addProjeto(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Projeto de Extensão",
          text: "Projeto de Extensão adicionado com sucesso!",
        });

        this.$refs["modal-extensao"].hide();
        this.getProjetos();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Projeto de Extensão",
          text: "Houve um erro ao tentar adicionar o novo Projeto de Extensão",
        });
      }
    },
    onReset() {
      this.form = {};
      this.$refs["modal-extensao"].hide();
    },
    getProjetos() {
      const loading = this.$vs.loading();
      extensaoService.getProjetos().then((response) => {
        loading.close();
        this.items = response.data.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo);
        });
      });
    },
    itemRemove(obj) {
      this.deleteId = obj;
    },
    async onDelete() {
      try {
        await extensaoService.removeProjeto(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Projeto de Extensão",
          text: "Projeto de Extensão removido com sucesso!",
        });
        this.getProjetos();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Projeto de Extensão",
          text: "Houve um erro ao tentar remover o Projeto de Extensão",
        });
      }
    },
  },
};
</script>
<style>
#sidebar .active {
  border: 1px solid var(--primary-dark-color) !important;

  color: white !important;

  background-color: var(--secondary-dark-color);
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
