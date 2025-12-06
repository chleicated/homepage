<template>
  <div
    id="wrapper"
    ref="wrapperRef"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
    @mousedown="startDrag"
    @touchstart="startDrag"
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const wrapperRef = ref(null)
const position = reactive({ x: 0, y: 0 })

// Keep these even though dragging is disabled
const dragStart = reactive({ x: 0, y: 0 })
const isDragging = ref(false)

const startDrag = () => {
  // dragging disabled
}

const clampPosition = (x, y) => {
  if (!wrapperRef.value) return { x, y }

  const rect = wrapperRef.value.getBoundingClientRect()
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const minVisible = 50

  const clampedX = Math.max(
    -rect.width + minVisible,
    Math.min(x, windowWidth - minVisible)
  )
  const clampedY = Math.max(
    -rect.height + minVisible,
    Math.min(y, windowHeight - minVisible)
  )

  return { x: clampedX, y: clampedY }
}

const onDrag = (e) => {
  // Drag disabled
  return
}

const stopDrag = () => {
  // Drag disabled
  isDragging.value = false
}

onMounted(() => {
  // Keep listeners to avoid errors, but dragging won’t run
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
/* Prevent all dragging */
#wrapper {
  user-select: none;
  touch-action: none;
  -webkit-user-drag: none;
}
</style>  isDragging.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
})
</script>

<style scoped>
/* component-specific styles here if needed */
</style>
