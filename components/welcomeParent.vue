<template>
  <div>
    <WelcomeItem>
      <template #icon>
        <i class="fa-solid fa-book-open"></i>
      </template>
      <template #heading>
        Documentation
      </template>
      <template #contant>
        Vue’s official documentation provides you with all information you need to get started.
      </template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <i class="fa-solid fa-toolbox"></i>
      </template>
      <template #heading>
        Tooling
      </template>
      <template #contant>
        This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar. If you need to test
        your components and web pages, check out Cypress and Cypress Component Testing.
        More instructions are available in README.md.
      </template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <i class="fa-brands fa-connectdevelop"></i>
      </template>
      <template #heading>
        Ecosystem
      </template>
      <template #contant>
        Get official tools and libraries for your project: Pinia, Vue Router, Vue Test Utils, and Vue Dev Tools. If you
        need more resources, we suggest paying Awesome Vue a visit
      </template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <i class="fa-solid fa-comments"></i>
      </template>
      <template #heading>
        Community
      </template>
      <template #contant>
        Got stuck? Ask your question on Vue Land, our official Discord server, or StackOverflow. You should also
        subscribe to our mailing list and follow the official @vuejs twitter account for latest news in the Vue world
      </template>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <i class="fa-solid fa-heart"></i>
      </template>
      <template #heading>
        Support Vue
      </template>
      <template #contant>
        As an independent project, Vue relies on community backing for its sustainability. You can help us by becoming a
        sponsor.
      </template>
    </WelcomeItem>
  </div>
</template>

<script>
import WelcomeItem from './WelcomeItem.vue';

export default {
  components: {
    WelcomeItem
  }
}
</script>

<style>

</style>
