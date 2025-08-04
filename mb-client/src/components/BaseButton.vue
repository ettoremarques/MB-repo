<template>
  <button
    class="px-4 py-2"
    v-bind="$attrs"
    :class="[theme]"
    :disabled="props.disabled || props.loading"
  >
    <slot />
    <BaseLoader class="ml-2" v-if="props.loading" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import BaseLoader from "./BaseLoader.vue";

const props = defineProps({
  theme: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  border-radius: 0.4rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

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
