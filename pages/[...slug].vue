<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
        <template #empty>
        </template>
      </ContentDoc>
    </main>
  </NuxtLayout>

</template>
