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
      timer: false,
      disableOption: false,
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
        {
          align: "center",
          key: "question",
          title: "Question",
        },
        { align: "center", key: "options", title: "Options" },
        {
          key: "answerSelected",
          title: "Choosen Answer",
        },
        {
          key: "answer",
          title: "Correct Answer",
        },
        // { key: "checkbox", title: "Checkbox", sortable: false },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});
export default store;
