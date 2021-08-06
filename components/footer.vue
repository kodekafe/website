<template>
  <footer>
    <h2>Footer</h2>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss" scoped>
footer {
  @media (prefers-color-scheme: dark) {
    color: $darkFooterTextColor;

    & > a:visited {
      color: $darkLinkColor;
    }
  }

  @media (prefers-color-scheme: light) {
    color: $lightFooterTextColor;

    & > a:visited {
      color: $lightLinkColor;
    }
  }

  margin: 1rem 0 1rem 0;
  padding-bottom: 1rem;
  flex-shrink: 1;

  & > a {
    text-decoration: none;

    .octicon {
      vertical-align: baseline;
    }
  }
}
</style>
