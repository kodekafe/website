<template>
  <div>
    <div id="logo-svg" class="icon">
      <!-- The SVG is trusted -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="require('@/assets/icons/logo.svg?include')"></div>
    </div>
    <h2>KODEKAFÉ</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#logo-svg {
  max-width: min-content;
  height: max-content;
  display: inline-block;
  vertical-align: middle;
  & > svg {
    vertical-align: middle;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  display: inline-block;
  margin: 1.2rem 0;
  padding: 0;
  vertical-align: middle;
}

:root {
  &.light-mode .icon {
    color: $lightIconColor;

    path {
      fill: $lightIconColor;
    }
  }

  &.dark-mode .icon {
    color: $darkIconColor;
    path {
      fill: $darkIconColor;
    }
  }
}

div {
  width: max-content;
}
</style>
