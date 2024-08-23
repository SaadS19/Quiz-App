export default {
  nextQuestion(context, payload) {
    context.commit("nextQuestion", payload);
  },
  previousQuestion(context, payload) {
    context.commit("previousQuestion", payload);
  },
  submitData(context, payload) {
    setTimeout(() => {
      context.commit("submitData", payload);
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
