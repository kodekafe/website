<template>
  <div class="container">
    <Welcome />
    <Map />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Map from '@/components/index/map.vue'
import Welcome from '@/components/index/welcome.vue'

export default Vue.extend({
  components: { Welcome, Map },

  layout: 'default',

  head: {
    title: 'Home',
  },
})
</script>

<style lang="scss" scoped>
.container {
  $sideMargin: 10%;

  margin-left: $sideMargin;
  margin-right: $sideMargin;

  display: flex;
  flex-direction: row;
  align-content: space-around;
  align-items: center;
  height: 80%;
}
</style>
