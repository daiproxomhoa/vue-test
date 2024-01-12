
<script setup lang='ts'>
import { RouterLink } from 'vue-router';
import { authState } from '../store/auth';

const route = [
    { path: '/', label: 'Dashboard', },
    { path: '/about', label: 'About' },
    { path: '/calculate', label: 'Calculate' }
]
</script>

<template>
    <div class="flex flex-col border-r-2 border-neutral-400 p-4 gap-2 bg-white w-64 h-screen sticky top-0">
        <template v-for="(item) in route">
            <RouterLink :to="item.path" exact-active-class="text-green-700"
                class="flex items-center border border-neutral-400 rounded-lg h-10 px-4 hover:bg-neutral-300">
                {{ item.label }}
            </RouterLink>
        </template>
        <div class="flex-1" />
        <button class="flex items-center border border-neutral-400 rounded-lg h-10 px-4 hover:bg-neutral-300 justify-center"
            @click="authState.logout()">
            Logout
        </button>
    </div>
</template>

<style lang="scss"></style>