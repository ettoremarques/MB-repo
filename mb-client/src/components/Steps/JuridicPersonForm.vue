<template>
  <BaseInput
    class="mb-3"
    label="Razão social"
    name="razaoSocial"
    required
    :value="clientInfo.companyName"
    @update:value="(val) => updateClientInfo('companyName', val)"
  />
  <BaseInput
    class="mb-3"
    label="CNPJ"
    name="cnpj"
    pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
    placeholder="XX.XXX.XXX/XXXX-XX"
    invalid-message="Use a formatação correta"
    required
    :value="clientInfo.cnpj"
    @update:value="(val) => updateClientInfo('cnpj', val)"
  />
  <BaseInput
    class="mb-3"
    label="Data de abertura"
    name="dataAbertura"
    type="date"
    required
    :value="clientInfo.openingDate"
    @update:value="(val) => updateClientInfo('openingDate', val)"
  />
  <BaseInput
    label="Telefone"
    name="telefone"
    type="tel"
    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
    placeholder="(XX) XXXX-XXXX"
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
import { inject } from "vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
