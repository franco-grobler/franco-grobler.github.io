<template>
  <Page
    v-if="page"
    :title="page.title"
    :description="page.description"
  >
    <template #title>
      <div class="flex flex-row items-center justify-between">
        <div class="w-fit">
          <h1 class="mb-6 text-4xl font-medium sm:text-5xl">
            {{ page.title }}
          </h1>
        </div>
        <BadgeDraft v-if="page.draft" />
      </div>
    </template>

    <template #header>
      <div class="mt-4">
        <div class="mt-6 flex flex-row gap-4">
          <UButton
            v-for="(l, idx) in page.links"
            :key="idx"
            :icon="l.icon"
            :to="l.url"
            variant="soft"
            class="bg-secondary rounded-lg border border-white/10 px-3 py-2 text-sm transition-colors hover:border-white/20"
          >
            {{ l.label }}
          </UButton>
        </div>
      </div>
    </template>

    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </Page>
</template>

<script setup lang="ts">
  import { createError, useAsyncData } from "#app";
  import { queryCollection } from "#imports";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const { data: page } = await useAsyncData("page-" + route.path, () => {
    return queryCollection("research").path(route.path).first();
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
</script>
