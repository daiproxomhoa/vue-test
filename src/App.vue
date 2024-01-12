
<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { authState } from './store/auth';
import './style.css'
const token = ref(localStorage.getItem('token') || undefined)
watch(token, newValue => {
  if (!newValue) {
    authState.logout()
  }
  else {
    authState.login()
  }
})
onMounted(() => {
  if (!token.value) {
    authState.logout()
  }
  else {
    authState.login()
  }
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss"></style>