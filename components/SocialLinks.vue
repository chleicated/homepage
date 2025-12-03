<template>
  <div id="buttonrow">
    <a 
      v-for="link in socialLinks" 
      :key="link.href"
      :href="link.href" 
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button class="btn">
        <i :class="link.icon" />
      </button>
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  {
    href: 'https://github.com/chleicated',
    label: 'GitHub Profile',
    icon: 'nf nf-md-github'
  },
  {
    href: 'https://x.com/chleicated',
    label: 'Twitter/X Profile',
    icon: 'nf nf-md-twitter'
  },
  {
    href: 'mailto:hello@chle.sh',
    label: 'Email Address',
    icon: 'nf nf-md-at'
  },
  {
    href: 'https://chle.blog',
    label: 'Blog Page',
    icon: 'nf nf-md-file_document'
  }
]
</script>
