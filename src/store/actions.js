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
  setHeader(context) {
    const questions = context.state.questions;
    console.log(questions);

    const header = Object.keys(questions[0]).filter(
      (key) => key !== "hasUpdate"
    );
    console.log(header);

    const filteredHeader = header.map((key) => ({
      title:
        key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"), // Format key as title
      key: key, // Use the key as the value
    }));

    context.commit("setHeader", filteredHeader);
  },
};
