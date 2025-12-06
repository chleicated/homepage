<template>
  <div
    id="wrapper"
    ref="wrapperRef"
    :style="{ left: position.x + 'px', top: position.y + 'px', cursor: dragging ? 'grabbing' : 'grab' }"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
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
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const wrapperRef = ref(null);
const position = reactive({ x: 0, y: 0 });
let dragging = ref(false);
let offset = { x: 0, y: 0 };

function centerWindow() {
  const el = wrapperRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  position.x = window.innerWidth / 2 - rect.width / 2;
  position.y = window.innerHeight / 2 - rect.height / 2;
}

function startDrag(e) {
  dragging.value = true;
  offset.x = e.clientX - position.x;
  offset.y = e.clientY - position.y;
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);
}

function onDrag(e) {
  if (!dragging.value) return;
  position.x = e.clientX - offset.x;
  position.y = e.clientY - offset.y;
}

function stopDrag() {
  dragging.value = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
}

onMounted(() => {
  centerWindow();
  window.addEventListener("resize", centerWindow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", centerWindow);
});
</script>

<style scoped>
#wrapper {
  position: absolute;
  user-select: none;
  touch-action: none;
  -webkit-user-drag: none;
}

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
