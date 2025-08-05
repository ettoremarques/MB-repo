<template>
  <BaseInput
    class="mb-3"
    label="Nome"
    name="nome"
    :value="clientInfo.name"
    :error="errors.name"
    required
    @update:value="(val) => updateClientInfo('name', val)"
  />
  <BaseInput
    class="mb-3"
    label="CPF"
    name="cpf"
    pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
    placeholder="XXX.XXX.XXX-XX"
    invalid-message="Use a formatação correta"
    :value="clientInfo.cpf"
    :error="errors.cpf"
    required
    @update:value="
      (val) => updateClientInfo('cpf', useFormatDocument(val, 'cpf'))
    "
  />
  <BaseInput
    class="mb-3"
    label="Data de nascimento"
    name="dataNascimento"
    type="date"
    :value="clientInfo.birthDate"
    :error="errors.birthDate"
    required
    @update:value="(val) => updateClientInfo('birthDate', val)"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
    placeholder="(XX) XXXXX-XXXX"
    invalid-message="Use a formatação correta"
    :value="clientInfo.tel"
    :error="errors.tel"
    required
    @update:value="(val) => updateClientInfo('tel', useFormatTel(val))"
  />
</template>

<script setup>
import { inject } from "vue";
import useFormatTel from "../../composables/useFormatTel";
import useFormatDocument from "../../composables/useFormatDocument";
import BaseInput from "../BaseInput.vue";

const { clientInfo, updateClientInfo, errors } = inject("clientInfo");
</script>
