<template>
  <div class="flex w-full flex-row flex-wrap gap-2">
    <Chip
      v-for="(item, idx) in items"
      :key="idx"
    >
      {{ item }}
    </Chip>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ items: string[] }>();

  const items = computed<string[]>(() => props.items.toSorted());
</script>
