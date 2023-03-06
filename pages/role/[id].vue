<template>
<div class="flex flex-col items-center justify-center gap-10 mt-56">

  {{ id }}
  <button class="ring-1 p-4 rounded-md ring-black" @click="globalId = id">save id to global state</button>
  </div>

</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
const route = useRoute()
const { id } = route.params
const globalId = useState('roleId')
</script>