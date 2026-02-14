<template>
  <NuxtLink :to="stem">
    <UCard
      class="bg-secondary group flex h-full flex-col rounded-xl border border-white/10 p-8 transition-all hover:border-white/20"
      :ui="{
        body: 'p-0 px-2 py-0',
      }"
    >
      <template #header>
        <div class="flex flex-col">
          <div class="mb-4 flex flex-row justify-between">
            <span class="text-accent text-sm">
              {{ topic }}
            </span>
            <span
              v-if="draft"
              class="top-4 right-4 rounded border border-amber-500/50 px-2 py-1 text-[10px] font-bold tracking-widest text-amber-500 uppercase"
            >
              Draft
            </span>
          </div>
          <h2
            class="group-hover:text-accent mb-3 text-2xl font-medium transition-colors"
          >
            {{ title }}
          </h2>
        </div>
      </template>

      <template #default>
        <ContentRenderer
          class="-mt-8"
          :value="excerpt"
        />
      </template>

      <template #footer>
        <div class="text-muted-foreground mb-4 flex items-center gap-3 text-sm">
          <NuxtTime
            :datetime="date"
            day="numeric"
            month="short"
            year="numeric"
          />
          <span> · </span>
          <div class="flex items-center gap-1">
            <UIcon name="lucide:clock" />
            <span> {{ readingTime }} min read </span>
          </div>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
  export interface CardBlogProps {
    title: string;
    excerpt: Record<string, unknown>;
    topic: string;
    date: string;
    readingTime: number;
    stem: string;
    draft?: boolean;
  }

  defineProps<CardBlogProps>();
</script>
