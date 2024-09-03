import { createStore } from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import countModule from "./countdown/index.js";
const store = createStore({
  modules: {
    count: countModule,
  },
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
          timeDuration: 10,
          interval: null,
        },
        {
          question: "Which element has the chemical symbol O?",
          options: ["Oxygen", "Gold", "Iron", "Osmium"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Oxygen",
          timeDuration: 10,
          interval: null,
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
          timeDuration: 10,
          interval: null,
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Saturn", "Neptune"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Jupiter",
          timeDuration: 10,
          interval: null,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "Australia", "Japan", "New Zealand"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Japan",
          timeDuration: 10,
          interval: null,
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
          timeDuration: 10,
          interval: null,
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
          timeDuration: 10,
          interval: null,
        },
        {
          question: "Which year did World War II end?",
          options: ["1941", "1945", "1948", "1950"],
          answerSelected: null,
          hasUpdate: null,
          answer: "1945",
          timeDuration: 10,
          interval: null,
        },
        {
          question: 'Which planet is known as the "Evening Star"?',
          options: ["Mars", "Venus", "Mercury", "Saturn"],
          answerSelected: null,
          hasUpdate: null,
          checkbox: true,
          answer: "Venus",
          timeDuration: 10,
          interval: null,
        },
        {
          question: "What is the main ingredient in guacamole?",
          options: ["Tomato", "Avocado", "Pepper", "Onion"],
          answerSelected: null,
          hasUpdate: null,
          answer: "Avocado",
          timeDuration: 10,
          interval: null,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});
export default store;
