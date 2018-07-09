import types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [types.DEMO] (state, flag): void {
    state.login = flag;
  },
  [types.CHANGE_ELEMENT] (state, payload): void {
    let curIndex = state.elementList.findIndex(item => item.id === state.curElementId);
    if (curIndex < 0) {
      return;
    }
    state.elementList.splice(curIndex, 1, { ...state.elementList[curIndex],...payload });
  }
};
export default mutations;
