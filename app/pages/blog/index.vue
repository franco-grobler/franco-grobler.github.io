<template>
  <Page
    v-if="heading"
    :title="heading.title"
    :description="heading.description"
  >
    <ContainerChips
      class="mb-6"
      :items="topics"
      chip-class="bg-secondary text-muted-foreground hover:text-foreground rounded-lg border border-white/10 px-4 py-2 transition-colors hover:border-white/20"
    />

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <CardBlog
        v-for="(b, idx) in blogs"
        :key="idx"
        :title="b.title"
        :excerpt="b.meta.excerpt as Record<string, unknown>"
        :topic="b.topic"
        :date="b.date"
        :reading-time="b.readTime"
        :stem="b.stem"
      />
    </div>
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

  const { data: rawTopics } = useAsyncData("blog-topics-list", () => {
    return queryCollection("blog").select("topic").all();
  });
  const topics = computed<string[]>(() => [
    ...new Set(rawTopics.value?.flatMap((t) => t.topic).toSorted() ?? []),
  ]);

  const { data: blogs } = useAsyncData("blogs-list", () => {
    return queryCollection("blog")
      .select(
        "title",
        "description",
        "tags",
        "stem",
        "readTime",
        "meta",
        "topic",
        "date",
      )
      .limit(5)
      .all();
  });
</script>
