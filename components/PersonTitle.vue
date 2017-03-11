<template>
  <transition appear :duration="1000" name="fromLeft" v-on:after-appear="setVisibleHook">
    <div class="Person__text will-animate" ref="element" v-cloak>
        <h1 class="Person__title" v-if="title">{{ title }}</h1>
        <p class="Person__location" v-if="location">{{ location }}</p>
    </div>
  </transition>
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
    },
    methods: {
      setVisibleHook (el) {
        el.style.opacity = 1
      }
    }
  }
</script>
