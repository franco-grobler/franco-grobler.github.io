<template>
  <UPage class="mt-20">
    <h1 class="mb-6 text-4xl font-medium sm:text-5xl">
      {{ title }}
    </h1>

    <p class="text-muted-foreground max-w-3xl text-xl">
      {{ description }}
    </p>

    <div class="mt-16">
      <slot />
    </div>
  </UPage>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
  }>();
</script>
