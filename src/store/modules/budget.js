const state = {
  incomeList: [],
  expensesList: []
};

const getters = {
  incomeList: state => state.incomeList,
  expensesList: state => state.expensesList,
  sumIncomes: state =>
    state.incomeList.reduce((total, el) => (total += el.iznos), 0),
  sumExpenses: state =>
    state.expensesList.reduce((total, el) => (total += el.iznos), 0),
  balance: (state, getters) => getters.sumIncomes + getters.sumExpenses
};

const actions = {
  addIncome: ({ commit }, newIncome) => commit("addIncome", newIncome),
  addExpense: ({ commit }, newExpense) => commit("addExpense", newExpense),
  removeIncome: ({ commit }, index) => commit("removeIncome", index),
  removeExpense: ({ commit }, index) => commit("removeExpense", index)
};

const mutations = {
  addIncome: (state, newIncome) => state.incomeList.push(newIncome),
  addExpense: (state, newExpense) => state.expensesList.push(newExpense),
  removeIncome: (state, index) => state.incomeList.splice(index, 1),
  removeExpense: (state, index) => state.expensesList.splice(index, 1)
};

export default {
  state,
  getters,
  actions,
  mutations
};
