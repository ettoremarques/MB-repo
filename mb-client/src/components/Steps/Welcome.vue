<template>
  <BaseInput
    :value="clientInfo.email"
    class="mb-3"
    label="Endereço de e-mail"
    type="email"
    required
    @update:value="(val) => updateClientInfo('email', val)"
  />
  <label>
    <input
      name="personType"
      type="radio"
      value="natural"
      :checked="clientInfo.personType === 'natural'"
      required
      @change="(e) => updateClientInfo('personType', e.target.value)"
    />
    Pessoa Física
  </label>
  <label>
    <input
      name="personType"
      type="radio"
      value="juridic"
      :checked="clientInfo.personType === 'juridic'"
      required
      @change="(e) => updateClientInfo('personType', e.target.value)"
    />
    Pessoa Juridica
  </label>
</template>

<script setup>
import { inject } from "vue";
import BaseInput from "../BaseInput.vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
