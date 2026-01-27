<template>
  <section class="border-t border-white/10 py-24">
    <div>
      <slot name="title">
        <h2 class="mb-16 text-3xl font-medium sm:text-4xl">{{ title }}</h2>
      </slot>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
  defineProps<{ title: string }>();
</script>
