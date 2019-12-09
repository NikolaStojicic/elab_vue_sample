const state = {
  currency: "rsd"
};

const getters = {
  getCurrency: state => state.currency
};

const actions = {};

const mutations = {
  changeCurrency: (state, newCurrency) => (state.currency = newCurrency)
};

export default {
  state,
  getters,
  actions,
  mutations
};
