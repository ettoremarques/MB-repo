<template>
  <BaseInput
    class="mb-3"
    label="Nome"
    name="nome"
    :required="props.validateForm"
  />
  <BaseInput
    class="mb-3"
    label="CPF"
    name="cpf"
    pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
    placeholder="XXX.XXX.XXX-XX"
    invalid-message="Use a formatação correta"
    :required="props.validateForm"
  />
  <BaseInput
    class="mb-3"
    label="Data de nascimento"
    name="dataNascimento"
    type="date"
    :required="props.validateForm"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}"
    placeholder="(XX) XXXXX-XXXX"
    invalid-message="Use a formatação correta"
    :required="props.validateForm"
  />
</template>

<script setup>
import BaseInput from "../BaseInput.vue";
import { defineProps, inject } from "vue";

const props = defineProps({
  validateForm: {
    type: Boolean,
    default: false,
  },
});

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
