<template>
  <LandingSection
    :title="research.title"
    :link="research.link"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <CardResearch
        v-for="(f, idx) in featured"
        :key="idx"
        :title="f.title"
        :date="f.date"
        :read-time="f.readTime"
        :description="f.description"
        :slug="f.stem.split('/')[1] as string"
      />
    </div>
  </LandingSection>
</template>

<script setup lang="ts">
  import type { IndexCollectionItem } from "@nuxt/content";

  const props = defineProps<{ research: IndexCollectionItem["research"] }>();

  const { data: featured } = useAsyncData("featured-research", () => {
    return queryCollection("research")
      .where(
        "stem",
        "IN",
        props.research.cards.flatMap((s) => `research/${s}`),
      )
      .limit(3)
      .all();
  });
</script>
