<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="octicon-wrapper" v-html="svgpath"></div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore I wont bother creating typings
// See https://primer.style/octicons/packages/javascript
import octicons from '@primer/octicons'

export default Vue.extend({
  props: {
    icon: { type: String, required: true },
    size: { type: Number, default: 24 },
  },

  data() {
    return {
      svgpath: octicons[this.icon].toSVG({ width: this.size }),
    }
  },
})
</script>

<style lang="scss" scoped>
.octicon-wrapper {
  display: inline-block;
}
</style>

<style lang="scss">
.octicon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}
</style>
