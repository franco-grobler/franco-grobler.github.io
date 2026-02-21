<template>
  <div>
    <section class="flex- flex-col gap-4">
      <NuxtLink :href="anchor">
        <h2 class="mb-6">
          {{ title }}
        </h2>
      </NuxtLink>

      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ title: string; anchor?: string }>();
</script>
