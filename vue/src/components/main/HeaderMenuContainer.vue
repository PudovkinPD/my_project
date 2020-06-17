<template>
  <div class="page">
    <header-component>

      <div class="main-content-wrapper">
        <slot></slot>
      </div>

    </header-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/main/HeaderComponent'

export default {
  name: 'HeaderMenuContainer',
  components: {
    HeaderComponent
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
.page {
  display: flex;
  min-height: 100%;
  width: 100%;
}
</style>
