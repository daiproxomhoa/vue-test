<script setup lang="ts">
defineProps<{ count2: number }>()
const count = defineModel({ type: Number, default: 2 })
defineEmits(['update:count-tmp'])
</script>

<template>
  <div>
    <h1>{{ count2 }}: {{ count }}</h1>
    <div class="flex gap-2 ">
      <button @click="count--">
        -
      </button>
      <button @click="count++">
        +
      </button>
    </div>
    <div class="flex gap-2 p-2 mt-2">
      <button class="" @click="$emit('update:count-tmp', count2 - 1)">
        -
      </button>
      <button @click="$emit('update:count-tmp', count2 + 1)">
        +
      </button>
    </div>
    <div style="height: 1000px;" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
