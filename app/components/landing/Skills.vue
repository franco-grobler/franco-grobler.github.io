<template>
  <LandingSection title="What I Do">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <CardSkill
        v-for="(l, idx) of skills.cards"
        :key="idx"
        :title="l.title"
        :icon="l.icon"
        :description="l.description"
        class=""
      />
    </div>
  </LandingSection>
</template>

<script setup lang="ts">
  import type { IndexCollectionItem } from "@nuxt/content";

  defineProps<{ skills: IndexCollectionItem["skills"] }>();
</script>
