<template>
  <footer>
    <h2>Footer</h2>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
:root {
  &.dark-mode {
    footer {
      color: $darkBgColor;
    }
  }

  &.light-mode {
    color: $lightBgColor;
  }
}

footer {
  margin: 0;
  flex-shrink: 1;

  & > a {
    text-decoration: none;

    .octicon {
      vertical-align: baseline;
    }
  }

  background-color: $themeColor;
}
</style>
