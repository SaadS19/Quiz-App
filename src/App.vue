<template>
  <v-app>
    <the-header></the-header>
    <v-main>
      <quiz-component></quiz-component>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import QuizComponent from './components/QuizComponent.vue';
export default {
  name: 'App',

  components: {
    TheHeader,
    QuizComponent
  },
}
</script>
