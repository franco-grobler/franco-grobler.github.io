<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import { navLinks } from "~/utils/links";
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
