<template>
  <div @clearFields="clearFields" class="alert alert-primary item-container">
    <div class="input-group mb-3">
      <input
        v-model="inputs.opis"
        type="text"
        class="form-control"
        placeholder="Description"
      />
    </div>
    <div class="input-group mb-3">
      <input
        v-model.number="inputs.iznos"
        type="text"
        class="form-control"
        placeholder="Price"
      />
    </div>
    <button
      @click="insertEvent"
      type="button"
      class="btn btn-primary btn-block"
    >
      Add
    </button>
    <button
      @click="clearFields"
      type="button"
      class="btn btn-secondary btn-block"
    >
      Clear
    </button>
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
