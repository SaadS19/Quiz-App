<template>
    <!-- eslint-disable -->
    <v-data-table-virtual :headers="headers" :items="quiz">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Quiz Result</v-toolbar-title>
            </v-toolbar>
        </template>

        <template v-slot:item.question="{ item }">
            <div>{{ item.question }}</div>
        </template>

        <template v-slot:item.options="{ item }">
            <div>{{ item.options }}</div>
        </template>

        <template v-slot:item.answerSelected="{ item }">
            <v-chip :color="getColor(item)">
                {{ item.answerSelected === null ? "Not selected" : item.answerSelected }}
            </v-chip>
        </template>

    </v-data-table-virtual>
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
/* eslint-disable */
export default {
    props: {
        quiz: {
            type: Array,
            default: null,
        },
    },
    computed: {
        score() {
            return this.$store.getters.score;
        },
        headers() {
            return this.$store.getters["headers"];
        },
    },
    methods: {
        resetQuiz() {
            this.$store.dispatch("resetQuiz");
        },
        getColor(item) {
            if (item.answerSelected === item.answer) {
                return "green";
            } else if (item.answerSelected !== item.answer) {
                return "red";
            }
        },
    },
};
</script>
