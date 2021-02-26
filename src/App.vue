<template>
  <div id="app">
    <top-nav></top-nav>
    <bottom-nav></bottom-nav>
    <side-nav></side-nav>
    <swiper
      class="swiper"
      ref="swiper"
      :options="swiperOptionh"
      @slideChangeTransitionEnd="slideChangeTransitionEnd"
    >
      <swiper-slide><home></home></swiper-slide>
      <!--
      <swiper-slide>
        <swiper class="swiper vertical" :options="swiperOptionv">
          <swiper-slide>Vertical Slide 1</swiper-slide>
          <swiper-slide>Vertical Slide 2</swiper-slide>
          <swiper-slide>Vertical Slide 3</swiper-slide>
          <swiper-slide>Vertical Slide 4</swiper-slide>
          <swiper-slide>Vertical Slide 5</swiper-slide>
          <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
        </swiper>
      </swiper-slide>
      -->
      <swiper-slide><skills></skills></swiper-slide>
      <swiper-slide><works></works></swiper-slide>
      <swiper-slide><contact></contact></swiper-slide>
      <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
    <!--
    <router-view />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Skills from '@/views/Skills.vue'
import Works from '@/views/Works.vue'

@Component({
  components: {
    SideNav,
    TopNav,
    BottomNav,
    Home,
    Contact,
    Skills,
    Works
  }
})
export default class App extends Vue {
  swiperOptionh = {
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
    }
  }

  routeMap = ['Home', 'Skills', 'Works', 'Contact']

  swiperOptionv = {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true
    }
  }

  get swiper () {
    const swiperRef: any = this.$refs.swiper
    return swiperRef.$swiper
  }

  @Watch('$route')
  changeRoute (to: any, from: any) {
    switch (to.name) {
      case 'Home':
        this.swipeTo(0)
        break
      case 'Skills':
        this.swipeTo(1)
        break
      case 'Works':
        this.swipeTo(2)
        break
      case 'Contact':
        this.swipeTo(3)
        break
      default:
        break
    }
  }

  mounted () {
    // this.swiper.slideTo(3, 300, false)
  }

  slideChangeTransitionEnd () {
    this.$router.push({ name: this.routeMap[this.swiper.activeIndex] })
  }

  swipeTo (index: number) {
    this.swiper.slideTo(index, 400, false)
  }
}
</script>

<style lang="scss">
@import "../src/assets/css/common.scss";
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f2f2;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 100%;
}
</style>
