<template lang="pug">
  section.container
    Headings
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Headings from '@/components/ViewModels/Headings.vue'
import { Mixins } from 'vue-mixin-decorator'
import { CheckScreen } from '@/plugins/CheckScreen'

@Component({
  components: {
    Headings
  }
})
export default class extends Mixins<CheckScreen>(CheckScreen) {
  // Types.
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
