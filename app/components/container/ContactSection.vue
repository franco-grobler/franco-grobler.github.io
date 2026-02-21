<template>
  <div>
    <section class="flex flex-col gap-4">
      <h2
        :id="anchor"
        class="mb-6"
      >
        {{ title }}
      </h2>

      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ title: string; anchor?: string }>();
</script>
