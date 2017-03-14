<template>
  <div>
    <hero-intro title="Jakub Juszczak" location="💝 Bochum, DE">
      <shape slot="before" position="top-left" color="red" type="rectangle" :index="-1" :speed-factor="0.25" orientation='x'/>
      <img slot="image" src="~assets/img/profile.jpg" alt="Jakub Juszczak" class="will-animate" ref="element" />
      <shape slot="after" position="bottom-right" color="yellow" type="circle" :index="1" :speed-factor="0.25"/>
    </hero-intro>
    <text-block>
      <p class="intro">
        Hi, <br/><br/>
        my name is Jakub, I am a <span class="highlight">frontend developer</span> 🦄 and <a href="https://github.com/apertureless" title="GitHub" target="_new" class="red highlighted">open source</a> enthusiast. I love working with modern technologies, building and <a href="https://dribbble.com/apertureless" target="_new" title="Dribbble" class="green highlighted">designing</a> awesome projects and pushing boundaries.
      </p>
      <p>Modern technologies make the web awesome! And I try to keep up to date in the fast moving web scene. In the frontend I am working with webpack, sass and ES6/7 javascript. For reactive interfaces I use <a href="https://www.vuejs.org" title="Vue.js" target="_new" class="green">Vue.js</a> and for backends mostly WordPress. </p>
      <p>However I have also experience with laravel, microservices, <a href="https://github.com/apertureless/shopware-api-client" class="blue" title="Shopware API Client" target="_new">nodejs</a>, docker, agile development, testing, WebVR and many other topics.</p>
      <p>Feel free to contact me, if you are interested in working with me.</p>
    </text-block>
    <twitter-card/>
  </div>
</template>

<script>
  import TwitterCard from '~components/TwitterCard.vue'
  import HeroIntro from '~components/HeroIntro.vue'
  import TextBlock from '~components/TextBlock.vue'
  import Shape from '~components/Shape.vue'

  export default {
    components: {
      TwitterCard,
      HeroIntro,
      TextBlock,
      Shape
    }
  }
</script>
