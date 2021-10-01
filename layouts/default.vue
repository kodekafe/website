<template>
  <div id="_template-container">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'

export default Vue.extend({
  components: { Footer, Header },
})
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

#__layout {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#_template-container {
  font-family: $bodyFont;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  display: grid;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / 1fr;
  grid-gap: 1rem;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  display: flex;
  align-items: center;
}

footer {
  grid-area: footer;
}

html {
  &.dark-mode {
    background: $darkBgColor;
    color: $darkPrimaryTextColor;
  }

  &.light-mode {
    background: $lightBgColor;
    color: $lightPrimaryTextColor;
  }
}

* {
  box-sizing: border-box;
}
</style>
