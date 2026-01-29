<template>
  <Page
    v-if="heading"
    :title="heading.title"
    :description="heading.description"
  >
    <CardProject
      v-for="(p, idx) in projects"
      :key="idx"
      :title="p.title"
      :description="p.description"
      :tags="p.tags"
      :impact="p.impact"
      :slug="p.stem.split('/')[1] as string"
    />
  </Page>
</template>

<script setup lang="ts">
  import type { ProjectsIndexCollectionItem } from "@nuxt/content";

  const { data: page } = await useAsyncData("projects-index", () => {
    return queryCollection("projectsIndex").first();
  });
  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page not found",
      fatal: true,
    });
  }
  useSeoMeta({
    title: page.value.seo.title,
    ogTitle: page.value.seo.title,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
  });

  const heading = computed<ProjectsIndexCollectionItem["heading"] | undefined>(
    () => page.value?.heading,
  );

  const { data: projects } = useAsyncData("feature-projects", () => {
    return queryCollection("projects")
      .select("title", "description", "tags", "stem", "impact")
      .limit(5)
      .all();
  });
</script>
