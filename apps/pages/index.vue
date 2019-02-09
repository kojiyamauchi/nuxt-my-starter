<template lang="pug">
  section.container
    Heading
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Heading from '@/components/Heading.vue'

@Component({
  components: {
    Heading
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
