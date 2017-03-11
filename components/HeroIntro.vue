<template>
  <section class="Hero">
    <div class="Hero__container">
      <div class="Person">
       <person-title :title="title" :location="location" orientation='x'/>
        <div class="Person__image">
          <slot name="before"></slot>
          <transition appear name="fromTop" :duration="800" v-on:after-appear="setVisibleHook">
            <slot name="image"></slot>
          </transition>
          <slot name="after"></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import PersonTitle from '~components/PersonTitle.vue'

  export default {
    components: {
      PersonTitle
    },
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
