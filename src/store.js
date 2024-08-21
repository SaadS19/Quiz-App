import { createStore } from "vuex";
const store = createStore({
  state() {
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
        {
          key: "answerSelected",
          title: "Choosen Answer",
          sortable: false,
        },
        { key: "answer", title: " Correct Answer", sortable: false },
      ],
    };
  },
  mutations: {
    nextQuestion(state) {
      if (state.currentQuestion < state.questions.length) {
        const answer = state.questions[state.currentQuestion].answer;
        if (state.selectedAnswer === answer) {
          state.score++;
          state.questions[state.currentQuestion].hasUpdate = true;
        }
        // console.log("Next");
        // console.log(this.questions[this.currentQuestion]);
        state.currentQuestion++;
        const nextAnswer =
          state.questions[state.currentQuestion]?.answerSelected;
        if (nextAnswer !== null) {
          state.selectedAnswer = nextAnswer;
        } else {
          state.selectedAnswer = null;
        }
      }
    },
    previousQuestion(state) {
      if (state.currentQuestion > 0) {
        state.currentQuestion--;
        // console.log('Previous')
        // console.log(this.questions[this.currentQuestion])
        const prevData = state.questions[state.currentQuestion];
        if (prevData.hasUpdate !== null) {
          this.score--;
          prevData.hasUpdate = null;
        }
        // console.log(prevData);
        state.selectedAnswer =
          state.questions[state.currentQuestion].answerSelected;
        console.log(state.selectedAnswer);
      }
    },
    submitData(state) {
      if (
        state.selectedAnswer === state.questions[state.currentQuestion].answer
      ) {
        state.questions[state.currentQuestion].hasUpdate = true;
        state.score++;
      }
      state.questions[state.currentQuestion].answerSelected =
        state.selectedAnswer;

      // console.log(this.questions[this.currentQuestion]);
      // console.log(this.selectedAnswer)

      setTimeout(() => {
        this.currentQuestion++;
        this.selectedAnswer =
          this.questions[this.currentQuestion]?.answerSelected;
      }, 500);
    },
  },
  actions: {
    nextQuestion(context) {
      context.commit("nextQuestion");
    },
    previousQuestion(context) {
      context.commit("previousQuestion");
    },
    submitData(context) {
      context.commit("submitData");
    },
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getHeaders(state) {
      return state.headers;
    },
    getCurrentQuestion(state) {
      return state.currentQuestion;
    },
    getSelectedAnswer(state) {
      return state.selectedAnswer;
    },
  },
});
export default store;
