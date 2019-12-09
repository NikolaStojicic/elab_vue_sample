<template>
  <div>
    <Navbar />

    <div class="container mt-5">
      <div class="mt-1 container-fluid text-center">
        <div class="row">
          <div
            v-for="(item, name) in budget"
            :key="name"
            class="col-sm-12 col-md-4"
          >
            <Button :name="name" :value="item" />
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col-sm-12 col-md-4">
            <BudgetSection
              id="greenfix"
              :listItems="incomeList"
              labelType="success"
            />
          </div>
          <div id="inputs" class="col-sm-12 col-md-4">
            <Form @insertEvent="insertNewBudget" />
          </div>
          <div class="col-sm-12 col-md-4">
            <BudgetSection :listItems="expensesList" labelType="danger" />
          </div>
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
import { mapActions, mapGetters } from "vuex";
import { isNumber } from "util";
export default {
  components: {
    Button,
    Navbar,
    BudgetSection,
    Form
  },
  methods: {
    ...mapActions(["addIncome", "addExpense", "removeIncome", "removeExpense"]),
    insertNewBudget(eventData) {
      if (!isNumber(eventData.iznos)) return;

      if (eventData.iznos) {
        let newItem = {
          opis: eventData.opis,
          iznos: eventData.iznos
        };

        eventData.iznos > 0
          ? this.addIncome(newItem)
          : this.addExpense(newItem);
      }
    }
  },
  computed: {
    ...mapGetters([
      "sumIncomes",
      "sumExpenses",
      "balance",
      "incomeList",
      "expensesList"
    ]),
    budget() {
      return {
        income: this.sumIncomes,
        balance: this.balance,
        expenses: this.sumExpenses
      };
    }
  }
};
</script>

<style scoped>
@media (max-width: 767px) {
  #inputs {
    color: red;
    order: 1;
  }
  #greenfix {
    margin-top: 1em;
  }
}
</style>
