<template>
  <UCard class="w-full">
    <template #header>
      <div class="flex flex-row justify-between">
        <h3 class="text-xl font-medium">
          {{ title }}
        </h3>
        <UButton
          icon="i-lucide-arrow-right"
          variant="link"
          :to="`/projects/${slug}`"
          class="text-muted-foreground"
        />
      </div>
    </template>

    <p class="text-muted-foreground">
      {{ description }}
    </p>

    <div class="mt-3 flex flex-row gap-2">
      <Chip
        v-for="(tag, idx) in tags"
        :key="idx"
        :text="tag"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
    tags: string[];
    slug: string;
  }>();
</script>
