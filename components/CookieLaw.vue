<template>
  <transition appear :name="transitionName">
    <div class="Cookie" :class="[containerPosition, cookieTheme]" v-if="isOpen">
      <div class="Cookie__content">
        {{ message }}
      </div>
      <div class="Cookie__button" @click="accept">{{ buttonText }}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      buttonText: {
        type: String,
        default: 'Got it!'
      },
      message: {
        type: String,
        default: 'This website uses cookies to ensure you get the best experience on our website.'
      },
      theme: {
        type: String,
        default: 'base'
      },
      /**
       * Cookie Container position
       * bottom, top
       * @type {Object}
       */
      position: {
        type: String,
        default: 'bottom'
      },
      /**
       * Transition name has following possibilities
       * slideFromBottom
       * slideFromTop
       * fade
       * @type {Object}
       */
      transitionName: {
        type: String,
        default: 'slideFromBottom'
      }
    },
    data () {
      return {
        isOpen: false
      }
    },
    computed: {
      containerPosition () {
        return `Cookie--${this.position}`
      },
      cookieTheme () {
        return `Cookie--${this.theme}`
      }
    },
    mounted () {
      if (!this.getVisited() === true) {
        this.isOpen = true
      }
    },
    methods: {
      setVisited () {
        localStorage.setItem('cookie:accepted', true)
      },
      getVisited () {
        return localStorage.getItem('cookie:accepted')
      },
      accept () {
        this.setVisited()
        this.isOpen = false
      }
    }
  }
</script>
