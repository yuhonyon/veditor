import types from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [types.DEMO] (state, flag): void {
    state.login = flag;
  },
  [types.CHANGE_ELEMENT] (state, newElement): void {
    let id = newElement.id || state.curElementId;
    let curIndex = state.elementList.findIndex(item => item.id === id);
    if (curIndex < 0) {
      return;
    }
    state.elementList.splice(curIndex, 1, { ...state.elementList[curIndex],...newElement });
  },
  [types.ADD_ELEMENT] (state,newElement): void {
    state.elementList.push(newElement);
  },
  [types.SELECT_CUR_ELEMENT] (state,id): void {
    state.curElementId = id;
  }
};
export default mutations;
