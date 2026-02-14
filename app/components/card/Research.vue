<template>
  <NuxtLink :to="`/research/${slug}`">
    <UCard class="bouncing-card w-full">
      <template #header>
        <div class="flex flex-col">
          <div
            class="text-muted-foreground mb-4 flex items-center gap-3 text-sm"
          >
            <NuxtTime
              :datetime="date"
              day="numeric"
              month="short"
              year="numeric"
            />
            <span> · </span>
            <span> {{ readTime }} min read </span>
          </div>
          <h3 class="text-xl font-medium">
            {{ title }}
          </h3>
        </div>
      </template>

      <p class="text-muted-foreground">
        {{ description }}
      </p>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    date: string;
    readTime: number;
    description: string;
    slug: string;
  }>();
</script>
