<template>
  <UCard
    class="w-full"
    :to="`/research/${slug}`"
  >
    <template #header>
      <div class="flex flex-col">
        <div class="text-muted-foreground mb-4 flex items-center gap-3 text-sm">
          <span> {{ dateString }} </span>
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
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    date: string;
    readTime: number;
    description: string;
    slug: string;
  }>();
  const dateString = computed<string>(() =>
    new Date(props.date).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  );
</script>
