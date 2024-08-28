import actions from "../countdown/actions";
import mutations from "../countdown/mutations";
import getters from "../countdown/getters";

export default {
  namespaced: true,
  state() {
    return {
      time: 60,
      minutes: null,
      seconds: null,
      intervalId: null,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
