<template>
  <button
    type="button"
    :class="`btn btn-${colorButton(name)} btn-lg btn-block`"
  >
    <span class="text-capitalize">{{ name }}:</span>
    {{ value }} {{ getCurrency }}
  </button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getCurrency"]),
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
