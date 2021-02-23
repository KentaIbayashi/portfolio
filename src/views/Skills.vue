<template>
  <div class="skills">
    <img class="image" src="../assets/image4.jpg">
    <div class="content">
      <!--
      <p>{{ $t("message.hello") }}</p>
      -->
      <div class="border-box">
        <div class="header">
          Skills
        </div>
        <!--
        <div class="sub-header">
          Front-end Developer
        </div>
        -->
        <div class="text">
          <p>Vue.js 90%</p>
          <p>JavaScript 90%</p>
          <p>CSS 80%</p>
          <p>HTML 80%</p>
          <p>TypeScript 50%</p>
          <p>ReactNative 40%</p>
          <p>Node.js 40%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Skills extends Vue {
  skillSet = [
    {
      name: 'Vue.js',
      percentage: 90
    },
    {
      name: 'JavaScript',
      percentage: 90
    },
    {
      name: 'CSS',
      percentage: 80
    },
    {
      name: 'HTML',
      percentage: 80
    },
    {
      name: 'TypeScript',
      percentage: 50
    },
    {
      name: 'ReactNative',
      percentage: 40
    },
    {
      name: 'Node.js',
      percentage: 40
    }
  ]
}
</script>
