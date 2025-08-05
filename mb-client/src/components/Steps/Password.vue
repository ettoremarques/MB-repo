<template>
  <BaseInput
    label="Sua senha"
    name="password"
    type="password"
    :value="clientInfo.password"
    required
    @update:value="(val) => updateClientInfo('password', val)"
  />
</template>

<script setup>
import { inject } from "vue";
import BaseInput from "../BaseInput.vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>
