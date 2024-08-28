export default {
  nextQuestion(state) {
    state.currentQuestion++;
    console.log(state.currentQuestion);
    const currQuestion = state.currentQuestion;
    if (currQuestion < state.questions.length) {
      const data = state.questions[currQuestion];
      if (data?.hasUpdate) {
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
    questionData.answerSelected = state.selectedAnswer;
    questionData.hasUpdate = true;

    state.currentQuestion++;
    state.questions[state.currentQuestion];
    if (state.currentQuestion < state.questions.length) {
      state.selectedAnswer =
        state.questions[state.currentQuestion]?.answerSelected;
      const data = state.questions[state.currentQuestion];
      if (data.hasUpdate === true) {
        state.disableOption = true;
        state.selectedAnswer = data.answerSelected;
      } else if (data.hasUpdate === null) {
        state.disableOption = false;
        state.selectedAnswer = null;
      }
    }
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
    state.selectedAnswer = payload.value;
  },
  timer(state) {
    state.timer = true;
  },
  startTime(state) {
    let timer = state.time;
    console.log(timer);

    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    state.minutes = minutes < 10 ? "0" + minutes : minutes;
    state.seconds = seconds < 10 ? "0" + seconds : seconds;

    state.time--;
  },
  setTimer(state, payload) {
    state.timer = payload;
  },
  stopTimer(state) {
    state.time = 0;
    state.currQuestion = state.questions.length + state.questions.length;
  },
};
