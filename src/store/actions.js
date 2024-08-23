export default {
  nextQuestion(context) {
    context.commit("nextQuestion");
  },
  previousQuestion(context) {
    context.commit("previousQuestion");
  },
  submitData(context) {
    setTimeout(() => {
      context.commit("submitData");
    }, 500);
  },
  increaseCurrentQuestion(context) {
    context.commit("increaseCurrentQuestion");
  },
  decreaseCurrentQuestion(context) {
    context.commit("decreaseCurrentQuestion");
  },
  setSelectedAnswer(context, payload) {
    context.commit("setSelectedAnswer", payload);
  },
  resetQuiz(context) {
    context.commit("resetQuiz");
  },
};
