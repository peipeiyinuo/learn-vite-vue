<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  msg: string,
  info?: string
}>(),{
  info: '默认信息'
})

console.log(props)
const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ info }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue <span>logos to learn more</span></p>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
  span{
    color: orchid;
  }
}
</style>
