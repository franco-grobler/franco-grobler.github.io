<template>
  <Page
    v-if="heading"
    :title="heading.title"
    :description="heading.description"
  >
    <ContainerChips
      class="mb-6"
      :items="types"
      chip-class="bg-secondary text-muted-foreground hover:text-foreground rounded-lg border border-white/10 px-4 py-2 transition-colors hover:border-white/20"
    />

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <CardBlog
        v-for="(r, idx) in research"
        :key="idx"
        :title="r.title"
        :excerpt="r.meta.excerpt as Record<string, unknown>"
        :topic="r['paper-type']"
        :date="r.date"
        :reading-time="r['read-time']"
        :stem="r.stem"
      />
    </div>
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
  useSeoMeta({
    title: page.value.seo.title,
    ogTitle: page.value.seo.title,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
  });

  const heading = computed<ResearchIndexCollectionItem["heading"] | undefined>(
    () => page.value?.heading,
  );

  const { data: rawTopics } = useAsyncData("research-types-list", () => {
    return queryCollection("research").select("paper-type").all();
  });
  const types = computed<string[]>(() => [
    ...new Set(
      rawTopics.value?.flatMap((t) => t["paper-type"]).toSorted() ?? [],
    ),
  ]);

  const { data: research } = useAsyncData("research-list", () => {
    return queryCollection("research")
      .select(
        "title",
        "paper-type",
        "date",
        "read-time",
        "draft",
        "stem",
        "meta",
      )
      .all();
  });
</script>
