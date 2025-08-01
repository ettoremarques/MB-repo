<template>
  <div class="container py-3">
    <StepBuilder :steps="steps" />
  </div>
</template>

<script setup>
import { ref, computed, provide } from "vue";
import StepBuilder from "./components/StepBuilder.vue";
import Welcome from "./components/Steps/Welcome.vue";
import JuridicPersonForm from "./components/Steps/JuridicPersonForm.vue";
import NaturalPersonForm from "./components/Steps/NaturalPersonForm.vue";
import Password from "./components/Steps/Password.vue";
import ReviewInfo from "./components/Steps/ReviewInfo.vue";

const clientInfo = ref({});

const steps = computed(() => [
  {
    component: Welcome,
    title: "Seja bem vindo(a)",
  },
  clientInfo.personType === "juridic"
    ? {
        component: JuridicPersonForm,
        title: "Pessoa Jurídica",
      }
    : {
        component: NaturalPersonForm,
        title: "Pessoa Física",
      },
  {
    component: Password,
    title: "Senha de acesso",
  },
  {
    component: ReviewInfo,
    title: "Revise suas informações",
  },
]);

const updateClientInfo = (key, value) => {
  clientInfo.value[key] = value;
};

provide("clientInfo", { clientInfo, updateClientInfo });
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 500px;
  }
}
</style>
