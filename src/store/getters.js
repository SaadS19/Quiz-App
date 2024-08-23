export default {
  questions(state) {
    return state.questions;
  },
  headers(state) {
    return state.headers;
  },
  currentQuestion(state) {
    return state.currentQuestion;
  },
  selectedAnswer(state) {
    return state.selectedAnswer;
  },
  disableOption(state) {
    return state.disableOption;
  },
  score(state) {
    return state.score;
  },
};
