<template>
  <NuxtLink :to="link">
    <div
      class="bg-secondary group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-white/20"
    >
      <div class="bg-accent/10 border-accent/20 size-11 rounded-lg border p-3">
        <UIcon
          :name="icon"
          class="text-accent h-5 w-5"
          size="24"
        />
      </div>
      <div>
        <p class="text-muted-foreground text-sm">
          {{ label }}
        </p>
        <p
          class="group-hover:text-accent max-w-full text-wrap transition-colors"
        >
          <a :href="link">{{ link }}</a>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    icon: string;
    label: string;
    link?: string;
  }>();
</script>
