<template>
  <div>
    <Navbar />
    <div class="mt-1 container-fluid text-center">
      <div class="row">
        <div v-for="(item, name) in budget" :key="name" class="col-sm">
          <Button :name="name" :value="item" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col-sm">
          <BudgetSection id="greenfix" :listItems="incomeList" labelType="success" />
        </div>
        <div id="inputs" class="col-sm">
          <Form @insertEvent="insertNewBudget" />
        </div>
        <div class="col-sm">
          <BudgetSection :listItems="expensesList" labelType="danger" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";
import BudgetSection from "@/components/BudgetSection.vue";
import Form from "@/components/Form.vue";
export default {
  async mounted() {
    this.refreshList();
  },
  components: {
    Button,
    Navbar,
    BudgetSection,
    Form
  },
  methods: {
    refreshList() {
      this.$http.get(this.backEndUrl + "expenses").then(response => {
        this.expensesList = response.data;
      });
      this.$http.get(this.backEndUrl + "incomes").then(response => {
        this.incomeList = response.data;
      });
    },
    insertNewBudget(eventData) {
      let iznos = parseInt(eventData.iznos);
      if (iznos) {
        let newItem = {
          opis: eventData.opis,
          iznos: iznos
        };

        if (iznos > 0) {
          this.$http.post(this.backEndUrl + "addincome", newItem).then(() => {
            this.refreshList();
          });
        } else {
          this.$http.post(this.backEndUrl + "addexpense", newItem).then(() => {
            this.refreshList();
          });
        }
      }
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
      backEndUrl: "http://localhost/elab_php_vue/public/index.php/",
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
  #greenfix {
    margin-top: 1em;
  }
}
</style>
