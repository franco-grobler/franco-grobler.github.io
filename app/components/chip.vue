<template>
  <span
    class="bg-background text-muted-foreground rounded-full border border-white/10 px-3 py-1 text-sm"
  >
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script setup lang="ts">
  defineProps<{
    text?: string;
  }>();
</script>
