<template lang="pug">
  .container
    h1(v-if="error.statusCode === 404")
      | Page Not Found
    h1(v-else)
      | Error
    nuxt-link(to="/")
      | Home
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'Template'
})

export default class Error extends Vue {
  @Prop({ required: true, type: String }) error!: string

  // Types.

  constructor() {
    super()
  }

}
</script>

<style lang="stylus" scoped>
</style>
