<template>
  <button class="px-4 py-2" v-bind="$attrs" :class="[theme]">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  border-radius: 0.4rem;

  &.primary {
    background-color: var(--primary-color);
    color: var(--white);
  }

  &.secondary {
    background-color: var(--white);
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
}
</style>
