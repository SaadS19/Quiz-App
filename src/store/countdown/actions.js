export default {
  startTime(context) {
    const intervalId = setInterval(() => {
      // clearInterval(state.intervalId);
      //   state.intervalId = null;
      //   console.log("Time Up");

      let time = context.state.time;
      console.log(time);
      if (time < 0) {
        clearInterval(intervalId);
        context.dispatch("stopTimer");
        return;
      }
      context.commit("startTime");
    }, 1000);
  },
  stopTimer(context) {
    context.commit("stopTimer");
  },
};
