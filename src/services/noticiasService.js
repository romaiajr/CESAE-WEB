import api from "@/api";
export default {
  getNoticias: () => {
    return api.post("/noticias-get");
  },
  addNoticia: (obj) => {
    return api.post("/noticias-add", obj);
  },
  removeNoticia: (obj) => {
    console.log(obj);
    return api.post("/noticias-remove", { data: obj });
  },
};
