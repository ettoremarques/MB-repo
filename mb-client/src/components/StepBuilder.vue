<template>
  <template v-if="totalSteps">
    <div class="mb-2">
      Etapa <span class="current-step">{{ currentStep }}</span> de
      {{ totalSteps }}
    </div>
    <h1 class="fw-600">{{ currentStepObj.title }}</h1>
    <form
      class="step-builder"
      :class="[submitTriggered && 'validated']"
      :novalidate="!submitTriggered"
      @submit="handleSubmit"
    >
      <Component :is="currentStepObj.component" />
      <div class="mt-3 action-buttons d-flex">
        <BaseButton
          v-if="unref(currentStep) !== 1"
          type="button"
          theme="secondary"
          :disabled="loading"
          @click="() => currentStep--"
        >
          Voltar
        </BaseButton>
        <BaseButton type="submit" :loading="loading">
          {{ isLastStep ? "Cadastrar" : "Continuar" }}
        </BaseButton>
      </div>
    </form>
  </template>
</template>

<script setup>
import { ref, defineProps, computed, unref, defineEmits } from "vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submit"]);

const currentStep = ref(1);
const submitTriggered = ref(false);

const totalSteps = computed(() => props.steps.length);
const isLastStep = computed(() => unref(currentStep) === unref(totalSteps));
const currentStepObj = computed(() => props.steps[unref(currentStep) - 1]);

const handleSubmit = (e) => {
  e.preventDefault();
  const isFormValid = e.target.checkValidity();

  if (!isFormValid) {
    submitTriggered.value = true;
    return;
  }

  if (unref(isLastStep)) {
    emit("submit");
    return;
  }

  currentStep.value++;
  submitTriggered.value = false;
};
</script>

<style lang="scss" scoped>
.current-step {
  color: var(--primary-color);
}

.action-buttons {
  gap: 1rem;

  button {
    flex: 1 1;
  }
}

.validated:deep() {
  input:invalid {
    outline: 2px solid red;
  }
}
</style>
