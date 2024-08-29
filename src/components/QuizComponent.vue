<template>
    <v-container>
        <v-row>
            <v-col cols="12" align="center">
                <v-btn color="success" v-if="!timer" @click="toggleTimer">Start Quiz</v-btn>
                <the-timer v-if="timer"></the-timer>
            </v-col>
        </v-row>
        <v-row v-if="timer">
            <v-col cols="12">
                <v-card v-if="currentQuestion < questions.length" class="my-3">
                    <v-card-title>
                        Question {{ questionNo }} of {{ questions.length }}
                    </v-card-title>
                    <v-card-text>
                        {{ questions[currentQuestion].question }}
                    </v-card-text>
                    <v-card-actions>
                        <v-radio-group :disabled="disableOption" v-model="selectedAnswer">
                            <v-radio v-for="(option, index) in options" :key="index" :label="option" :value="option"
                                @change="submitAnswer"></v-radio>
                        </v-radio-group>
                    </v-card-actions>
                    <v-card>
                        <v-card-actions>
                            <v-col class="d-flex justify-center">
                                <v-btn @click="previousQuestion" :disabled="currentQuestion === 0">Previous</v-btn>
                                <v-btn @click="nextQuestion">Next</v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-card>
                <quiz-result v-else></quiz-result>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import QuizResult from "./QuizResult.vue";
import TheTimer from "./TheTimer.vue";
export default {
    components: {
        QuizResult,
        TheTimer,
    },
    computed: {
        currentQuestion() {
            return this.$store.getters["currentQuestion"];
        },
        questions() {
            return this.$store.getters["questions"];
        },
        selectedAnswer() {
            return this.$store.getters["selectedAnswer"];
        },
        questionNo() {
            const currentQuestion = this.$store.getters.currentQuestion;
            return currentQuestion + 1;
        },
        disableOption() {
            return this.$store.getters["disableOption"];
        },
        options() {
            const currentQuestion = this.$store.getters.currentQuestion;
            const question = this.$store.getters.questions;
            return question[currentQuestion].options;
        },
        timer() {
            return this.$store.getters.timer;
        },
    },
    methods: {
        toggleTimer() {
            this.$store.dispatch("toggleTimer");
        },
        submitAnswer($event) {
            const answer = $event.target.value;
            this.$store.dispatch("setSelectedAnswer", answer);
            this.$store.dispatch("submitData");
        },
        nextQuestion() {
            this.$store.dispatch("nextQuestion");
        },
        previousQuestion() {
            this.$store.dispatch("previousQuestion");
        },
    },
};
</script>