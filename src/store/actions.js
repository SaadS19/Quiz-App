export default {
  nextQuestion(context) {
    context.dispatch("stopTimer");
    context.commit("nextQuestion");
    context.dispatch("setTimerQuestion");

    if (context.state.currentQuestion >= context.state.questions.length) {
      context.commit("count/stopTimer");
    }
  },
  previousQuestion(context) {
    context.dispatch("stopTimer");
    context.commit("previousQuestion");
    context.dispatch("setTimerQuestion");
  },
  submitData(context) {
    context.commit("submitData");

    const currQuestion = context.state.currentQuestion;
    const question = context.state.questions.length;

    if (currQuestion >= question) {
      context.commit("count/stopTimer");
    }
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

  setTimerQuestion(context) {
    const currQuestion = context.state.currentQuestion;
    const question = context.state.questions;

    if (currQuestion < question.length) {
      if (question[currQuestion].interval)
        clearInterval(question[currQuestion].interval);
      question[currQuestion].interval = setInterval(() => {
        if (question[currQuestion].timeDuration > 0) {
          question[currQuestion].timeDuration--;
          // console.log(question[currQuestion].timeDuration);
        } else {
          context.commit("setDisableProperty");
          clearInterval(question[currQuestion].interval);
        }
      }, 1000);
    }
  },
  stopTimer(context) {
    const currQuestion = context.state.currentQuestion;
    const question = context.state.questions;
    // console.log(question[currQuestion]);
    const interval = question[currQuestion].interval;
    if (interval) {
      clearInterval(question[currQuestion].interval);
    }
    question[currQuestion].interval = null;
  },
};
