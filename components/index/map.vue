<template>
  <div class="map-container">
    <iframe
      id="map-iframe"
      frameborder="0"
      style="border: 0"
      :src="`https://www.google.com/maps/embed/v1/place?key=${$config.mapsAPIKey}&q=${googleMapsQuery}`"
      allowfullscreen
    >
    </iframe>
    <p class="address">{{ address }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      googleMapsQuery: 'Apparat AS',
      address: "Damsgårdsveien 82, 5058 Bergen"
    }
  },
})
</script>

<style lang="scss" scoped>
:root {
  &.dark-mode {
    .address {
      color: $darkSecondaryTextColor;
    }
  }
  &.light-mode {
    .address {
      color: $lightSecondaryTextColor;
    }
  }
}

.map-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;
}

#map-iframe {
  height: 100%;
  flex: 1 1 auto;
}

.address {
  padding: 0;
}
</style>
