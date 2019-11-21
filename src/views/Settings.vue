<template>
  <div>
    <Navbar />
    <div style="max-width: 500px" class="container pt-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Valuta</span>
        </div>
        <input v-model="currency" type="text" class="form-control" placeholder="Valuta" />
      </div>
      <router-link to="/">
        <button
          @click="$store.commit('changeCurrency',currency)"
          type="button"
          class="btn btn-primary btn-block"
        >Unesi</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  mounted() {
    this.currency = this.$store.state.currency;
  },
  data() {
    return {
      currency: ""
    };
  }
};
</script>

