<template>
    <v-card-title>Quiz Result</v-card-title>
    <v-data-table-virtual :headers="headers" :items="quiz"></v-data-table-virtual>
    <v-card-actions>
        <v-card flat>
            <v-card-item>
                <v-card-title class="text-h5">Score is: {{ score }} / {{ quiz.length }}</v-card-title>
            </v-card-item>
            <v-card-actions>
                <v-btn block @click="resetQuiz"> Reset Quiz </v-btn>
            </v-card-actions>
        </v-card>
    </v-card-actions>
</template>
<script>
export default {
    props: {
        quiz: {
            type: Array,
            default: null,
        },
    },
    computed: {
        score() {
            return this.$store.getters.score
        },
        headers() {
            return this.$store.getters["headers"];
        },
    },
    methods: {
        resetQuiz() {
            this.$store.dispatch('resetQuiz')
        }
    }
};
</script>