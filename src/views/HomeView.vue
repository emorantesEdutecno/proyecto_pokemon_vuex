<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <HelloWorld msg="Bienvenido al Consumo de Api Pokemon"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img{
  width: 45%;
}
</style>
