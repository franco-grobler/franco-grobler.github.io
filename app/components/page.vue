<template>
  <UPage class="mt-20">
    <h1
      v-if="title"
      class="mb-6 text-4xl font-medium sm:text-5xl"
    >
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="text-muted-foreground max-w-3xl text-xl"
    >
      {{ description }}
    </p>

    <slot name="header" />

    <div class="mt-14">
      <slot />
    </div>
  </UPage>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string;
    description?: string;
  }>();
</script>
