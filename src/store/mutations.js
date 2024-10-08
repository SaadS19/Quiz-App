export default {
  nextQuestion(state) {
    state.currentQuestion++;
    const currQuestion = state.currentQuestion;
    if (currQuestion < state.questions.length) {
      const data = state.questions[currQuestion];
      // console.log(data);
      if (data.timeDuration === 0) {
        state.disableOption = true;
        state.selectedAnswer = data.answerSelected;
      } else {
        state.disableOption = false;
        state.selectedAnswer = data.answerSelected;
      }
    }
  },
  previousQuestion(state) {
    state.currentQuestion--;
    const currQuestion = state.currentQuestion;
    if (currQuestion >= 0) {
      const data = state.questions[currQuestion];
      // console.log(data);
      if (data.timeDuration === 0) {
        state.disableOption = true;
        state.selectedAnswer = data.answerSelected;
      } else {
        state.disableOption = false;
        state.selectedAnswer = data.answerSelected;
      }
    }
  },
  submitData(state) {
    let currQuestion = state.currentQuestion;
    const questionData = state.questions[currQuestion];
    if (state.selectedAnswer === questionData.answer) {
      state.score++;
    }
    // console.log(state.selectedAnswer);
    questionData.answerSelected = state.selectedAnswer;
    questionData.hasUpdate = true;
  },
  resetQuiz(state) {
    state.questions.forEach((element) => {
      element.answerSelected = null;
      element.hasUpdate = null;
      element.timeDuration = 10;
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
  setCurrentQuestion(state, payload) {
    if (payload === 0) {
      state.currentQuestion = payload;
    } else {
      state.currentQuestion = state.currentQuestion + state.questions.length;
    }
  },
  setTimer(state) {
    state.timer = false;
  },
  setDisableProperty(state) {
    state.disableOption = true;
  },
};
