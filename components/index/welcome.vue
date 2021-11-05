<template>
  <div class="welcome-container">
    <h1>Velkommen til KodeKafé!</h1>
    <p>
      Ønsker du å møte andre som er interessert i koding, data, spill, og mer?
      Første fredag i måneden samles datainteresserte i Bergen på Apparat sitt
      lokale. Det serveres pizza og snacks, og det er helt gratis! Vi starter kl
      18 og det varer frem til kl. 23.
    </p>
    <p v-if="next.today">Neste KodeKafé er i dag!</p>
    <p v-else>
      Neste KodeKafé er <span v-if="next.today">i dag,</span>
      <span v-else>på</span> Fredag
      {{
        next.date.toLocaleDateString('nb-NO', {
          month: 'long',
          day: 'numeric',
        })
      }}.
      <span v-if="next.today">Kom og si hei!</span>
    </p>
    <a class="join-button" href="/discord">Bli med</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

function getFirstFridayInMonth(month: Date): Date {
  const firstInMonth = new Date(month.getFullYear(), month.getMonth(), 1)
  let temp = 5 - firstInMonth.getDay()
  if (temp < 0) {
    temp += 7
  }
  firstInMonth.setDate(temp + 1)
  return firstInMonth
}

function getFirstKodeKafe(): { date: Date; today: Boolean } {
  const today = new Date()
  let firstFriday = getFirstFridayInMonth(today)
  const status = { date: firstFriday, today: false }

  if (today.getDate() > firstFriday.getDate()) {
    if (today.getMonth() === 11) {
      today.setMonth(0)
      today.setDate(1)
    } else {
      today.setMonth(today.getMonth() + 1, 1)
    }
    firstFriday = getFirstFridayInMonth(today)
    status.date = firstFriday
  } else if (today.getDate() === firstFriday.getDate()) {
    status.today = true
    status.date = today
  }
  return status
}

export default Vue.extend({
  data() {
    return {
      next: getFirstKodeKafe(),
    }
  },
})
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
  min-width: min-content;

  h1 {
    white-space: nowrap;
  }
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
