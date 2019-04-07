import Vue from 'vue'
import { Mixin } from 'vue-mixin-decorator'

@Mixin
export class CheckScreen extends Vue {
  // Types.
  checkMobile: RegExp
  timeID: NodeJS.Timer | null

  constructor() {
    super()
    this.checkMobile = /(iPhone|iPad|iPod|Android)/i
    this.timeID = null
  }

  // SP Only.
  checkDirection() {
    if (this.checkMobile.test(navigator.userAgent)) {
      if (this.$store.state.isResize) return this.$store.commit('offResize')
      return screen.width > screen.height
        ? this.$store.commit('onLandscape')
        : this.$store.commit('offLandscape')
    }
  }

  // PC Only.
  checkResize() {
    if (!navigator.userAgent.match(this.checkMobile)) {
      if (this.$store.state.isLandscape) return this.$store.commit('offLandscape')
      if (!this.$store.state.isResize) return this.$store.commit('onResize')
      clearTimeout(this.timeID!)
      this.timeID = setTimeout(() => {
        this.$store.commit('offResize')
      }, 750)
    }
  }

  created() {
    this.checkDirection()
    window.addEventListener('orientationchange', this.checkDirection)
    window.addEventListener('resize', this.checkResize)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.checkResize)
  }
}
