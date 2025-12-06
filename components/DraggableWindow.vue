<template>
  <div id="wrapper" class="centered-window">
    <div id="main">
      <div class="inner">
        <div id="window" class="container default">
          <div class="wrapper" id="wrapper2">
            <div class="inner">
              <h2 id="windowGreetings">Greetings!</h2>
              <p id="windowText">
                <span class="p">
                  Hi, I'm Guevara (also known as Chle) - a insane developer from Spain.
                  Over few years I have been developing some random shit on internet.
                </span>
                <span class="p">
                  I am fluent in PHP and Javascript/Typescript. I have got some experience
                  with React, Vue and SQL. I can do bit of Go and Lua too, sometimes rust
                  although they're not on my list.
                </span>
              </p>
              <p id="windowText">
                <span class="p">
                  I am mostly working on random projects, you can mostly find them at
                  <a href="https://github.com/me-at-the-labs"><mark>Chle Labs</mark></a>.
                  If you want to contact me, my contact list is below.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const wrapperRef = ref(null)
</script>

<style scoped>
.centered-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
