<template>
  <div
    class="bg-background/80 fixed top-0 right-0 left-0 z-50 border-b border-white/10 backdrop-blur-xl"
  >
    <div class="sticky bg-red-600 text-center">UNDER DEVELOPMENT</div>
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
    >
      <RouterLink
        :to="header.home.to"
        class="text-foreground hover:text-accent text-xl font-medium transition-colors"
      >
        {{ header.home.label }}
      </RouterLink>

      <UNavigationMenu
        :items="links"
        class="hidden sm:flex"
        color="neutral"
        exact
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

      <div class="flex flex-row gap-4 sm:hidden">
        <UDropdownMenu
          :items="mobileLinks"
          :ui="{
            content: 'w-48',
          }"
        >
          <UButton
            icon="i-lucide-menu"
            color="neutral"
            variant="ghost"
            aria-label="Open navigation menu"
          />

          <template #content-bottom>
            <div class="flex flex-col gap-1">
              <USeparator />
              <div class="p-1.5">
                <BtnColourMode with-label />
              </div>
            </div>
          </template>
        </UDropdownMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem, DropdownMenuItem } from "@nuxt/ui";

  import { useAppConfig } from "#app";

  const props = defineProps<{
    links: NavigationMenuItem[];
  }>();
  const links = toRef(props.links);

  const { header } = useAppConfig();

  const mobileLinks = computed(() =>
    links.value.map<DropdownMenuItem>((l) => {
      return {
        type: "link",
        icon: l.icon,
        label: l.label,
        to: l.to,
      };
    }),
  );
</script>
