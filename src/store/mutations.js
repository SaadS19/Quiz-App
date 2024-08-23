export default {
  nextQuestion(state, payload) {
    const question = payload;
    let currQuestion = state.questions.findIndex(
      (item) => item.id === question.id
    );
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
  previousQuestion(state, payload) {
    const question = payload;
    let currQuestion = state.questions.findIndex(
      (item) => item.id === question.id
    );
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
    // console.log(questionData);

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
  },
  increaseCurrentQuestion(state) {
    state.currentQuestion = state.currentQuestion + 1;
  },
  setSelectedAnswer(state, payload) {
    state.selectedAnswer = payload.value;
  },
  decreaseCurrentQuestion(state) {
    state.currentQuestion--;
  },
};
