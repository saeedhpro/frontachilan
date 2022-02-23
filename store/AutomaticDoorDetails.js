// import axios from "axios";

export const state = () => ({
  component1:[],
  type:[],
  usage: [],


})

export const mutations = {

  setComponent(state, component1) {
    state.component1 = component1
  },

  setType(state, type) {
    state.type = type
  },

  setUsage(state, usage) {
    state.usage = usage
  },
}

export const actions = {

  getComponents(context) {

    return this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const component1 = response.data;
        context.commit('setComponent', component1)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

  getType(context) {
    console.log("ati")
    return this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const type = response.data;
        context.commit('setType', type)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

  getUsage(context) {

    return this.$axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const usage = response.data;
        context.commit('setUsage', usage)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },

}

export const getters = {

  getComponents(state) {
    return state.component1
  },

  getType(state) {
    return state.type
  },

  getUsage(state) {
    return state.usage
  },
}
