// // import axios from "axios";
//
// export const state = () => ({
//   type: [],
//
// })
//
// export const mutations = {
//   setType(state, type) {
//     state.type = type
//   },
// }
//
// export const actions = {
//   getType(context) {
//      console.log("dwarfegyh")
//     return this.$axios
//       .get("https://jsonplaceholder.typicode.com/type")
//       .then(function (response) {
//         const type = response.data;
//         context.commit('setType', type)
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }
// }
//
// export const getters = {
//   getType(state) {
//     return state.type
//   },
// }
