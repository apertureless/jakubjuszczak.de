<template>
  <div class="b">
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
  @import "../sass/_base.scss";
  .b {
    margin-top: rem(77);
  }
</style>
