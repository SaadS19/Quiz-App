<template>
    <v-container>
        <h2>Student Name : M Saad Sohail</h2>
        <v-card v-if="currentQuestion < questions.length && !result" class="my-3">
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
                    <!-- <v-col>
                        <v-btn @click="showResult">Submit</v-btn>
                    </v-col> -->
                </v-card-actions>
            </v-card>
        </v-card>
        <v-card v-else class="my-3">
            <quiz-result :quiz="questions"></quiz-result>
        </v-card>
    </v-container>
</template>
<script>
import QuizResult from "./QuizResult.vue";
export default {
    components: {
        QuizResult,
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
            return question[currentQuestion].options
        },
        result() {
            return this.$store.getters.showResult;
        }
    },
    methods: {
        showResult() {
            this.$store.dispatch('showResult');
        },
        submitAnswer($event) {
            const option = $event.target.value;
            this.$store.dispatch('setSelectedAnswer', { value: option })
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