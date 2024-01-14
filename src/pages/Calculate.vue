
<script setup lang='ts'>
import { mappedData, fakeData } from '../fakeData';
import ListItem from './ListItem.vue';

const data = mappedData(fakeData)
</script>

<template>
  <div class="bg-white rounded-xl p-4 h-full overflow-auto">
    <div class="flex flex-col gap-2">
      <ListItem :data="data" :level="0" />
    </div>
  </div>
</template>

<style lang="scss"></style>