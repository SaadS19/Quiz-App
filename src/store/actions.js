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
  setSelectedAnswer(context, payload) {
    context.commit("setSelectedAnswer", payload);
  },
  resetQuiz(context) {
    context.commit("resetQuiz");
  },
  // showResult(context) {
  //   context.commit("showResult");
  // },
  startTimer(context) {
    context.commit("startTimer");
  },
};
