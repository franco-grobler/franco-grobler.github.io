<template>
  <div
    class="bg-background/80 fixed top-0 right-0 left-0 z-50 border-b border-white/10 backdrop-blur-xl"
  >
    <div
      className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex h-16 items-center justify-between"
    >
      <RouterLink
        :to="header.home.to"
        class="text-foreground hover:text-accent text-xl font-medium transition-colors"
      >
        {{ header.home.label }}
      </RouterLink>

      <UNavigationMenu
        :items="links"
        class="w-fit"
        color="neutral"
        highlight
        highlight-color="accent"
        variant="link"
        :ui="{
          linkLeadingIcon: 'hidden',
        }"
      >
        <template #list-trailing>
          <BtnColourMode />
        </template>
      </UNavigationMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";

  import { useAppConfig } from "#app";

  defineProps<{
    links: NavigationMenuItem[];
  }>();

  const { header } = useAppConfig();
</script>
