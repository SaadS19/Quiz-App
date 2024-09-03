export default {
  namespaced: true,
  state() {
    return {
      minutes: 2,
      seconds: 30,
      timeLeft: 0,
      interval: null,
    };
  },
  getters: {
    minutes(state) {
      const minutes = Math.floor(state.timeLeft / 60);
      return minutes < 10 ? "0" + minutes : minutes;
    },
    seconds(state) {
      const seconds = state.timeLeft % 60;
      return seconds < 10 ? "0" + seconds : seconds;
    },
  },
  actions: {
    initializeTime(context, payload) {
      context.commit("initializeTime", payload);
    },

    startTimer(context) {
      const intervalId = setInterval(() => {
        if (context.state.timeLeft <= 0 && context.state.interval) {
          console.log("before stop");
          context.commit("stopTimer");
          context.commit("setCurrentQuestion", null, { root: true });
          // context.commit("setCurrentQuestion");
        } else {
          context.commit("decreaseTime");
        }
      }, 1000);

      if (!context.state.interval) {
        context.commit("setInterval", intervalId);
      }
    },
    stopTimer(context) {
      context.commit("stopTimer");
    },
    resetTimer(context) {
      context.commit("resetTimer");
      context.commit("setCurrentQuestion", 0, { root: true });
      context.commit("setTimer", null, { root: true });
    },
  },
  mutations: {
    initializeTime(state) {
      state.timeLeft = state.minutes * 60 + state.seconds;
    },
    stopTimer(state) {
      if (state.interval) {
        clearInterval(state.interval);
        state.interval = null;
      }
    },
    setInterval(state, payload) {
      state.interval = payload;
    },
    resetTimer(state) {
      clearInterval(state.interval);
      state.interval = null;
      state.timeLeft = state.minutes * 60 + state.seconds;
    },
    decreaseTime(state) {
      if (state.timeLeft) {
        state.timeLeft -= 1;
      }
    },
  },
};
