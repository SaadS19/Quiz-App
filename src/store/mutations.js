export default {
  nextQuestion(state) {
    state.currentQuestion++;
    const currQuestion = state.currentQuestion;
    if (currQuestion < state.questions.length) {
      const data = state.questions[currQuestion];
      console.log(data);
      if (data.hasUpdate === true) {
        state.disableOption = true;
        state.selectedAnswer = data.answerSelected;
      } else {
        state.disableOption = false;
        state.selectedAnswer = null;
      }
    }
  },
  previousQuestion(state) {
    state.currentQuestion--;
    const currQuestion = state.currentQuestion;
    if (currQuestion >= 0) {
      const data = state.questions[currQuestion];
      if (data.answerSelected) {
        state.disableOption = true;
        state.selectedAnswer = data.answerSelected;
      } else {
        state.disableOption = false;
        state.selectedAnswer = null;
      }
    }
  },
  submitData(state) {
    let currQuestion = state.currentQuestion;
    const questionData = state.questions[currQuestion];
    if (state.selectedAnswer === questionData.answer) {
      state.score++;
    }
    console.log(state.selectedAnswer);
    questionData.answerSelected = state.selectedAnswer;
    questionData.hasUpdate = true;
  },
  resetQuiz(state) {
    state.questions.forEach((element) => {
      element.answerSelected = null;
      element.hasUpdate = null;
    });
    state.currentQuestion = 0;
    state.score = 0;
    state.timer = false;
  },
  setSelectedAnswer(state, payload) {
    state.selectedAnswer = payload;
  },
  timer(state) {
    state.timer = !state.timer;
  },
  setCurrentQuestion(state) {
    console.log("set Question");
    state.currentQuestion = state.currentQuestion + state.questions.length;
  },
  setHeader(state, payload) {
    state.headers = payload;
  },
};
