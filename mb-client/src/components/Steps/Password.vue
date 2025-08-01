<template>
  <BaseInput label="Sua senha" name="password" type="password" required />
</template>

<script setup>
import { inject } from "vue";
import BaseInput from "../BaseInput.vue";

const { clientInfo, updateClientInfo } = inject("clientInfo");
</script>

<style lang="sass" scoped></style>
