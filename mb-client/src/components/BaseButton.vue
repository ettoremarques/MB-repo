<template>
  <button
    class="px-4 py-2"
    :type="type"
    :class="[theme]"
    :disabled="props.disabled || props.loading"
    @click="$emit('click')"
  >
    <slot />
    <BaseLoader v-if="props.loading" class="ml-2" />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
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
  type: {
    type: String,
    default: "text",
  },
});

const emits = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  border-radius: 0.4rem;
  cursor: pointer;

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
