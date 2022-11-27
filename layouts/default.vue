<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div>
    <div class="pb-4 border-b border-gray-500">
      Default layout
      <nav>
        <ContentNavigation v-slot="{ navigation }">
          <ul>
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </nav>
    </div>
    <slot />
  </div>
</template>
