
<script lang='ts'>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Calculate',
  data() {
    return {
      name: 'ahihi'
    }
  },
  methods: {
    changeName() {
      this.name = 'ahuhu'
    }
  },
  components: {
    HelloWorld,
  },
  setup() {
    const count = ref<number>(0)

    const updateCount = (newValue: number) => {
      count.value = newValue
    }
    return { count, updateCount }
  },
  watch: {
    // whenever question changes, this function will run
    count(newCount, oldCount) {
      console.log(newCount, oldCount);
    },
    name(newCount, oldCount) {
      console.log(newCount, oldCount);
    },
  },
}
</script>

<template>
  <div>
    <p :class="[count > 1 ? 'mb-10' : '', count > 2 ? 'text-green-700' : '']" :style="{}">{{ name }}+{{ count
    }}</p>
    <button class="mr-3" @click="changeName()">Change Name</button>
    <div class="flex gap-2 ">
      <button @click="count--">
        -
      </button>
      <button @click="count++">
        +
      </button>
    </div>
    <HelloWorld :count2=count v-model:count-tmp="count" />
  </div>
</template>

<style lang="scss"></style>