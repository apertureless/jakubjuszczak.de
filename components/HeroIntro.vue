<template>
  <section class="Hero">
    <div class="Hero__container">
      <div class="Person">
       <person-title :title="title" :location="location" orientation='x'/>
        <div class="Person__image">
          <slot name="before"></slot>
          <slot name="image"></slot>
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
    }
  }
</script>
