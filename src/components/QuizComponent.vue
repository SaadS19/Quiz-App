<!-- <template>
    <v-app>
        <div class="d-flex flex-column pa-3">
            <v-row no-gutters>
                <v-col cols="12" align="center">
                    <v-responsive>
                        <v-btn color="success" v-if="!timer" @click="toggleTimer">Start Quiz</v-btn>
                        <the-timer v-if="timer"></the-timer>
                    </v-responsive>
                </v-col>
            </v-row>
        </div>
        <div class="d-flex flex-column pa-3">saadasasdas
            <v-row v-if="timer" class="fill-height" no-gutters>
                <v-col cols="12" class="pa-0">
                    <v-responsive>
                        <v-card class="d-flex flex-column" v-if="currentQuestion < questions.length" height="100%">
                            <v-card-title>Question {{ questionNo }} of {{ questions.length
                                }}</v-card-title>
                            <v-card-text>{{ questions[currentQuestion].question }}</v-card-text>
                            <v-card-actions>
                                <v-radio-group :disabled="disableOption" v-model="selectedAnswer">
                                    <v-radio v-for="(option, index) in options" :key="index" :label="option"
                                        :value="option" @change="submitAnswer"></v-radio>
                                </v-radio-group>
                            </v-card-actions>
                            <v-card>
                                <v-card-actions>
                                    <v-col class="d-flex justify-center pa-0">
                                        <v-btn @click="previousQuestion"
                                            :disabled="currentQuestion === 0">Previous</v-btn>
                                        <v-btn @click="nextQuestion">Next</v-btn>
                                    </v-col>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                        <quiz-result :headers="header" :items="questions" v-else>
                            <template #header-question>
                                <strong style="color: teal;">Question</strong>
                            </template>
                            <template #header-options>
                                <strong style="color: teal;">Options</strong>
                            </template>
                            <template #header-answerSelected>
                                <strong style="color: teal;">Chosen Answer</strong>
                            </template>
                            <template #header-answer>
                                <strong style="color: teal;">Correct Answer</strong>
                            </template>

                            <template #cell-question="{ item }">
                                <p>{{ item.question }}</p>
                            </template>
                            <template #cell-options="{ item }">
                                {{ item.options.join(', ') }}
                            </template>
                            <template #cell-answerSelected="{ item }">
                                <span>{{ item.answerSelected || 'Not Answered' }}</span>
                            </template>
                            <template #cell-answer="{ item }">
                                <span>{{ item.answer }}</span>
                            </template>
                        </quiz-result>
                    </v-responsive>
                </v-col>
            </v-row>
        </div>
    </v-app>
</template> -->


<template>
    <v-container fluid>
        <v-row no-gutters>
            <v-col cols="12" align="center" class="mt-2">

                <v-btn color="success" v-if="!timer" @click="toggleTimer">Start Quiz</v-btn>
                <the-timer v-if="timer"></the-timer>

            </v-col>
        </v-row>
        <v-row v-if="timer">
            <v-col cols="12">
                <v-card v-if="currentQuestion < questions.length">
                    <v-card-title class="text-h5 mb-4">Question {{ questionNo }} of {{ questions.length
                        }}</v-card-title>
                    <v-card-text>{{ questions[currentQuestion].question }}</v-card-text>
                    <v-card-actions>
                        <v-radio-group :disabled="disableOption" v-model="selectedAnswer">
                            <v-radio v-for="(option, index) in options" :key="index" :label="option" :value="option"
                                @change="submitAnswer"></v-radio>
                        </v-radio-group>
                    </v-card-actions>
                    <v-card-actions>
                        <v-col class="d-flex justify-center pa-0">
                            <v-btn @click="previousQuestion" :disabled="currentQuestion === 0">Previous</v-btn>
                            <v-btn @click="nextQuestion">Next</v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
                <quiz-result :headers="header" :items="questions" :actionsHeader="true" :checkbox="false" v-else>
                    <template #header-question>
                        <strong style="color: teal;">Question</strong>
                    </template>
                    <template #header-options>
                        <strong style="color: teal;">Options</strong>
                    </template>
                    <template #header-answerSelected>
                        <strong style="color: teal;">Chosen Answer</strong>
                    </template>
                    <template #header-answer>
                        <strong style="color: teal;">Correct Answer</strong>
                    </template>
                    <template #cell-question="{ item }">
                        <p>{{ item.question }}</p>
                    </template>
                    <template #cell-options="{ item }">
                        {{ item.options.join(', ') }}
                    </template>
                    <template #cell-answerSelected="{ item }">
                        <span>{{ item.answerSelected || 'Not Answered' }}</span>
                    </template>
                    <template #cell-answer="{ item }">
                        <span>{{ item.answer }}</span>
                    </template>

                    <!-- <template v-slot:checkbox="{ item }">
                        <v-checkbox v-model="selectedItems" :value="item.id" />
                    </template> -->

                    <template v-slot:custom-actions="{ item }">
                        <v-icon class="me-2" @click="editItem(item)">mdi-pencil</v-icon>
                        <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>

                </quiz-result>
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
        editItem(item) {
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
                    title: 'Correct Answer',
                },

            ]
        }
    },
};
</script>
