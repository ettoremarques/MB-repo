<template>
  <BaseInput
    class="mb-3"
    label="Nome"
    name="nome"
    required
    :value="clientInfo.name"
    @update:value="(val) => updateClientInfo('name', val)"
  />
  <BaseInput
    class="mb-3"
    label="CPF"
    name="cpf"
    pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
    placeholder="XXX.XXX.XXX-XX"
    invalid-message="Use a formatação correta"
    required
    :value="clientInfo.cpf"
    @update:value="(val) => updateClientInfo('cpf', val)"
  />
  <BaseInput
    class="mb-3"
    label="Data de nascimento"
    name="dataNascimento"
    type="date"
    required
    :value="clientInfo.birthDate"
    @update:value="(val) => updateClientInfo('birthDate', val)"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
    placeholder="(XX) XXXXX-XXXX"
    invalid-message="Use a formatação correta"
    required
    :value="clientInfo.tel"
    @update:value="(val) => updateClientInfo('tel', val)"
  />
</template>

<script setup>
// I've got the pattern for brazilian tel from this gist
// https://gist.github.com/claudiosanches/9200536

import BaseInput from "../BaseInput.vue";
import { defineProps, inject } from "vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
