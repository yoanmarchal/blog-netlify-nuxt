<template>
  <div>
    <MainNavigation />
    <slot />

    <nav class="container mx-auto prose text-left" >
      <ContentList path="/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <img :src="article.coverImage" />
          <NuxtLink :to="article._path">Lire {{ article.title }}</NuxtLink>
        </div>
      </ContentList>
    </nav>
  </div>
</template>
