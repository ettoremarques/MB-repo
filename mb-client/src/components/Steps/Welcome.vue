<template>
  <BaseInput class="mb-3" label="Endereço de e-mail" type="email" required />
  <label>
    <input name="personType" type="radio" value="natural" required />
    Pessoa Física
  </label>
  <label>
    <input name="personType" type="radio" value="juridic" required />
    Pessoa Juridica
  </label>
</template>

<script setup>
import BaseInput from "../BaseInput.vue";
</script>

<style lang="sass" scoped></style>
