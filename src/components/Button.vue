<template>
  <button type="button" :class="`btn btn-${colorButton(name)} btn-lg btn-block`">
    <span class="text-capitalize">{{name}}:</span>
    {{ value }} {{$store.state.currency}}
  </button>
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
    }
  },
  props: {
    name: {
      type: String,
      default: "primary"
    },
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>
