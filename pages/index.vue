<template>
  <div>
    <DraggableWindow />
    <StatusBadge />
    <SocialLinks />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.add('is-loading')
  
  setTimeout(() => {
    document.body.classList.remove('is-loading')
    document.body.classList.add('is-playing')
    
    setTimeout(() => {
      document.body.classList.remove('is-playing')
      document.body.classList.add('is-ready')
    }, 5000)
  }, 100)
})
</script>
