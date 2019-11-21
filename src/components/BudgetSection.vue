<template>
  <div :class="`alert alert-${labelType} item-container`">
    <div
      v-for="(item, index) in listItems"
      :key="index"
      class="alert alert-warning alert-dismissible fade show"
    >
      <strong>{{ item.opis }}</strong>
      {{ item.iznos }} {{$store.state.currency}}
      <button
        @click="listItems.splice(index, 1)"
        type="button"
        class="close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array
    },
    labelType: {
      type: String,
      default: "primary"
    }
  }
};
</script>
