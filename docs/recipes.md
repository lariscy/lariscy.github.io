---
title: Recipes
---

<script setup>
import { data as recipes } from './recipes.data.js'
</script>

<h1>All Recipes</h1>

<ul>
    <li v-for="recipe of recipes">
        <a :href="recipe.url">{{ recipe.frontmatter.title }}</a>
    </li>
</ul>
