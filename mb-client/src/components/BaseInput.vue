<template>
  <label v-bind="$attrs" class="d-flex flex-column">
    <slot>
      <span class="mb-1">{{ label }}</span>
    </slot>
    <input
      class="px-1 py-2"
      :class="[props.error && 'invalid']"
      :id="props.id"
      :type="props.type"
      :pattern="props.pattern"
      :name="name"
      :required="props.required"
      :placeholder="props.placeholder"
      :value="props.value"
      @invalid="(e) => setCustomRequiredMessage(e, true)"
      @input="
        (e) => {
          setCustomRequiredMessage(e, false);
          $emit('update:value', e.target.value);
        }
      "
    />
    <span v-if="props.error" class="error mt-1">{{ props.error }}</span>
  </label>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    required: true,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  pattern: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: () => Date.now() + Math.floor(Math.random() * 1024) + "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  invalidMessage: {
    type: String,
    default: "Esse campo é obrigatório",
  },
  placeholder: {
    type: String,
    default: null,
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:value"]);

const setCustomRequiredMessage = (input, invalid) => {
  if (!props.required) {
    return;
  }

  if (invalid) {
    input.target.setCustomValidity(props.invalidMessage);
  } else {
    input.target.setCustomValidity("");
  }
};
</script>

<style lang="scss" scoped>
label {
  span {
    font-size: 0.75rem;
  }

  input {
    border-style: solid;
    border-radius: 0.4rem;

    &.invalid {
      outline: 2px solid red;
    }
  }
}

.error {
  color: red;
}
</style>
