<template lang="pug">
  section.container
    Headings
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Headings from '@/components/ViewModels/Headings.vue'

@Component({
  components: {
    Headings
  }
})
export default class extends Vue {
  // Types.

  constructor() {
    super()
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100vh // Setting by Per Pages.
  display flex
  justify-content center
  align-items center
</style>
