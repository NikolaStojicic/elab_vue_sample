import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import currency from "./modules/currency";
import budget from "./modules/budget";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    currency,
    budget
  },
  plugins: [new VuexPersistence().plugin]
});
