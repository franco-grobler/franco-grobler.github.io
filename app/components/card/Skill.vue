<template>
  <UCard class="bouncing-card">
    <template #header>
      <div
        class="bg-accent/10 border-accent/20 mb-4 flex size-14 items-center justify-center rounded-lg border"
      >
        <UIcon
          :name="icon"
          class="text-accent size-6"
        />
      </div>
      <h3 class="text-xl font-medium">
        {{ title }}
      </h3>
    </template>

    <p class="text-muted-foreground leading-relaxed">
      {{ description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
  export interface Props {
    icon: string;
    title: string;
    description: string;
  }
  defineProps<Props>();
</script>
