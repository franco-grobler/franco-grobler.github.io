<template>
  <NuxtLink :to="`/projects/${slug}`">
    <UCard class="bouncing-card w-full">
      <template #header>
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-medium">
            {{ title }}
          </h3>
          <UButton
            icon="i-lucide-arrow-right"
            variant="link"
            class="text-muted-foreground"
          />
        </div>
      </template>

      <p class="text-muted-foreground">
        {{ description }}
      </p>

      <div class="mt-3 flex flex-row gap-2">
        <Chip
          v-for="(tag, idx) in tags.toSorted()"
          :key="idx"
          :text="tag"
        />
      </div>

      <div
        v-if="impact"
        class="bg-background mt-4 rounded-lg border border-white/10 p-4"
      >
        {{ impact }}
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
    tags: string[];
    impact?: string;
    slug: string;
  }>();
</script>
