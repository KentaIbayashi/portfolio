<template>
  <div id="side-nav">
    <div class="touxiang side-button">
      <img src="@/assets/touxiang.png"
    />
    </div>
    <div class="like side-button">
      <v-icon name="heart"
        color="#EEE"
        scale="2"
      />
    </div>
    <div class="comment side-button">
      <v-icon name="comment-dots"
        color="#EEE"
        scale="2"
      />
    </div>
    <div class="share side-button">
      <v-icon name="share"
        color="#EEE"
        scale="2"
      />
    </div>
    <div class="music side-button">
      <v-icon name="compact-disc"
        color="#EEE"
        scale="2"
      />
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
#side-nav {
  z-index: 2;
  height: calc(100vh - 71px) ;
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //margin-top: 25%;
  .like-icon {
    fill: #f2f2f2;
  }
  .touxiang img {
    width: 2rem;
    height: 2rem;
    border-radius: 20px;
  }
  .side-button {
    margin: 0.4rem 0rem;
    cursor: pointer;
  }
}
</style>
