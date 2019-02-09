import Vue from 'vue'
import { Mixin } from 'vue-mixin-decorator'

@Mixin
export class Mixins extends Vue {
  // Types.

  constructor() {
    super()
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  isSP() {
    if (process.browser) {
      const largeMobileWidth = 768
      return window.innerWidth < largeMobileWidth
    } else {
      return false
    }
  }

  resolvedPromise<T>(arg: T) {
    return new Promise(resolve => resolve(arg))
  }
}

export default <T>(_app: T, inject: (arg1: string, arg2: Mixins) => void) => {
  inject('mixins', new Mixins())
}
