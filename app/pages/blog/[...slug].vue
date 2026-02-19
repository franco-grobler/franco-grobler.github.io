<template>
  <Page
    v-if="page"
    :title="page.title"
    :breadcrumb-items="breadcrumbs"
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
  import type { BreadcrumbItem } from "@nuxt/ui";

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

  const breadcrumbs = ref<BreadcrumbItem[]>([
    {
      icon: "lucide:book-open-text",
      label: "Blogs",
      to: "/blog",
    },
    {
      icon: "lucide:letter-text",
      label: page.value.title,
      to: route.path,
    },
  ]);

  useSeoMeta({
    title: page.value.seo.title,
    ogTitle: page.value.seo.title,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
  });
</script>
