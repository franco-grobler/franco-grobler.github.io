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
  import type { ResearchIndexCollectionItem } from "@nuxt/content";

  const { data: page } = await useAsyncData("research-index", () => {
    return queryCollection("researchIndex").first();
  });
  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page not found",
      fatal: true,
    });
  }

  const heading = computed<ResearchIndexCollectionItem["heading"] | undefined>(
    () => page.value?.heading,
  );
</script>
