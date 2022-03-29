import DefaultTheme from 'vitepress/theme'

import Recipe from '../../components/Recipe.vue'

export default {
  ...DefaultTheme,

  enhanceApp({app}) {
    app.component('Recipe', Recipe)
  }
}
