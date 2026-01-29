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
  import type { BlogIndexCollectionItem } from "@nuxt/content";

  const { data: page } = await useAsyncData("blog-index", () => {
    return queryCollection("blogIndex").first();
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

  const heading = computed<BlogIndexCollectionItem["heading"] | undefined>(
    () => page.value?.heading,
  );
</script>
