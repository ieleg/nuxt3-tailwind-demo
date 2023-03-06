

<script setup>
const routes = ['/user', '/login', ...Array.from({length: 21}, (_, i) => `/role/${i}`)]
</script>

<template>
  <div class="grid grid-cols-2 gap-6 p-6 lg:grid-cols-4">
    <div class="p-10 aspect-square rounded ring-tipDark ring-1 flex items-center justify-center bg-black hover:scale-105 ease-slow duration-300" v-for="path in routes" :key="path">
      <NuxtLink :to="path" class=" text-white">{{ path }}</NuxtLink>
    </div>
  </div>
</template>