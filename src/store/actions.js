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
  setHeader(context) {
    const questions = context.state.questions;

    const header = Object.keys(questions[0]).filter(
      (key) => key !== "hasUpdate"
    );
    // console.log(header);

    const filteredHeader = header.map((key) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      key: key,
    }));

    context.commit("setHeader", filteredHeader);
  },
};
