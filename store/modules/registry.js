import * as mutation from './mutation-types';
const state = () => ({
  showLoader: Boolean,
  patient: {},
  patients: []
});

const mutations = {

  [mutation.GET_PATIENTS](state) {
    state.showLoader = true;
  },
  [mutation.GET_PATIENTS_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.GET_PATIENTS_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.GET_PATIENTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.patients = payload;

  },
  [mutation.CREATE_PATIENTS](state) {
    state.showLoader = true;
  },
  [mutation.CREATE_PATIENTS_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.CREATE_PATIENTS_ERROR](state) {
    state.showLoader = false;
  },
  [mutation.CREATE_PATIENTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.patient = payload;

  },

}
const actions = {
  async retrievepatients({ commit }) {
    commit(mutation.GET_PATIENTS);
    await this.$api.$get(`patients/`)
      .then(response => {
        commit(mutation.GET_PATIENTS_SUCCESS, response);

      }).catch(error => {
        commit(mutation.GET_PATIENTS_ERROR);
        console.log(error);

      });

  },
  async create_new_patient({ commit }, payload) {
    commit(mutation.CREATE_PATIENTS);
    await this.$api.$post(`patients/`, payload)
      .then(response => {
        commit(mutation.CREATE_PATIENTS_SUCCESS, response);

      }).catch(error => {
        commit(mutation.CREATE_PATIENTS_ERROR);
        console.log(error);

      });

  }
}
const getters = {
  patients: function (state) {
    return state.patients.reverse();
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}