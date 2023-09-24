<script setup>
import { useData } from "vitepress";
import WakeLock from "./WakeLock.vue";

const { frontmatter } = useData();
</script>

<template>
  <h1>{{ frontmatter.title }}</h1>

  <WakeLock />

  <h2>Ingredients</h2>

  <div v-for="ingredientGroup in frontmatter.ingredients">
    <h3 v-if="frontmatter.ingredients.length > 1">
      {{ ingredientGroup.label }}
    </h3>

    <ul class="nostyle">
      <li v-for="ingredient in ingredientGroup.items">
        <input type="checkbox" :id="ingredient" />
        <label :for="ingredient">{{ ingredient }}</label>
      </li>
    </ul>
  </div>

  <h2 v-if="frontmatter.instructions?.length > 0">Instructions</h2>

  <div v-for="instructionGroup in frontmatter.instructions">
    <h3 v-if="frontmatter.instructions.length > 1">
      {{ instructionGroup.label }}
    </h3>

    <ol>
      <li v-for="instruction in instructionGroup.items">{{ instruction }}</li>
    </ol>
  </div>
</template>

<style scoped>
.nostyle {
  list-style-type: none;
}
</style>
