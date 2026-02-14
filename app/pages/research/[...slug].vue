<template>
  <Page>
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
