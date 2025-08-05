<template>
  <BaseInput
    class="mb-3"
    label="Endereço de e-mail"
    type="email"
    :value="clientInfo.email"
    :error="errors.email"
    @update:value="(val) => updateClientInfo('email', val)"
  />
  <Component :is="isClientJuridic ? JuridicPersonForm : NaturalPersonForm" />
  <BaseInput
    class="mt-3"
    label="Sua senha"
    name="password"
    type="password"
    :value="clientInfo.password"
    :error="errors.password"
    @update:value="(val) => updateClientInfo('password', val)"
  />
</template>

<script setup>
import { computed, inject, unref } from "vue";
import BaseInput from "../BaseInput.vue";
import NaturalPersonForm from "./NaturalPersonForm.vue";
import JuridicPersonForm from "./JuridicPersonForm.vue";

const { clientInfo, updateClientInfo, errors } = inject("clientInfo");

const isClientJuridic = computed(
  () => unref(clientInfo)?.personType === "juridic"
);
</script>
