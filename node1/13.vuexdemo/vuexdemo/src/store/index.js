import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    students: [
      {
        name: 'weenie',
        age: 30,
        male: 'man'
      },
      {
        name: 'aero',
        age: 22,
        male: 'man'
      },
      {
        name: 'david',
        age: 31,
        male: 'man'
      },
      {
        name: 'smith',
        age: 12,
        male: 'man'
      },
      {
        name: 'bob',
        age: 24,
        male: 'man'
      }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    getAgeStu(state) {
      return state.students.filter(s => s.age > 18);
    },
    getStuByAge(state) {
      return age => {
        return state.students.filter(s => s.age > age);
      };
    }
  },
  modules: {}
});

export default store;
