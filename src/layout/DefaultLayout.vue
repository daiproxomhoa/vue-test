
<script setup lang='ts'>
import { RouterView } from 'vue-router';
import DefaultAsidebar from './DefaultAsidebar.vue';
</script>

<template>
  <div class="flex h-screen">
    <DefaultAsidebar />
    <div class="flex flex-col h-full p-4 flex-1 overflow-hidden h-sc">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>