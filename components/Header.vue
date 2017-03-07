<template>
  <nav class="Navigation">
    <ul>
      <li class="Navigation__item">
        <nuxt-link to="/" exact>
        About
        </nuxt-link>
      </li>
      <li class="Navigation__item">
        <nuxt-link to="/work">
        Work
        </nuxt-link>
      </li>
      <li class="Navigation__item Navigation__item--extern">
        <a href="https://medium.com/@apertureless" title="medium" target="_new">Blog</a>
      </li>
      <li class="Navigation__item">
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
