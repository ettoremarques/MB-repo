<template>
  <BaseInput
    label="Endereço de e-mail"
    type="email"
    :value="value"
    :error="props.error"
    :required="props.required"
    @update:value="(val) => $emit('update:value', val)"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import BaseInput from "./BaseInput.vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:value"]);
</script>
