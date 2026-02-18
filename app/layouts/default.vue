<template>
  <div>
    <UContainer class="px-10 pt-4 sm:px-12 sm:pt-5 md:pt-6 lg:pt-10">
      <AppHeader :links="links" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";
  import { navLinks } from "~/utils/links";

  const route = useRoute();

  const links = computed<NavigationMenuItem[]>(() =>
    navLinks.map<NavigationMenuItem>((i) => {
      const { to } = i;
      const isActive =
        to === "/" ? route.path === "/" : route.path.startsWith(to as string);
      i.active = isActive;
      return i;
    }),
  );
</script>
