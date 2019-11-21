<template>
  <div @clearFields="clearFields" class="alert alert-primary item-container">
    <div class="input-group mb-3">
      <input v-model="inputs.opis" type="text" class="form-control" placeholder="Opis" />
    </div>
    <div class="input-group mb-3">
      <input v-model="inputs.iznos" type="text" class="form-control" placeholder="Iznos" />
    </div>
    <button @click="insertEvent" type="button" class="btn btn-primary btn-block">Unesi</button>
    <button @click="clearFields" type="button" class="btn btn-secondary btn-block">Poništi</button>
  </div>
</template>

<script>
export default {
  methods: {
    insertEvent() {
      this.$emit("insertEvent", this.inputs);
      this.clearFields();
    },
    clearFields() {
      this.inputs.opis = "";
      this.inputs.iznos = "";
    }
  },
  data() {
    return {
      inputs: {
        opis: "",
        iznos: ""
      }
    };
  }
};
</script>
