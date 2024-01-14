
<script setup lang="ts">
import { reactive } from 'vue';

const show = defineModel('show', { type: Boolean, default: true })
const level = defineModel('level', { type: Number, default: 0 })
const data = defineModel('data', { default: [], type: Array<Record<string, any>> })
const state = reactive<{ open: boolean[] }>({ open: data.value.map(() => true) })

</script>
<template>
    <template v-for="(item, index) in data" v-if="show" :style="{ marginLeft: (level ? 48 : 0) + 'px' }">
        <div class="flex" :style="{ marginLeft: (level * 48 + (item.children.length > 0 ? 0 : 48)) + 'px' }">
            <button v-if="item.children.length > 0"
                class="mx-3 h-6 w-6 flex items-center justify-center mt-2 shrink-0 border border-neutral-400 rounded"
                @click="state.open[index] = !state.open[index]">
                {{ state.open[index] ? '-' : '+' }}
            </button>
            <div class="border border-neutral-500 p-2 rounded bg-white cursor-pointer w-full">
                {{ item.standardCategoryName }}
            </div>
        </div>
        <ListItem :data="item.children" :level="level + 1" :show="state.open[index]" />
    </template>
</template>

<style ></style>