const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: () => {},
  finalizeLogin: () => {},
  logout: ({ commit }) => {
    commit("setToken", null);
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};
