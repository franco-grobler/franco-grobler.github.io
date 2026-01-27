<template>
  <section class="border-t border-white/10 py-24">
    <div class="mb-16">
      <slot name="title">
        <div class="flex flex-row items-end justify-between align-baseline">
          <h2 class="text-3xl font-medium sm:text-4xl">{{ title }}</h2>
          <UButton
            v-if="link"
            :to="link.route"
            trailing-icon="i-lucide-arrow-right"
            variant="link"
            class="text-accent hover:text-accent/80 transition-colors"
          >
            {{ link.label }}
          </UButton>
        </div>
      </slot>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    link?: {
      label: string;
      route: string;
    };
  }>();
</script>
