import types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [types.DEMO] (state, flag): void {
    state.login = flag;
  }
};
export default mutations;
