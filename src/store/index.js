import { createStore } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
const store = createStore({
  state() {
    return {
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      disableOption: false,
      questions: [
        {
          id: 1,
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Tokyo",
        },
        {
          id: 2,
          question: "Which element has the chemical symbol O?",
          options: ["Oxygen", "Gold", "Iron", "Osmium"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Oxygen",
        },
        {
          id: 3,
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
          id: 4,
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Saturn", "Neptune"],

          answerSelected: null,
          hasUpdate: null,
          answer: "Jupiter",
        },
        {
          id: 5,
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "Australia", "Japan", "New Zealand"],

          answerSelected: null,
          hasUpdate: null,
          answer: "Japan",
        },
        {
          id: 6,
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
          id: 7,
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
          id: 8,
          question: "Which year did World War II end?",
          options: ["1941", "1945", "1948", "1950"],
          answerSelected: null,
          hasUpdate: null,
          answer: "1945",
        },
        {
          id: 9,
          question: 'Which planet is known as the "Evening Star"?',
          options: ["Mars", "Venus", "Mercury", "Saturn"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Venus",
        },
        {
          id: 10,
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
        { key: "answer", title: "Correct Answer", sortable: false },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});
export default store;
