export default {
  startTime(state) {
    let timer = state.time;
    console.log(timer);

    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    state.minutes = minutes < 10 ? "0" + minutes : minutes;
    state.seconds = seconds < 10 ? "0" + seconds : seconds;

    state.time--;
  },
  stopTimer(state) {
    state.time = 0;
    state.currQuestion = state.questions.length + state.questions.length;
  },
};
