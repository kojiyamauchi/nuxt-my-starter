<template lang="pug">
  .headings
    Heading
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Heading from '@/components/Presentations/Heading.vue'

@Component({
  components: {
    Heading
  }
})
export default class Headings extends Vue {
  // Types.
}
</script>

<style lang="stylus" scoped>
.headings
  display inline
</style>
