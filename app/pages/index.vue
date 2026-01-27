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
    <LandingProjects
      v-if="projects"
      :projects="projects"
    />
    <LandingResearch
      v-if="research"
      :research="research"
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
  const projects = computed<IndexCollectionItem["projects"] | undefined>(
    () => page.value?.projects,
  );
  const research = computed<IndexCollectionItem["research"] | undefined>(
    () => page.value?.research,
  );

  useSeoMeta({
    title: page.value.seo.title,
    ogTitle: page.value.seo.title,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
  });
</script>
