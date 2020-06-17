<template>
  <div id="app" :class="$store.getters.getColorTheme ? 'color-theme-dark' : ''">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
}
html {
  height: 100%;
}
#app {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  height: 100%;
  min-width: 1000px;
}
</style>
