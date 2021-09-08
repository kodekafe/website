<template>
  <footer>
    <Logo id="logo" />
    <div id="links">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        ><fa-icon :icon="link.icon"
      /></a>
    </div>
    <span></span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from './logo.vue'

export default Vue.extend({
  components: { Logo },
  data() {
    return {
      links: [
        { icon: faGithub, url: 'https://github.com/kodekafe' },
        { icon: faDiscord, url: '/discord' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
:root {
  &.dark-mode footer {
    color: $darkBgColor;
  }

  &.light-mode footer {
    color: $lightBgColor;
  }
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $themeColor;
  padding: 0 10%;
}

#logo {
  display: inline-block;
}

#links {
  display: inline-block;
  margin: 0 auto;

  & > * {
    margin: 0.25rem;
    color: currentColor;
  }
}

span {
  width: 1px;
  height: 100%;
}
</style>
