import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">
        👋 Welcome to qwik-typescript-tailwindcss-template!
      </h1>
      <p>
        Read the quick start guide at <code>README.md</code> to get started!
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to qwik-typescript-tailwindcss-template",
  meta: [
    {
      name: "description",
      content: "This site is powered by qwik-typescript-tailwindcss-template",
    },
  ],
};
