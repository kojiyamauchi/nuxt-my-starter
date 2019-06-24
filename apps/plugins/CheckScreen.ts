import Vue from 'vue'
import { Mixin } from 'vue-mixin-decorator'

@Mixin
export class CheckScreen extends Vue {
  // Types.
  private checkMobile: RegExp
  private timeID: NodeJS.Timer | null

  public constructor() {
    super()
    this.checkMobile = /(iPhone|iPad|iPod|Android)/i
    this.timeID = null
  }

  // SP Only.
  private checkDirection(): void {
    if (this.checkMobile.test(navigator.userAgent)) {
      if (this.$store.state.isResize) this.$store.commit('offResize')
      return screen.width > screen.height ? this.$store.commit('onLandscape') : this.$store.commit('offLandscape')
    }
  }

  // PC Only.
  private checkResize(): void {
    if (!this.checkMobile.test(navigator.userAgent)) {
      if (this.$store.state.isLandscape) this.$store.commit('offLandscape')
      if (!this.$store.state.isResize) this.$store.commit('onResize')
      clearTimeout(this.timeID!)
      this.timeID = setTimeout((): void => {
        this.$store.commit('offResize')
      }, 750)
    }
  }

  private created(): void {
    if (process.browser) {
      this.checkDirection()
      window.addEventListener('orientationchange', this.checkDirection)
      window.addEventListener('resize', this.checkResize)
    }
  }

  private beforeDestroy(): void {
    if (process.browser) {
      window.removeEventListener('resize', this.checkResize)
    }
  }
}
