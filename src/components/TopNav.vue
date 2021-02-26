<template>
  <div id="top-nav">
    <div class="language-area">
      <span class="language-button">English</span>
      <span class="language-button">Japanese</span>
      <span class="language-button">Chinese</span>
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
#top-nav {
  z-index: 2;
  position: absolute;
  width: 100%;
  .language-area {
    display: flex;
    justify-content: center;
    width: 300px;
    margin:auto;
  }
  .language-button {
    padding: 1rem;
    cursor: pointer;
  }
  &:hover {
    //background-color: black;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
  }
}
</style>
