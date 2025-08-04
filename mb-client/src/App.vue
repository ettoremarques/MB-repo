<template>
  <div class="container py-3">
    <h1 v-if="status === STATUS.SUCCESS">Cliente cadastrado com sucesso!</h1>
    <StepBuilder
      v-else
      :steps="steps"
      :loading="status === STATUS.PENDING"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import { ref, computed, provide, unref } from "vue";
import useFetch, { STATUS } from "./composables/useFetch";
import StepBuilder from "./components/StepBuilder.vue";
import Welcome from "./components/Steps/Welcome.vue";
import JuridicPersonForm from "./components/Steps/JuridicPersonForm.vue";
import NaturalPersonForm from "./components/Steps/NaturalPersonForm.vue";
import Password from "./components/Steps/Password.vue";
import ReviewInfo from "./components/Steps/ReviewInfo.vue";

const clientInfo = ref({});
const {
  load: handleSubmit,
  status,
  errors,
} = useFetch({
  endpoint: "/registration",
  method: "POST",
  body: clientInfo,
});

const steps = computed(() => [
  {
    component: Welcome,
    title: "Seja bem vindo(a)",
  },
  unref(clientInfo).personType == "juridic"
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

const updateClientInfo = (key, value) => (clientInfo.value[key] = value);

provide("clientInfo", { clientInfo, updateClientInfo, errors });
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
