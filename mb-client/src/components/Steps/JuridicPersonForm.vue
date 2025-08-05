<template>
  <BaseInput
    class="mb-3"
    label="Razão social"
    name="razaoSocial"
    :value="clientInfo.companyName"
    :error="errors.companyName"
    required
    @update:value="(val) => updateClientInfo('companyName', val)"
  />
  <BaseInput
    class="mb-3"
    label="CNPJ"
    name="cnpj"
    pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
    placeholder="XX.XXX.XXX/XXXX-XX"
    invalid-message="Use a formatação correta"
    :value="clientInfo.cnpj"
    :error="errors.cnpj"
    required
    @update:value="
      (val) => updateClientInfo('cnpj', useFormatDocument(val, 'cnpj'))
    "
  />
  <BaseInput
    class="mb-3"
    label="Data de abertura"
    name="dataAbertura"
    type="date"
    required
    :value="clientInfo.openingDate"
    :error="errors.openingDate"
    @update:value="(val) => updateClientInfo('openingDate', val)"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
    placeholder="(XX) XXXX-XXXX"
    invalid-message="Use a formatação correta"
    :value="clientInfo.tel"
    :error="errors.tel"
    required
    @update:value="(val) => updateClientInfo('tel', useFormatTel(val))"
  />
</template>

<script setup>
import { inject } from "vue";
import useFormatDocument from "../../composables/useFormatDocument";
import useFormatTel from "../../composables/useFormatTel";
import BaseInput from "../BaseInput.vue";

const { clientInfo, updateClientInfo, errors } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
