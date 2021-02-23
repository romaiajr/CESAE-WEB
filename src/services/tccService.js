import api from "@/api";
export default {
  getTcc: () => {
    return api.post("/tcc-get");
  },
  addTcc: (obj) => {
    return api.post("/tcc-add", obj);
  },
  removeTcc: (obj) => {
    return api.post("/tcc-remove", { data: obj });
  },
};
