<template>
  <div v-if="error.statusCode === 404">
    <h3>404</h3>
    <p>That page wasn't found. Try using the links on the top of the page</p>
  </div>
  <div v-else>
    <p>
      An error occured that i havent bothered creating an error page for. Just
      read this instead: <br />
      <pre class="language-json">{{ error }}</pre>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  props: {
    error: { type: Object, required: true },
  },
  head: {
    title: 'Oops, an error occured',
    titleTemplate: '%s',
  },
})
</script>
