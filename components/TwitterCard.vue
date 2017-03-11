<template>
  <span v-if="false"></span>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  data: () => ({
    href: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://jakubjuszczak.de')
  }),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@apertureless' },
      { name: 'twitter:title', content: 'Jakub Juszczak 🦄 Frontend Developer' },
      { name: 'twitter:description', content: 'Hi, my name is Jakub, I am a frontend developer 🦄 and open source enthusiast. I love working with modern technologies, building and designing awesome projects and push boundaries.' },
      { name: 'twitter:image', content: '~assets/img/profile.jpg' },
      { name: 'twitter:image:alt', content: 'Jakub Juszczak' }
    ]
  }
}
</script>
