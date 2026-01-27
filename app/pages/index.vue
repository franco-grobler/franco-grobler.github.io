<template>
  <UPage class="mt-20">
    <LandingIntro
      v-if="intro"
      :details="intro"
      class="mb-10"
    />
    <LandingSkills
      v-if="skills"
      :skills="skills"
    />
  </UPage>
</template>

<script setup lang="ts">
  import type { IndexCollectionItem } from "@nuxt/content";

  const { data: page } = await useAsyncData("index", () => {
    return queryCollection("index").first();
  });
  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page not found",
      fatal: true,
    });
  }

  const intro = computed<IndexCollectionItem["intro"] | undefined>(
    () => page.value?.intro,
  );
  const skills = computed<IndexCollectionItem["skills"] | undefined>(
    () => page.value?.skills,
  );

  useSeoMeta({
    title: page.value.seo.title,
    ogTitle: page.value.seo.title,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
  });
</script>
