/*
 Types Inside Vue.js
*/
import Vue, { ComponentOptions } from 'vue'
import { Route } from 'vue-router'
import { Dictionary } from 'vue-router/types/router'
import { Store } from 'vuex'
import { MetaInfo } from 'vue-meta'
import { Mixins } from '@/plugins/Mixins'

// declare module 'AddModulesName'
declare module 'vue/types/vue' {
  interface Vue {
    $mixins: Mixins // For plugins/Mixins.ts
  }
}

// Vue.js API Types.
declare module 'vue/types/options' {
  // Context APIs. See -> https://ja.nuxtjs.org/api/context/
  export interface Context {
    app: Vue
    isClient: boolean
    isServer: boolean
    isStatic: boolean
    isDev: boolean
    isHMR: boolean
    route: Route
    store: Store<any>
    env: Object
    params: Dictionary<string>
    query: Dictionary<string>
    req: Request
    res: Response
    redirect: Function
    error: Function
    nuxtState: Object
    beforeNuxtRender: Function
  }

  // Transitions APIs. See -> https://ja.nuxtjs.org/api/pages-transition
  export interface Transition {
    name?: string
    mode?: string
    css?: boolean
    duration?: number
    type?: string
    enterClass?: string
    enterToClass?: string
    enterActiveClass?: string
    leaveClass?: string
    leaveToClass?: string
    leaveActiveClass?: string
  }

  // Pages APIs. ( in Declare Components. "@Component({})" ) See -> https://ja.nuxtjs.org/api/
  export interface ComponentOptions<V extends Vue> {
    asyncData?: (ctx: Context) => object
    fetch?: (ctx: Context) => Promise<void> | void
    head?: MetaInfo | (() => MetaInfo)
    layout?: string
    middleware?: string | string[]
    scrollToTop?: boolean
    transition?: string | Transition | ((to: Route, from: Route) => string)
    validate?: (ctx: Context) => Promise<boolean> | boolean
    watchQuery?: boolean | string[]
  }
}
