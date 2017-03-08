<template>
  <div class="Person__text" ref="element">
      <h1 class="Person__title" v-if="title">{{ title }}</h1>
      <p class="Person__location" v-if="location">{{ location }}</p>
  </div>
</template>

<script>
  import Animateable from '~components/Animateable'

  export default {
    mixins: [Animateable],
    props: {
      title: {
        type: String
      },
      location: {
        type: String
      }
    }
  }
</script>
