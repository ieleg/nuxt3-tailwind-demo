<template>
<div class="grid grid-cols-[200px_1fr] h-screen">
  <div class="bg-black text-white flex items-center justify-center">
    global id: {{ id || '-' }}
  </div>
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script setup>
const id = useState('roleId')
</script>