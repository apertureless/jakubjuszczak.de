module.exports = {
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    speedFactor: {
      type: Number,
      default: 0.15
    },
    orientation: {
      type: String,
      default: 'y'
    }
  },
  data () {
    return {
      el: null
    }
  },

  mounted () {
    if (this.animate) {
      this.el = this.$refs.element
      window.requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (f) {
        setTimeout(f, 1000 / 60)
      }
      this.init()
    }
  },

  methods: {
    animateElement () {
      // const parentHeight = this.$refs.block.offsetHeight
      const parallaxHeight = this.$refs.element.offsetHeight
      const availableOffset = parallaxHeight
      let animationValue = (window.pageYOffset * this.speedFactor)
      if (animationValue <= availableOffset && animationValue >= 0) {
        if (this.orientation === 'x') {
          this.el.style.transform = `translate3d(${animationValue * -1}px, 0 ,0)`
        } else {
          this.el.style.transform = `translate3d(0, ${animationValue * -1}px ,0)`
        }
      }
    },
    scrollHandler () {
      window.requestAnimationFrame(() => {
        this.animateElement()
      })
    },

    setupListener () {
      window.addEventListener('scroll', this.scrollHandler, false)
    },
    init () {
      this.setupListener()
    }
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler, false)
  }
}
