<template>
  <div class="welcome-container">
    <h1>Velkommen til KodeKafé!</h1>
    <p>
      Ønsker du å møte andre som er interessert i koding, data, spill, og mer?
      Første fredag i måneden samles datainteresserte i Bergen på Apparat sitt
      lokale. Det serveres pizza og snacks, og det er helt gratis! Vi starter kl
      18 og det varer frem til kl. 23.
    </p>
    <p v-pre>Neste KodeKafé er på Fredag den {{ day }} {{ month }}</p>
    <a class="join-button" href="/discord">Bli med</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.join-button {
  background-color: $themeColor;
  padding: 1rem 3rem;
  border-radius: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: block;
  max-width: max-content;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:active {
    filter: none;
  }
}

.welcome-container {
  width: 50%;
}

:root {
  &.dark-mode {
    .join-button {
      color: $darkBgColor;
    }
  }
  &.light-mode {
    .join-button {
      color: $lightBgColor;
    }
  }
}
</style>
