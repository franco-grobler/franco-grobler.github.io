<template>
  <UCard>
    <template #header>
      <h3 class="text-xl font-medium">
        {{ title }}
      </h3>
      <div
        class="text-muted-foreground flex w-full items-center justify-between"
      >
        <p>{{ subtitle }}</p>
        <p>{{ timeline.start }} - {{ timeline.end }}</p>
      </div>
    </template>

    <p class="text-muted-foreground leading-relaxed">
      {{ description }}
    </p>

    <slot name="footer" />
  </UCard>
</template>

<script setup lang="ts">
  export interface Props {
    title: string;
    subtitle: string;
    description: string;
    timeline: {
      start: string;
      end: string;
    };
  }

  defineProps<Props>();
</script>
