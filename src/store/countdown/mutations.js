export default {
  startTime(state) {
    let timer = state.time;
    if (timer > 0) {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;

      state.minutes = minutes < 10 ? "0" + minutes : minutes;
      state.seconds = seconds < 10 ? "0" + seconds : seconds;

      state.time--;
    }
  },

  setIntervalId(state, id) {
    state.intervalId = id;
  },

  clearInterval(state) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  },
};
