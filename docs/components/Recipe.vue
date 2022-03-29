<template>
  <h1>{{ frontmatter.title }}</h1>

  <h2>Ingredients</h2>
  <ul class='nostyle'>
    <li v-for="ingredient in frontmatter.ingredients">
      <input type='checkbox' :id='ingredient' /><label :for='ingredient'>{{ ingredient }}</label>
    </li>
  </ul>

  <h2>Instructions</h2>
  <ol>
    <li v-for="instruction in frontmatter.instructions">
      {{ instruction }}
    </li>
  </ol>
</template>

<script setup >
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<style>
ul.nostyle {
  list-style-type: none;
}
</style>
