<template>
  <div class="container">
    <div id="top">
      <Welcome id="welcome" />
      <DiscordEmbed />
    </div>
    <div id="middle">
      <Map id="map" />
    </div>
    <div id="om">
      <h1>Om oss</h1>
      <p>
        <i
          >Tekst tatt fra apparat.no sin
          <a
            href="https://apparat.no/saker/dette-er-kodekafe"
            target="_blank"
            rel="noopener noreferrer"
            >side</a
          ></i
        >
      </p>
      <div class="container">
        <div>
          <p>
            Det er mange barn og tenåringer som er over middels interessert i
            data og programmering, men ofte blir det med å sitte på gutte- eller
            jenterommet og forsøke å finne frem selv. Det er et fagfelt som kan
            gå i svært mange retninger, fra spill-, web-, app-, sikkerhet,
            Arduino og IoT utvikling, og så veldig mye mer.
          </p>
          <p>
            Alle disse sjiktene er sine egne fagfelt med utrolig mye dybde og
            lærestoff. Heldigvis er det i disse dager svært enkelt å komme i
            gang med programmering; Det finnes mange gode ressurser på internett
            som YouTube, StackOverflow, Khan Academy, og en drøss andre
            nettsider med kurs, både gratis og ikke.
          </p>
        </div>
        <img src="@/assets/images/apparat-3.jpg" class="image" />
        <img src="@/assets/images/apparat-4.jpg" class="image" />
        <div>
          <p>
            Men så er det noe med å bare være i et miljø med likesinnede. Å
            finne noen på ca samme alder, med de samme interessene, som man kan
            lære av og med. Å se at man ikke er den eneste som sitter på rommet
            hjemme med de problemene, og har de samme ambisjonene.
          </p>
          <p>
            Kodekafé er et tilbud om en slik møteplass for ungdom mellom 13 og
            19 år som har lært seg litt programmering og har lyst å lære mer,
            bli kjent med likesinnede i samme aldersgruppe, bli med på et kult
            prosjekt, eller få andre med på sitt eget prosjekt.
          </p>
          <p>
            Vi som organiserer stiller med pizza, snop, internett, og
            fagkunnskap, og de som deltar stiller med egen PC og en
            nysgjerrighet for å lære.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Map from '@/components/index/map.vue'
import Welcome from '@/components/index/welcome.vue'
import DiscordEmbed from '~/components/discordEmbed.vue'

export default Vue.extend({
  components: { Welcome, Map, DiscordEmbed },

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
}

#top,
#middle,
#om {
  margin: 1rem 0;
}

#top {
  display: flex;
  flex-wrap: wrap;
  min-height: 50vh;
  justify-content: center;

  #welcome {
    flex-grow: 1;
    margin: 1rem;
  }
}

#middle #map {
  width: 100%;
  min-height: 50vh;
}

#om {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(2, min-content);
    gap: 0px 0px;
    gap: 1rem;

    & > .image {
      max-width: 100%;
    }

    & > * {
      max-height: min-content;
    }
  }
}
</style>
