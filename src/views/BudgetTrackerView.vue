<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" style="color: white">Budget app</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/settings"
              >Settings <span class="sr-only"></span
            ></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mt-1 container-fluid text-center">
      <div class="row">
        <div v-for="(item, name) in budget" :key="name" class="col-sm">
          <button
            type="button"
            :class="`btn btn-${colorButton(name)} btn-lg btn-block`"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col-sm">
          <div id="greenalert" class="alert alert-success item-container">
            <div
              v-for="(item, index) in incomeList"
              :key="index"
              class="alert alert-warning alert-dismissible fade show"
            >
              <strong>{{ item.opis }}</strong> {{ item.iznos }}
              <button
                @click="incomeList.splice(index, 1)"
                type="button"
                class="close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div id="inputs" class="col-sm">
          <div class="alert alert-primary item-container">
            <div class="input-group mb-3">
              <input
                v-model="inputs.opis"
                type="text"
                class="form-control"
                placeholder="Opis"
              />
            </div>
            <div class="input-group mb-3">
              <input
                v-model="inputs.iznos"
                type="text"
                class="form-control"
                placeholder="Iznos"
              />
            </div>
            <button
              @click="insertNewBudget"
              type="button"
              class="btn btn-primary btn-block"
            >
              Unesi
            </button>
            <button
              @click="clearFields"
              type="button"
              class="btn btn-secondary btn-block"
            >
              Poništi
            </button>
          </div>
        </div>
        <div class="col-sm">
          <div class="alert alert-danger item-container">
            <div
              v-for="(item, index) in expensesList"
              :key="index"
              class="alert alert-warning alert-dismissible fade show"
            >
              <strong>{{ item.opis }}</strong> {{ item.iznos }}
              <button
                @click="expensesList.splice(index, 1)"
                type="button"
                class="close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    colorButton(name) {
      return name === "income"
        ? "success"
        : name === "expenses"
        ? "danger"
        : "primary";
    },
    clearFields() {
      this.inputs.opis = "";
      this.inputs.iznos = "";
    },
    insertNewBudget() {
      let iznos = parseInt(this.inputs.iznos);
      if (iznos) {
        if (iznos > 0) {
          this.incomeList.push({
            opis: this.inputs.opis,
            iznos: iznos
          });
        } else {
          this.expensesList.push({
            opis: this.inputs.opis,
            iznos: iznos
          });
        }
      }
      this.clearFields();
    }
  },
  watch: {
    incomeList() {
      let sum = 0;
      this.incomeList.forEach(el => {
        sum += el.iznos;
      });
      this.budget.income = sum;

      this.budget.balance = this.budget.income + this.budget.expenses;
    },
    expensesList() {
      let sum = 0;
      this.expensesList.forEach(el => {
        sum += el.iznos;
      });
      this.budget.expenses = sum;

      this.budget.balance = this.budget.income + this.budget.expenses;
    }
  },
  data() {
    return {
      inputs: {
        opis: "",
        iznos: ""
      },
      budget: {
        income: 0,
        balance: 0,
        expenses: 0
      },
      incomeList: [],
      expensesList: []
    };
  }
};
</script>

<style scoped>
@media (max-width: 576px) {
  #inputs {
    color: red;
    order: 1;
  }
  #greenalert {
    margin: 1em 0;
  }
}
</style>
