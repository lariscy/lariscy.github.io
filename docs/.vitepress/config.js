import { defineConfig } from 'vitepress'
import path  from 'path'
import fs from 'fs'

import { name, description } from '../../package.json'

const recipesPath = path.join(__dirname, '..', 'recipes')

export default defineConfig({
  title: name,
  description,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/' }
    ],
    sidebar: {
      '/recipes/': getRecipeSidebar(),
      '': [{ text: 'Recipes', link: '/recipes/' }],
    }
  }
})

function getRecipeSidebar() {
  let returnData = [
    {
      text: 'Recipes',
      link: '/recipes/',
      children: []
    }
  ]

  const files = fs.readdirSync(recipesPath)
  files.forEach(file => {
    const fileName = file.split('.')[0];
    if (fileName.toLowerCase() !== 'index') {
      returnData[0].children.push({
        text: prettyName(fileName),
        link: `/recipes/${fileName}`
      })
    }
  })
  return returnData
}

function prettyName(name) {
  return name.split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
}
