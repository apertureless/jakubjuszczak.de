<template>
  <div>
    <hero-intro title="Jakub Juszczak"/>
    <text-block>
      <p class="intro">
        Hi, <br/><br/>
        my name is Jakub, I am a <span class="highlight">frontend developer</span> 🦄 and <a href="https://github.com/apertureless" title="GitHub" target="_new" class="red highlighted">open source</a> enthusiast. I love working with modern technologies, building and <a href="https://dribbble.com/apertureless" target="_new" title="Dribbble" class="green highlighted">designing</a> awesome projects and push boundaries.
      </p>
      <p>Modern technologies make the web awesome! And I try to keep up to date in the fast moving web scene. In the frontend I am working with webpack, sass and ES6/7 javascript. For reactive interfaces I use <a href="https://www.vuejs.org" title="Vue.js" target="_new" class="green">Vue.js</a> and for backends mostly WordPress. </p>
      <p>However I have also experience with laravel, microservices, <a href="https://github.com/apertureless/shopware-api-client" class="blue" title="Shopware API Client" target="_new">nodejs</a>, docker, agile development, testing, WebVR and many other topics.</p>
      <p>Feel free to contact me, if you are interested in working with me.</p>
    </text-block>
  </div>
</template>

<script>
  import HeroIntro from '~components/HeroIntro.vue'
  import TextBlock from '~components/TextBlock.vue'

  export default {
    components: {
      HeroIntro,
      TextBlock
    }
  }
</script>
