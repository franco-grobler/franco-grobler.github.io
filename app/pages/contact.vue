<template>
  <Page
    v-if="page"
    :title="page.heading.title"
    :description="page.heading.description"
  >
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <ContainerContactSection
        v-if="info"
        :title="info.title"
      >
        <div class="flex flex-col gap-4">
          <template v-if="info.links">
            <template v-for="l in info.links">
              <CardContact v-bind="l" />
            </template>
          </template>

          <div class="bg-secondary rounded-xl border border-white/10 p-6">
            <h3 class="mb-3">Response Time</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ info.responseTime }}
            </p>
          </div>
        </div>
      </ContainerContactSection>

      <ContainerContactSection
        title="Send a message"
        anchor="send-message"
      >
        <FormsContact />
      </ContainerContactSection>
    </div>
  </Page>
</template>

<script setup lang="ts">
  import type { ContactCollectionItem } from "@nuxt/content";

  const { data: page } = await useAsyncData("contact-index", () => {
    return queryCollection("contact").first();
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

  const info = computed<ContactCollectionItem["information"] | undefined>(
    () => page.value?.information,
  );
</script>
