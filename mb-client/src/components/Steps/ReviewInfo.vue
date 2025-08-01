<template>
  <BaseInput class="mb-3" label="Endereço de e-mail" type="email" />
  <Component
    :is="isClientJuridic ? JuridicPersonForm : NaturalPersonForm"
  />
  <BaseInput class="mt-3" label="Sua senha" name="password" type="password" />
</template>

<script setup>
import { computed, inject, unref } from "vue";
import BaseInput from "../BaseInput.vue";
import NaturalPersonForm from "./NaturalPersonForm.vue";
import JuridicPersonForm from "./JuridicPersonForm.vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");

const isClientJuridic = computed(() => unref(clientInfo)?.personType);
</script>

<style lang="sass" scoped></style>
