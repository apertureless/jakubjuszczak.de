<template>
  <section class="Hero">
    <div class="Hero__container">
      <div class="Person">
        <div class="Person__text">
          <h1 class="Person__title">{{title}}</h1>
          <p class="Person__location">💝 Bochum, DE</p>
        </div>
        <div class="Person__image">
          <shape color="red" position="top-left" type="doughnut" :index="-1" />
          <img src="~assets/img/profile.png" alt="Jakub Juszczak" />
          <shape color="blue" position="bottom-right" type="rectangle" :index="1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Shape from '~components/Shape.vue'

  export default {
    components: {
      Shape
    },
    props: {
      title: {
        type: String
      }
    }
  }
</script>
