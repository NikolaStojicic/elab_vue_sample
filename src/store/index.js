import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency: "rsd"
  },
  mutations: {
    changeCurrency(state, newCurrency) {
      state.currency = newCurrency;
    }
  },
  actions: {},
  modules: {}
});
