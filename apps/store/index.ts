import { MutationTree, GetterTree, ActionTree } from 'vuex'

interface State {
  // Add Interfaces on State.
  isLandscape: boolean
  isResize: boolean
}

export const state = (): State => ({
  // Add State.
  isLandscape: false,
  isResize: false
})

export const mutations: MutationTree<State> = {
  // Add Mutations.
  onLandscape(stateArg: State) {
    stateArg.isLandscape = true
  },
  offLandscape(stateArg: State) {
    stateArg.isLandscape = false
  },
  onResize(stateArg: State) {
    stateArg.isResize = true
  },
  offResize(stateArg: State) {
    stateArg.isResize = false
  }
}

export const getters: GetterTree<State, State> = {
  // Add Getters.
}

export const actions: ActionTree<State, State> = {
  // Add Actions.
}

