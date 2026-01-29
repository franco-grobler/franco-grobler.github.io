<template>
  <section class="flex w-full flex-col gap-4">
    <!-- sub-title -->
    <div
      class="bg-secondary text-muted-foreground mb-6 inline-block w-fit rounded-full border border-white/10 px-4 py-1.5 text-sm"
    >
      {{ details.subtitle }}
    </div>

    <!-- title -->
    <div>
      <h1
        class="mb-6 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl"
      >
        {{ details.title }}
      </h1>
    </div>

    <!-- description -->
    <div>
      <p class="text-muted-foreground mb-8 max-w-2xl text-xl">
        {{ details.description }}
      </p>
    </div>

    <!-- links -->
    <div class="flex flex-wrap gap-4">
      <UButton
        v-for="(l, idx) of details.links"
        :key="idx"
        :to="l.to"
        :label="l.label"
        :trailing-icon="l.icon"
        class="rounded-lg px-6 py-3 capitalize transition-colors"
        :class="l.class"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { IndexCollectionItem } from "@nuxt/content";

  defineProps<{ details: IndexCollectionItem["intro"] }>();
</script>
