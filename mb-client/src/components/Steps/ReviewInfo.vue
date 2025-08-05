<template>
  <BaseEmailinput
    class="mb-3"
    :value="clientInfo.email"
    :error="errors?.email"
    required
    @update:value="(val) => updateClientInfo('email', val)"
  />
  <Component :is="isClientJuridic ? JuridicPersonForm : NaturalPersonForm" />
  <Password class="mt-3" />
</template>

<script setup>
import { computed, inject, unref } from "vue";
import NaturalPersonForm from "./NaturalPersonForm.vue";
import JuridicPersonForm from "./JuridicPersonForm.vue";
import Password from "./Password.vue";
import BaseEmailinput from "../BaseEmailinput.vue";

const { clientInfo, updateClientInfo, errors } = inject("clientInfo");

const isClientJuridic = computed(
  () => unref(clientInfo)?.personType === "juridic"
);
</script>
