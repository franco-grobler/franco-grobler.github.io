<template>
  <Page
    v-if="heading"
    :title="heading.title"
    :description="heading.description"
  >
    Hello
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
</script>
