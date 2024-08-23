<template>
    <v-card-title>Quiz Result</v-card-title>
    <v-data-table-virtual :headers="headers" :items="quiz"></v-data-table-virtual>
    <v-card-subtitle>Score is: {{ score }} / {{ quiz.length }}</v-card-subtitle>
    <v-card-actions>
        <v-btn @click="resetQuiz"> Reset Quiz </v-btn>
    </v-card-actions>

</template>
<script>
export default {
    props: {
        score: {
            type: Number,
            default: 0,
        },
        quiz: {
            type: Array,
            default: null,
        },
        headers: {
            type: Array,
            default: null
        }
    },
    methods: {
        resetQuiz() {
            this.$store.dispatch('resetQuiz')
        }
    }
};
</script>