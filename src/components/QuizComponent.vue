<template>
    <!-- eslint-disable -->
    <v-container fluid class="d-flex flex-column pa-0">
        <v-row no-gutters>
            <v-col cols="12" align="center" class="mt-2">
                <v-btn color="success" v-if="!timer" @click="toggleTimer">Start Quiz</v-btn>
                <the-timer v-if="timer"></the-timer>
            </v-col>
        </v-row>
        <v-row v-if="timer">
            <v-col cols="12">
                <div v-if="currentQuestion < questions.length" class="d-flex flex-column justify-space-between">
                    <v-card class="d-flex flex-column" :style="{ height: height }">
                        <v-card-title class="text-h4 text-md-h3">Question {{ questionNo }} of {{
                            questions.length
                        }}</v-card-title>
                        <v-card-text class="text-h5 text-md-h4">{{ questions[currentQuestion].question
                            }}</v-card-text>
                        <v-card-actions class="">
                            <v-radio-group class="" :disabled="disableOption" v-model="selectedAnswer">
                                <v-radio class="" v-for="(option, index) in options" :key="index" :label="option"
                                    :value="option" @click="submitAnswer"></v-radio>
                            </v-radio-group>
                        </v-card-actions>
                        <v-card-actions class="d-flex justify-center">
                            <v-btn @click="previousQuestion" :disabled="currentQuestion === 0">Previous</v-btn>
                            <v-btn @click="nextQuestion">Next</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div v-else>
                    <quiz-result :headers="header" :items="questions" :actions="true">
                        <template #header.question>
                            <strong>Custom Question Header</strong>
                        </template>
                        <template #header.options>
                            <em>Custom Options Header</em>
                        </template>
                        <template #header.answerSelected>
                            <span>Custom Chosen Answer Header</span>
                        </template>
                        <template #header.answer>
                            <em>Custom Correct Answer Header</em>
                        </template>
                        <template #header.actions>
                            <em>Custom Actions Header</em>
                        </template>

                        <template #column.options="{ item }">
                            <em>{{ item.options.join(' , ') }}</em>
                        </template>
                        <template #column.question="{ item }">
                            <em>{{ item.question }}</em>
                        </template>
                        <template #column.answerSelected="{ item }">
                            <em>{{ item.answerSelected }}</em>
                        </template>
                        <template #column.answer="{ item }">
                            <em>{{ item.answer }}</em>
                        </template>
                        <template #cell.actions="{ item }">
                            <v-btn class="me-2" @click="customEdit(item)" prepend-icon="mdi-pencil">
                            </v-btn>
                        </template>
                    </quiz-result>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import QuizResult from "./QuizResult.vue";
import TheTimer from "./TheTimer.vue";
import { useDisplay } from "vuetify";
import { computed } from "vue";
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
        editItem(item) {
            console.log(item)
        },
        deleteItem(item) {
            console.log(item)
        },
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
    data() {
        return {
            header: [
                {
                    key: 'question',
                    title: 'Question',
                },
                {
                    key: 'options',
                    title: 'Options',
                },
                {
                    key: 'answerSelected',
                    title: 'Chosen Answer',
                },
                {
                    key: 'answer',
                    title: 'Answer'
                }
            ],
        }
    },
    setup() {
        const { name } = useDisplay();

        const height = computed(() => {
            // console.log(name._object.height)
            const displayHeight = name._object.height;
            console.log(displayHeight)
            if (450 > displayHeight) return "50vh";
            else if (displayHeight >= 450 && displayHeight < 500) return "60vh";
            else if (displayHeight >= 500 && displayHeight < 550) return "60vh";
            else if (displayHeight >= 550 && displayHeight < 600) return "60vh";
            else if (displayHeight >= 600 && displayHeight < 650) return "68vh";
            else if (displayHeight >= 650 && displayHeight < 700) return "70vh";
            else if (displayHeight >= 700 && displayHeight < 750) return "73vh";
            else if (displayHeight >= 750 && displayHeight < 850) return "73vh";
            else if (displayHeight >= 850 && displayHeight < 950) return "80vh";
            else if (displayHeight >= 950 && displayHeight < 1000) return "80vh";
            else if (displayHeight >= 1000 && displayHeight < 1280) return "80vh";
            else if (displayHeight >= 1280) return "83vh";
            else return "10vh";
        });
        //   console.log(height.value)
        return { height };
    }
}
</script>
<style>
.v-label {
    font-size: 2rem
}
</style>
