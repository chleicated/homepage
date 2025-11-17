<template>
  <Head>
    <Title>chle!</Title>
  </Head>

  <NuxtLayout>
    <Backdrop />

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
  </NuxtLayout>
</template>

<script>
import Backdrop from "~/components/Backdrop.vue";
import AnimatedLink from "~/components/AnimatedLink.vue";

export default {
  components: {
    Backdrop,
    AnimatedLink,
  },
};
</script>
