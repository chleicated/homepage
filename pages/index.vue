<template>
  <div class="mb-4 grid grid-cols-4 gap-4">
    <div class="col-span-3">
      <p>
        Hi I'm <b>Chle</b>
        <span
          class="ms-1 inline-flex items-center rounded-full bg-surface0 px-2 py-1 text-xs font-medium"
        >
          they/them
        </span>
        and I'm from Spain. Welcome to my site. I'm a developer. I usually
        use PHP, React and Vue. I know some other languages like Lua, Rust,
        Typescript and Go.
        <span class="text-overlay0">(usually I am drunk)</span> for most of
        the time.
      </p>
    </div>
  </div>

  <div class="flex flex-row flex-wrap gap-4">
    <!-- Email Infobox -->
    <Infobox class="col-span-3 flex flex-row items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        class="me-1 fill-text"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.25 6.16667C1.25 4.55584 2.56262 3.25 4.18182 3.25H19.8182C21.4374 3.25 22.75 4.55584 22.75 6.16667V17.8333C22.75 19.4442 21.4374 20.75 19.8182 20.75H4.18182C2.56262 20.75 1.25 19.4442 1.25 17.8333V6.16667ZM4.18182 18.8055C3.64208 18.8055 3.20454 18.3702 3.20454 17.8333V8.71191L10.6889 12.4347C11.5142 12.8453 12.4858 12.8453 13.3111 12.4347L20.7955 8.71191V17.8333C20.7955 18.3702 20.3579 18.8055 19.8182 18.8055H4.18182Z"
          class="fill-inherit"
        />
      </svg>
      hello@chle.wtf
    </Infobox>

    <!-- GitHub Infobox -->
    <NuxtLink to="https://github.com/chleicated" target="_blank">
      <Infobox
        class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          class="me-1 fill-none stroke-text"
        >
          <path
            d="M2 17.4883C3.63025 20.8809 6.29407 22.0938 9.5 21.2093"
            class="stroke-inherit"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M9.99723 22.4883V19.0603C9.99723 18.699 10.0955 18.3444 10.2815 18.0344L10.8219 17.1339C10.8551 17.0787 10.8271 17.0067 10.7657 16.9869C7.18162 15.8268 5.18431 14.0972 5.00412 10.5267C4.94874 9.43207 5.45528 8.08972 6.28691 6.52137C6.04107 5.06359 6.01086 4.18563 6.27119 2.59238C6.27982 2.53957 6.32942 2.50265 6.38259 2.50949C8.04565 2.72328 8.96486 3.02745 10.1412 3.9545C12.3781 3.40487 14.2365 3.30181 16.8404 3.96595C17.6195 3.26718 18.7264 2.73505 20.533 2.48919C20.5826 2.48244 20.63 2.51394 20.6427 2.56227C20.9851 3.86245 21.0088 4.72539 20.6775 6.47962C21.3027 7.41285 22.0541 8.91864 21.9962 10.5266C21.7586 14.1003 20.1494 15.6605 16.2325 16.9843C16.1707 17.0052 16.1436 17.0791 16.1788 17.1339C16.4048 17.4861 16.5661 17.7474 16.7639 18.1155C16.9119 18.3907 16.9832 18.7001 16.9832 19.0125V22.4883"
            class="stroke-inherit"
            stroke-width="1.5"
          />
        </svg>
        github
      </Infobox>
    </NuxtLink>

    <!-- Twitter/X Infobox -->
    <NuxtLink to="https://x.com/chleicated" target="_blank">
      <Infobox
        class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          class="me-1 fill-text"
        >
          <path
            class="fill-inherit"
            d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24h-6.637l-5.195-6.833-5.944 6.833H1.75l7.73-8.88-8.164-10.62h6.772l4.703 6.223 5.453-6.223Zm-1.161 17.52h1.833L7.084 4.597H5.117l11.966 15.173Z"
          />
        </svg>
        twitter
      </Infobox>
    </NuxtLink>
  </div>
</template>

<script>
import Infobox from "~/components/Infobox.vue";

export default {
  components: { Infobox },
};
</script>
