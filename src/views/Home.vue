<template>
  <div class="home">
    <!--
    <img class="image" src="../assets/image4.jpg">
    -->
    <div class="stripe image">
      <div class="stripe_inner">aaaa</div>
    </div>
    <div class="content">
      <!--
      <p>{{ $t("message.hello") }}</p>
      -->
      <div class="border-box">
        <div class="header ki-header-text">
          Kenta Ibayashi
        </div>
        <div class="sub-header">
          Front-end Developer
        </div>
        <div class="text">
          <p>・Like Technical Things</p>
          <p>・Like Learning Foreign Languages</p>
          <p>・Like Creation</p>
          <p>・Like Chinese Culture</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
// @import "@/assets/css/stripe_background.scss";

.home {
  position: relative;
  height: 100%;
}
.image {
  width: 100%;
  height: 100%;
}
.content {
  top: 0;
  padding: 3rem;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  animation-name: fadeIn;
  animation-duration: 3s;
}
.border-box {
  height: fit-content;
  text-align: left;
  border-left: solid #f2f2f2 0.2rem;
  padding-left: 1.2rem;
  .header {
    font-size: 5rem;
    line-height: 1;
  }
  .sub-header {
    font-size: 2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
