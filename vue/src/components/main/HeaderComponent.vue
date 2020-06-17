<template>
  <div class="wrapper-header">
    <div class="wrapper-header-top">
      <div @click="switchThemeColor">click {{ color_theme }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      color_theme: this.$store.getters.getColorTheme
    }
  },
  methods: {
    switchThemeColor () {
      this.color_theme = !this.color_theme
      this.$store.commit('setColorTheme', this.color_theme)
    } 
  }
}
</script>

<style lang="scss">
.wrapper-header {
  width: 100%;
}
.wrapper-header-top {
  height: 60px;
  background: red;
}
.color-theme-dark {
  .wrapper-header-top {
    background: black;
    color: #ffffff;
  }
}
</style>
