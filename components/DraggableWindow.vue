<template>
  <div
    id="wrapper"
    ref="wrapperRef"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
  >
    <div id="main">
      <div class="inner">
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
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const wrapperRef = ref(null)
const position = reactive({ x: 0, y: 0 })

onMounted(() => {
  const el = wrapperRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const centerX = window.innerWidth / 2 - rect.width / 2
  const centerY = window.innerHeight / 2 - rect.height / 2

  position.x = centerX
  position.y = centerY
})
</script>

<style scoped>
#wrapper {
  position: absolute;
  user-select: none;
  touch-action: none;
  -webkit-user-drag: none;
}
</style>
