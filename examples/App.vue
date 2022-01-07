<template>
  <div id="app">
    <BCLocation/>
  </div>
</template>

<script>
import BCLocation from '~/components/location'

export default {
  name: 'App',
  components: { 
    BCLocation
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
