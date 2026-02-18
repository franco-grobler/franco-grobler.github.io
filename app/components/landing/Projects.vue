<template>
  <LandingSection
    :title="projects.title"
    :link="projects.link"
  >
    <div class="flex flex-col gap-4">
      <CardProject
        v-for="(f, idx) in featured"
        :key="idx"
        :title="f.title"
        :description="f.description"
        :tags="f.tags"
        :slug="f.stem?.split('/')[1] ?? ''"
      />
    </div>
  </LandingSection>
</template>

<script setup lang="ts">
  import type { IndexCollectionItem } from "@nuxt/content";

  const props = defineProps<{ projects: IndexCollectionItem["projects"] }>();

  const { data: featured } = useAsyncData("feature-projects", () => {
    return queryCollection("projects")
      .where(
        "stem",
        "IN",
        props.projects.cards.flatMap((s) => `projects/${s}`),
      )
      .select("title", "description", "tags", "stem")
      .limit(3)
      .all();
  });
</script>
