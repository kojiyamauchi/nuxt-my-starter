/*
 Types Outside Vue.js
*/
// Extension of Vue.
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// process.browser & process.server.
declare namespace NodeJS {
  interface Process {
    browser: boolean
    server: boolean
  }
}
declare var process: NodeJS.Process

// If Bundling Up .json Files on webpack.
declare module '*.json' {
  const value: any
  export default value
}

