<template>
  <UFooter
    class="bg-background z-10"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="link"
          color="neutral"
          size="md"
          variant="ghost"
        />
      </template>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
  import { useAppConfig } from "#app";

  const { footer } = useAppConfig();
</script>
