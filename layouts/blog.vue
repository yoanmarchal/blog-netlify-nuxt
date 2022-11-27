<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', where: { layout: 'article' }, limit: 5}
</script>

<template>
  <div>
    <div class="pb-4 border-b border-gray-500">
      Blog layout
    </div>
    <slot />
    <nav>
      <ContentList :query="query" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">

          <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
        </div>
      </ContentList>

      </nav>
  </div>
</template>
