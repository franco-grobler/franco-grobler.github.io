<template>
  <div class="flex w-full flex-row flex-wrap gap-2">
    <Chip
      v-for="(item, idx) in items"
      :key="idx"
      :class="chipClass"
    >
      {{ item }}
    </Chip>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    items: string[];
    chipClass?: string;
  }>();

  const items = computed<string[]>(() => props.items.toSorted());
</script>
