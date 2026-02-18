<template>
  <UCard>
    <template #header>
      <h2 class="text-2xl font-medium transition-colors">
        {{ title }}
      </h2>
    </template>

    <slot />

    <template
      v-if="'footer' in $slots"
      #footer
    >
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>
