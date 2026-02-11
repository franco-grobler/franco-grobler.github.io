<template>
  <div>
    <UContainer class="px-10 pt-4 sm:px-12 sm:pt-5 md:pt-6 lg:pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { navLinks } from "~/utils/links";
</script>
