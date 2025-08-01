<template>
  <BaseInput
    class="mb-3"
    label="Razão social"
    name="razaoSocial"
    :required="props.validateForm"
  />
  <BaseInput
    class="mb-3"
    label="CNPJ"
    name="cnpj"
    pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
    placeholder="XX.XXX.XXX/XXXX-XX"
    invalid-message="Use a formatação correta"
    :required="props.validateForm"
  />
  <BaseInput
    class="mb-3"
    label="Data de abertura"
    name="dataAbertura"
    type="date"
    :required="props.validateForm"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="([0-9]{2}) [0-9]{4}-[0-9]{4}"
    placeholder="(XX) XXXX-XXXX"
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
