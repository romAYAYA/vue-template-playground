<template>
  <div class="wrapper">
    <Header :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello, vue</h1>
      </div>
    </div>
    <Footer :links="links" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer },

  data() {
    return {
      title: 'Template',
      links: [
        {
          title: 'Home',
          alias: 'home',
          url: '/',
        },
        {
          title: 'About',
          alias: 'about',
          url: '/about',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
