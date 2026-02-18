<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    :action="appConfig.global.staticForms.url"
    method="POST"
    :disabled="disabled"
    @submit="onSubmit"
  >
    <UFormField
      v-for="([field, props], idx) of formFields"
      :key="idx"
      v-bind="props.field"
    >
      <component
        :is="props.component"
        v-model="state[field]"
        v-bind="props.input"
      />
    </UFormField>

    <UButton
      class="focus:ring-accent focus:ring-offset-background bg-foreground text-background hover:bg-foreground/90 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none"
      aria-tabindex="0"
      trailing-icon="lucide:send"
      type="submit"
      :loading="loading"
      :disabled="disabled"
    >
      Send Message
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
  import { z } from "zod";
  import type {
    FormSubmitEvent,
    InputProps,
    FormFieldProps,
    TextareaProps,
  } from "@nuxt/ui";
  import UInput from "@nuxt/ui/components/Input.vue";
  import UTextarea from "@nuxt/ui/components/Textarea.vue";
  import appConfig from "~/app.config";

  const schema = z.object({
    name: z.string("Name is required."),
    email: z.email("Invalid email."),
    message: z.string("Message is required."),
  });

  type Schema = z.output<typeof schema>;
  type SchemaKeys = keyof Schema;
  type FieldProps = {
    component: typeof UInput | typeof UTextarea;
    field: FormFieldProps;
    input: InputProps | TextareaProps;
  };

  const fieldProps: Record<keyof Schema, FieldProps> = {
    name: {
      component: UInput,
      field: { label: "Name", name: "name" },
      input: { placeholder: "Your name" },
    },
    email: {
      component: UInput,
      field: { label: "Email", name: "email" },
      input: { placeholder: "you@example.com" },
    },
    message: {
      component: UTextarea,
      field: { label: "Message", name: "message" },
      input: { placeholder: "What are we talking about?", rows: 6 },
    },
  } as const;

  const formFields = Object.entries(fieldProps) as [SchemaKeys, FieldProps][];

  const NullState: Schema = {
    name: "",
    email: "",
    message: "",
  } as const;

  const state = reactive<Schema>(NullState);
  const loading = ref<boolean>(false);
  const disabled = ref<boolean>(false);

  const toast = useToast();

  function resetState() {
    // @ts-expect-error: Entries are untyped when literal
    Object.entries(NullState).forEach(([key, value]) => (state[key] = value));
    loading.value = false;
  }

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true;
    const form = new FormData();
    Object.entries(event.data).forEach(([name, value]) => {
      form.set(name, value);
    });
    form.append("accessKey", appConfig.global.staticForms.key);

    try {
      await fetch(
        new Request(appConfig.global.staticForms.url, {
          body: form,
          method: "POST",
        }),
      );
    } catch {
      toast.add({
        title: "Failed",
        description: "Could not submit form, please try again later.",
        color: "error",
      });
      loading.value = false;
      return;
    }

    resetState();
    toast.add({
      title: "Success",
      description: "The form has been submitted.",
      color: "success",
    });
  }
</script>
