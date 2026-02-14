<template>
  <Page
    v-if="page"
    :title="page.title"
    :description="page.description"
  >
    <template #header>
      <div class="mt-4">
        <ContainerChips :items="page.tags" />

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
    return queryCollection("projects").path(route.path).first();
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
