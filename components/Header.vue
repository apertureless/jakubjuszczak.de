<template>
  <nav class="Navigation">
    <ul>
      <li class="Navigation__item">
        <nuxt-link to="/">
        About
        </nuxt-link>
      </li>
      <li class="Navigation__item">
        <nuxt-link to="/work">
        Work
        </nuxt-link>
      </li>
      <li class="Navigation__item">
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

<style lang="scss">
  @import "../sass/_base.scss";

  .Navigation {
    background: $background-primary;
    padding: rem(25) 0;
    position: fixed;
    top: 0;
    z-index: 100;
    will-change: auto;
    width: 100%;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    @include has(item) {
      flex: 0;
      padding: 0 rem(30);

      a {
        margin: rem(25) 0;
        font-size: rem(24);
        color: $blue;
        text-decoration: none;
        font-family: $base-font-family;
        font-weight: 200;

        &:hover {
          color: $green-dark;
        }

        &.nuxt-link-active {
          color: $green-dark;
          position: relative;

          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: $green-dark;
          }
        }
      }
    }
  }
</style>
