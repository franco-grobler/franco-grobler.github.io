<template>
  <div class="flex w-full flex-row flex-wrap gap-2">
    <Chip
      v-for="(item, idx) in sortedItems"
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
  const { items } = toRefs(props);

  const sortedItems = computed<string[]>(() => items.value?.toSorted());
</script>
