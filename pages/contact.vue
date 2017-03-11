<template>
  <div>
    <hero-intro title="💌 Get in Contact">
      <shape slot="before" position="top-right" color="blue" type="circle" :index="1" :speed-factor="0.25" orientation='x'/>
      <img slot="image" src="~assets/img/profile2.jpg" alt="Jakub Juszczak" ref="element" />
      <shape slot="after" position="bottom-left" color="red" type="doughnut" :index="-1" :speed-factor="0.25"/>
    </hero-intro>
    <text-block>
      <p class="intro">
       So, you have an exciting project and looking for a <span class="highlight">motivated</span> and creative developer?
      </p>
      <p>
        Simply write me an e-mail: <a class="red" href="mailto:juszczak.j@googlemail.com">juszczak.j@googlemail.com</a> and I get in touch with you as soon as possible! 🚀
      </p>
    </text-block>
  </div>
</template>

<script>
  import HeroIntro from '~components/HeroIntro.vue'
  import TextBlock from '~components/TextBlock.vue'
  import Shape from '~components/Shape.vue'

  export default {
    components: {
      HeroIntro,
      TextBlock,
      Shape
    },
    head () {
      return {
        title: 'Contact Me! ☕'
      }
    }
  }
</script>
