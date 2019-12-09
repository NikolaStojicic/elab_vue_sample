<template>
  <div>
    <Navbar />
    <div
      @keydown.enter="
        changeCurrency(currency);
        $router.push('/');
      "
      style="max-width: 500px"
      class="container pt-5"
    >
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Valuta</span>
        </div>
        <input
          v-model="currency"
          type="text"
          class="form-control"
          placeholder="Currency"
        />
      </div>

      <button
        @click="
          changeCurrency(currency);
          $router.push('/');
        "
        type="button"
        class="btn btn-primary btn-block"
      >
        Change
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Navbar
  },
  computed: {
    // map `this.getCurrency` to `this.$store.getters.getCurrency`
    ...mapGetters(["getCurrency"])
  },
  methods: {
    // map `this.changeCurrency(currency)` to `this.$store.commit('changeCurrency', currency)`
    ...mapMutations(["changeCurrency"])
  },
  mounted() {
    this.currency = this.getCurrency;
  },
  data() {
    return {
      currency: ""
    };
  }
};
</script>
