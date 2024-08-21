<template>
    <v-container>
        <h2>Student Name : M Saad Sohail</h2>
        <v-card v-if="currentQuestion < questions.length" class="my-3">
            <v-card-title>
                Question {{ currentQuestion + 1 }} of {{ questions.length }}
            </v-card-title>
            <v-card-text>
                {{ questions[currentQuestion].question }}
            </v-card-text>
            <v-card-actions>
                <v-radio-group v-model="selectedAnswer">
                    <v-radio v-for="(option, index) in questions[currentQuestion].options" :key="index" :label="option"
                        :value="option" @change="submitAnswer"></v-radio>
                </v-radio-group>
            </v-card-actions>
            <v-card>
                <v-card-title>Score is: {{ score }}</v-card-title>
                <v-card-actions>
                    <v-col class="d-flex justify-center">
                        <v-btn @click="previousQuestion" :disabled="currentQuestion === 0">Previous</v-btn>
                        <v-btn @click="nextQuestion">Next</v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </v-card>
        <v-card v-else class="my-3">
            <quiz-result @resetQuiz="quizReset" :headers="headers" :score="score" :quiz="questions"></quiz-result>
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
        // currentQuestion() {
        //     return this.$store.getters.getCurrentQuestion;
        // },
        // questions() {
        //     return this.$store.getters.getQuestions;
        // }
        // selectedAnswer() {
        //     return this.$store.getters.selectedAnswer
        // }
        // headers() {
        //     return this.$store.getters.getHeaders
        // }
    },
    data() {
        return {
            currentQuestion: 0,
            selectedAnswer: null,
            score: 0,
            questions: [
                {
                    question: "What is the capital of Japan?",
                    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Tokyo",
                },
                {
                    question: "Which element has the chemical symbol O?",
                    options: ["Oxygen", "Gold", "Iron", "Osmium"],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Oxygen",
                },
                {
                    question: 'Who wrote "Romeo and Juliet"?',
                    options: [
                        "Charles Dickens",
                        "Mark Twain",
                        "William Shakespeare",
                        "Leo Tolstoy",
                    ],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "William Shakespeare",
                },
                {
                    question: "What is the largest planet in our solar system?",
                    options: ["Earth", "Jupiter", "Saturn", "Neptune"],

                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Jupiter",
                },
                {
                    question: "Which country is known as the Land of the Rising Sun?",
                    options: ["China", "Australia", "Japan", "New Zealand"],

                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Japan",
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: [
                        "Vincent van Gogh",
                        "Leonardo da Vinci",
                        "Pablo Picasso",
                        "Claude Monet",
                    ],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Leonardo da Vinci",
                },
                {
                    question: "Which is the smallest ocean in the world?",
                    options: [
                        "Atlantic Ocean",
                        "Indian Ocean",
                        "Arctic Ocean",
                        "Pacific Ocean",
                    ],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Arctic Ocean",
                },
                {
                    question: "Which year did World War II end?",
                    options: ["1941", "1945", "1948", "1950"],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "1945",
                },
                {
                    question: 'Which planet is known as the "Evening Star"?',
                    options: ["Mars", "Venus", "Mercury", "Saturn"],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Venus",
                },
                {
                    question: "What is the main ingredient in guacamole?",
                    options: ["Tomato", "Avocado", "Pepper", "Onion"],
                    answerSelected: null,
                    hasUpdate: null,
                    answer: "Avocado",
                },
            ],
            headers: [
                { align: "start", key: "question", title: "Question", sortable: false },
                { key: "options", title: "Options", sortable: false },
                { key: "answerSelected", title: "Choosen Answer", sortable: false },
                { key: "answer", title: " Correct Answer", sortable: false },
            ],
        };
    },
    methods: {
        submitAnswer() {
            // this.$store.dispatch('submitData');
            if (this.selectedAnswer === this.questions[this.currentQuestion].answer) {
                this.questions[this.currentQuestion].hasUpdate = true;
                this.score++;
            }
            this.questions[this.currentQuestion].answerSelected = this.selectedAnswer;

            console.log(this.questions[this.currentQuestion]);
            // console.log(this.selectedAnswer)

            setTimeout(() => {
                this.currentQuestion++;
                this.selectedAnswer =
                    this.questions[this.currentQuestion]?.answerSelected;
            }, 500);
        },
        nextQuestion() {
            // this.$store.dispatch('nextQuestion')

            if (this.currentQuestion < this.questions.length) {
                const answer = this.questions[this.currentQuestion].answer;
                if (this.selectedAnswer === answer) {
                    this.score++;
                    this.questions[this.currentQuestion].hasUpdate = true;
                }
                console.log('Next')
                console.log(this.questions[this.currentQuestion])
                this.currentQuestion++;
                const nextAnswer = this.questions[this.currentQuestion]?.answerSelected;
                if (nextAnswer !== null) {
                    this.selectedAnswer = nextAnswer;
                } else {
                    this.selectedAnswer = null;
                }
            }
        },
        previousQuestion() {
            // this.$store.dispatch('previousQuestion')

            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                console.log('Previous')
                console.log(this.questions[this.currentQuestion])
                const prevData = this.questions[this.currentQuestion];
                if (prevData.hasUpdate !== null) {
                    this.score--;
                    prevData.hasUpdate = null;
                }
                // console.log(prevData);
                this.selectedAnswer =
                    this.questions[this.currentQuestion].answerSelected;
                console.log(this.selectedAnswer)
            }
        },
        quizReset() {
            this.currentQuestion = 0;
            this.score = 0;
            for (const question of this.questions) {
                question.answerSelected = null;
                question.hasUpdate = null;
            }
        },
    },
    mounted() {
        this.currentQuestion = 0;
        this.score = 100;
    }
};
</script>

<style scoped></style>
