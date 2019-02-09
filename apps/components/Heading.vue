<template lang="pug">
  h1.heading
    | Nuxt.js My Starter Kit.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})

export default class Heading extends Vue {
  // Types.

  constructor() {
    super()
  }

}
</script>

<style lang="stylus" scoped>
  .heading
    display inline-block
    font-size 36px
    letter-spacing 0.02em
    transform translateY(-60%)
</style>