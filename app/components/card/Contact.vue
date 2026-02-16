<template>
  <NuxtLink :to="href">
    <div
      class="bg-secondary group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-white/20"
    >
      <div class="bg-accent/10 border-accent/20 size-11 rounded-lg border p-3">
        <UIcon
          :name="icon"
          class="text-accent h-5 w-5"
          size="24"
        />
      </div>
      <div>
        <p class="text-muted-foreground text-sm">
          {{ label }}
        </p>
        <p
          class="group-hover:text-accent max-w-full text-wrap transition-colors"
        >
          <ClientOnly v-if="email">
            <a :href="href">{{ renderedEmail }}</a>
          </ClientOnly>
          <template v-else>
            {{ href }}
          </template>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import useEmail from "~/composables/email";

  const props = defineProps<{
    icon: string;
    label: string;
    link?: string;
    email?: boolean;
  }>();

  const emailObfuscation = useEmail();

  const encryptedEmail = await emailObfuscation.encryptEmail(
    emailObfuscation.email,
  );

  const renderedEmail = computed(() =>
    import.meta.client ? emailObfuscation.email : encryptedEmail,
  );
  const href = computed<string>(() =>
    props.email ? `mailto:${renderedEmail.value}` : (props.link ?? "/"),
  );
</script>
