<template>
  <Page
    v-if="about"
    :title="about.title"
    :description="about.description"
  >
    <section>
      <h2>Experience</h2>
      <div class="flex flex-col gap-8">
        <CardTimeline
          v-for="(edu, idx) in about.experience"
          :key="idx"
          :title="edu.title"
          :subtitle="edu.company.name"
          :description="edu.description"
          :timeline="toTimeline(edu.timeline.start, edu.timeline.end)"
        >
          <template #footer>
            <ContainerChips
              class="mt-3"
              :items="edu.tools"
            />
          </template>
        </CardTimeline>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div class="flex flex-col gap-8">
        <CardTimeline
          v-for="(edu, idx) in about.education"
          :key="idx"
          :title="edu.degree"
          :subtitle="edu.institution"
          :description="edu.description"
          :timeline="toTimeline(edu.timeline.start, edu.timeline.end)"
        />
      </div>
    </section>

    <section>
      <h2>Core Competencies</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <CardBasic
          v-for="(skills, idx) in about.skills"
          :key="idx"
          :title="idx"
        >
          <ContainerChips :items="skills" />
        </CardBasic>
      </div>
    </section>

    <section v-if="philosophy">
      <h2>{{ philosophy.title }}</h2>
      <ContentRenderer
        class="text-muted-foreground"
        :value="philosophyBody"
      />
    </section>
  </Page>
</template>

<script setup lang="ts">
  import type { AboutCollectionItem } from "@nuxt/content";
  import type { Props as TimelineProps } from "~/components/card/Timeline.vue";

  const { data: page } = await useAsyncData("about-index", () => {
    return queryCollection("about").first();
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

  const about = computed<AboutCollectionItem["page"] | undefined>(
    () => page.value?.page,
  );

  const { data: philosophy } = await useAsyncData("about-philoshpy", () => {
    return queryCollection("aboutContent").first();
  });
  const philosophyBody = computed(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      philosophy.value?.meta.body as Record<string, any>,
  );

  function toTimeline(
    start: string,
    end: string | null,
  ): TimelineProps["timeline"] {
    const toString = (date: Date): string =>
      date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      });
    return {
      start: toString(new Date(start)),
      end: end ? toString(new Date(end)) : "Present",
    };
  }
</script>

<style lang="css" scoped>
  @reference "~/assets/css/main.css";

  h2 {
    @apply mb-4 text-2xl font-medium;
  }
  h4 {
    @apply font-medium;
  }

  section {
    @apply mb-8;
  }
</style>
