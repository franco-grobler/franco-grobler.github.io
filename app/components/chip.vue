<template>
  <div class="bg-background text-muted-foreground rounded-full px-2 py-1">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    text: string;
  }>();
</script>
