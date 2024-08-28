export default {
  nextQuestion(context) {
    context.commit("nextQuestion");
    const currentQuestion = context.state.currentQuestion;
    const question = context.state.questions;

    if (currentQuestion >= question.length) {
      context.dispatch("stopTimer");
    }
  },
  previousQuestion(context) {
    context.commit("previousQuestion");
  },
  submitData(context) {
    setTimeout(() => {
      context.commit("submitData");
    }, 500);
    const currentQuestion = context.state.currentQuestion;
    const question = context.state.questions;
    if (currentQuestion >= question.length) {
      context.dispatch("stopTimer");
    }
  },
  setSelectedAnswer(context, payload) {
    context.commit("setSelectedAnswer", payload);
  },
  resetQuiz(context) {
    context.commit("resetQuiz");
  },

  toggleTimer(context) {
    context.commit("timer");
  },
  startTime(context) {
    const intervalId = setInterval(() => {
      let time = context.state.time;
      console.log(time);
      if (time < 0) {
        clearInterval(intervalId);
        context.dispatch("stopTimer");
        return;
      }
      context.commit("startTime");
    }, 1000);
  },
  stopTimer(context) {
    context.commit("stopTimer");
  },
};
