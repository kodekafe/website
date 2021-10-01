<template>
  <header>
    <Logo />
    <nav>
      <NuxtLink to="/" exact>Home</NuxtLink>
      <a href="/discord" exact>Discord server</a>
      <NuxtLink to="/#om" exact>Om oss</NuxtLink>
      <NuxtLink to="/#kontakt" exact>Kontakt</NuxtLink>
    </nav>
    <div id="theme-select" @click="cycleTheme">
      <Octicon
        v-for="(theme, index) in themeButtons"
        v-show="index === activeTheme"
        :key="theme.theme"
        :icon="theme.icon"
        :size="24"
        class="icon"
      />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'
import Logo from '@/components/logo.vue'

export default Vue.extend({
  components: { Logo, Octicon },

  data() {
    return {
      themeButtons: [
        { icon: 'moon', theme: 'dark' },
        { icon: 'sun', theme: 'light' },
      ],
      activeTheme: 0,
    }
  },
  methods: {
    cycleTheme() {
      if (this.activeTheme === this.themeButtons.length - 1) {
        this.activeTheme = 0
      } else {
        this.activeTheme++
      }

      this.$colorMode.preference = this.themeButtons[this.activeTheme].theme
    },
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: currentColor;
  font-weight: bold;

  &:visited {
    color: currentColor;
  }
}

a {
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  &:visited, &:active {
    color: currentColor;
  }

  &:active {
    font-style: italic;
  }
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $themeColor;
  padding: 0 10%;
}

#flex-right {
  display: flex;
  flex-direction: row;

  & > * {
    margin: auto 0.25rem;
  }
}

#theme-select {
  & > p {
    display: inline;
  }

  margin: auto 0.5rem;
  border-radius: 9999px;
  padding: 0.35rem;
  white-space: nowrap;
}

:root {
  &.light-mode header {
    color: $lightBgColor;
  }

  &.dark-mode header {
    color: $darkBgColor;
  }
}
</style>
