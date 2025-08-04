<!-- https://cssloaders.github.io/ -->
<template>
  <span class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
