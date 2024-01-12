
<script setup lang='ts'>
import { RouterView } from 'vue-router';
import DefaultAsidebar from './DefaultAsidebar.vue';
</script>

<template>
  <div class="flex min-h-screen">
    <DefaultAsidebar />
    <div class="flex flex-col h-full overflow-auto p-4 flex-1 max-h-full">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>