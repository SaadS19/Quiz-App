export default {
  nextQuestion(context) {
    context.commit("nextQuestion");

    const currQuestion = context.state.currentQuestion;
    const question = context.state.questions.length;

    if (currQuestion >= question) {
      context.commit("count/stopTimer");
    }
  },
  previousQuestion(context) {
    context.commit("previousQuestion");
  },
  submitData(context) {
    setTimeout(() => {
      context.commit("submitData");

      const currQuestion = context.state.currentQuestion;
      const question = context.state.questions.length;

      if (currQuestion >= question) {
        context.commit("count/stopTimer");
      }
    }, 200);
  },
  setSelectedAnswer(context, payload) {
    context.commit("setSelectedAnswer", payload);
  },
  resetQuiz(context) {
    context.commit("resetQuiz");
    context.commit("count/resetTimer");
  },
  toggleTimer(context) {
    context.commit("timer");
  },
};
