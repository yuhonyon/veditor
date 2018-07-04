import types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [types.DEMO] (state, flag): void {
    state.login = flag;
  },
  [types.CHANGE_ELEMENT] (state, payload): void {
    state.element = payload;
  }
};
export default mutations;
