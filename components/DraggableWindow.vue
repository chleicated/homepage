<template>
  <div id="wrapper" ref="wrapperRef">
    <div id="window" class="container default">
      <div class="wrapper" id="wrapper2">
        <div class="inner">
          <h2 id="windowGreetings">Greetings!</h2>

          <p id="windowText">
            <span class="p">
              Hi, I'm Guevara (also known as Chle) - an insane developer from Spain.
              Over a few years I have been developing some random stuff on the internet.
            </span>
            <span class="p">
              I am fluent in PHP and JavaScript/TypeScript. I have experience with
              React, Vue, and SQL. I can do a bit of Go and Lua too, sometimes Rust,
              although they're not on my list.
            </span>
          </p>

          <p id="windowText">
            <span class="p">
              I mostly work on random projects; you can find them at
              <a href="https://github.com/me-at-the-labs">
                <mark>Guevara's Lab</mark>
              </a>.
              If you want to contact me, my contact list is below.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const wrapperRef = ref(null)
</script>

<style scoped>
/* Fullscreen flex container to center the window */
#wrapper {
  position: fixed;
  inset: 0; /* top:0; bottom:0; left:0; right:0; */
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  touch-action: none;
  -webkit-user-drag: none;
}

/* Optional: limit window width for small screens */
#window {
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
</style>
