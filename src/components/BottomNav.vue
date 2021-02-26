<template>
  <div id="bottom-nav">
    <div class="tab-area">
      <router-link class="tab-button" to="/">首页</router-link>
      <router-link class="tab-button" to="/skills">技术</router-link>
    </div>
    <button class="tab-center-button">+</button>
    <div class="tab-area">
      <router-link class="tab-button" to="/works">作品</router-link>
      <router-link class="tab-button" to="/contact">联系</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SideNav extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
#bottom-nav {
  z-index: 2;
  padding: 10px 0px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: solid 3px #FFFFFF55;
  .tab-button {
    padding: 1rem 2rem;
  }
  .tab-center-button {
    width: 4rem;
    height: 3rem;
    border: none;
    border-radius: 0.8rem;
    font-size: 2rem;
    box-shadow: -8px 0 #3bfffc, 8px 0 hsl(307, 100%, 63%);
  }
  a {
    font-weight: bold;
    color: #FFFFFF55;
    text-decoration: none;

    &.router-link-exact-active {
      color: #f2f2f2;
    }
  }
}
</style>
