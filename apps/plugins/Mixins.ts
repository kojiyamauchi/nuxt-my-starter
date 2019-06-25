import Vue from 'vue'
import { Mixin } from 'vue-mixin-decorator'

@Mixin
export class Mixins extends Vue {
  // Types.

  public sleep(ms: number): Promise<number> {
    return new Promise((resolve): number => {
      return setTimeout(resolve, ms)
    })
  }

  public isSP(): boolean {
    if (process.browser) {
      const largeMobileWidth = 768
      return window.innerWidth < largeMobileWidth
    } else {
      return false
    }
  }

  public resolvedPromise<T>(arg: T): Promise<T> {
    return new Promise((resolve): void => resolve(arg))
  }
}

export default <T>(_app: T, inject: (arg1: string, arg2: Mixins) => void): void => {
  inject('mixins', new Mixins())
}
