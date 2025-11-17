<template>
  <Head>
    <Title>chle!</Title>
  </Head>

  <NuxtLayout>
    <Backdrop />

    <div
      class="fixed left-0 top-0 grid h-screen w-screen place-items-center overflow-y-scroll bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-crust"
    >
      <div
        class="container max-w-screen-sm border border-overlay2 bg-crust p-12"
      >

        <svg
          width="32"
          viewBox="0 0 200 80"
          class="fill-overlay2 object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="60"
            font-family="sans-serif"
            font-size="60"
            class="fill-inherit"
          >
            chle
          </text>
        </svg>

        <NuxtPage />

      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import Backdrop from "~/components/Backdrop.vue";
import AnimatedLink from "~/components/AnimatedLink.vue";

export default {
  components: { Backdrop, AnimatedLink },
};
</script>
