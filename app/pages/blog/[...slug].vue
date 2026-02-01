<template>
  <Page
    :title="page!.title"
    description=""
  >
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
    return queryCollection("blog").path(route.path).first();
  });

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page not found",
      fatal: true,
    });
  }
</script>
