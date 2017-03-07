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
          <img src="profile.png" alt="Jakub Juszczak" />
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

<style lang="scss">
  @import "../sass/_base.scss";

  .Hero {
    background: $background-secondary;

    @include has(container) {
      @include container();
      padding: rem(150) 0;
    }
  }

  .Person {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    @include has(image) {
      position: relative;
      z-index: 2;

      img {
        @include image-shadow();
      }
    }

    @include has(text) {
      line-height: 1.2;
    }

    @include has(title) {
      font-size: rem(80);
      color: $green-light;
      line-height: 0.9;
      font-weight: 600;
      text-transform: uppercase;
    }

    @include has(location) {
      font-size: rem(20);
      margin: 0;
      font-family: $base-font-family;
      font-weight: 200;
    }
  }
</style>
