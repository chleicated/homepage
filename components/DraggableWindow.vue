<template>
  <div 
    id="wrapper" 
    ref="wrapperRef"
    :style="{ top: position.y + 'px', left: position.x + 'px', transform: 'none' }"
  >
    <div id="main">
      <div class="inner">
        <div id="window" class="container default">
          <div 
            class="wrapper" 
            id="wrapper2"
            @mousedown="startDrag"
            @touchstart="startDrag"
          >
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
import { ref, onMounted, onUnmounted } from 'vue'

const wrapperRef = ref(null)
const isDragging = ref(false)
const position = ref({ x: 0, y: 0 })
const dragStart = ref({ x: 0, y: 0 })

onMounted(() => {
  if (typeof window !== 'undefined') {
    position.value = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
  }
})

const startDrag = (e) => {
  isDragging.value = true
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
  const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY
  
  dragStart.value = {
    x: clientX - position.value.x,
    y: clientY - position.value.y
  }
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', stopDrag)
}

const onDrag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  
  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
  const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY
  
  position.value = {
    x: clientX - dragStart.value.x,
    y: clientY - dragStart.value.y
  }
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)
})
</script>
