import CollapseTransition from './src/collapse-transition.vue'
import type { App } from 'vue'

CollapseTransition.install = (app: App): void => {
  app.component('collapse-transition', CollapseTransition)
}

export default CollapseTransition