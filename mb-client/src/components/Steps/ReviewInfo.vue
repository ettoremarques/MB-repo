<template>
  <BaseInput
    :value="clientInfo.email"
    class="mb-3"
    label="Endereço de e-mail"
    type="email"
    @update:value="(val) => updateClientInfo('email', val)"
  />
  <Component :is="isClientJuridic ? JuridicPersonForm : NaturalPersonForm" />
  <BaseInput
    :value="clientInfo.password"
    class="mt-3"
    label="Sua senha"
    name="password"
    type="password"
    @update:value="(val) => updateClientInfo('password', val)"
  />
</template>

<script setup>
import { computed, inject, unref } from "vue";
import BaseInput from "../BaseInput.vue";
import NaturalPersonForm from "./NaturalPersonForm.vue";
import JuridicPersonForm from "./JuridicPersonForm.vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");

const isClientJuridic = computed(
  () => unref(clientInfo)?.personType === "juridic"
);
</script>

<style lang="sass" scoped></style>
