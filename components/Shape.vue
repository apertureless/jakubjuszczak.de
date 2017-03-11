<template>
  <transition appear name="fromRight">
  <span :class="[baseStyle, colorStyle, positionStyle]" :style="{zIndex: index}" ref="element">
    <svg v-cloak v-if="type === 'circle'" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84"><circle cx="1110" cy="476" r="42" fill-rule="evenodd" transform="translate(-1068 -434)"/></svg>
    <svg v-cloak v-if="type === 'rectangle'" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 66 66"><path fill-rule="evenodd" d="M0 0h66v66h-66z"/></svg>
    <svg v-cloak v-if="type === 'doughnut'" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84"><path d="M42 67c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25zm0 17c-23.196 0-42-18.804-42-42s18.804-42 42-42 42 18.804 42 42-18.804 42-42 42z"/></svg>
    <svg v-cloak v-if="type === 'triangle'" xmlns="http://www.w3.org/2000/svg" width="86" height="72" viewBox="0 0 86 72"><path fill-rule="evenodd" d="M906.618-707.867l85.548 5.134-38.327 66.385z"/></svg>
  </span>
  </transition>
</template>

<script>
  import Animateable from '~components/Animateable'

  export default {
    mixins: [Animateable],
    props: {
      index: {
        type: Number,
        default: 0
      },
      position: {
        type: String
      },
      type: {
        type: String
      },
      color: {
        type: String,
        default: 'red'
      }
    },

    computed: {
      baseStyle () {
        return 'Shape'
      },
      colorStyle () {
        return `Shape--${this.color}`
      },
      positionStyle () {
        return `Shape--${this.position}`
      }
    }
  }
</script>
