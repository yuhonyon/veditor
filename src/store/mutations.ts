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
  [types.REMOVE_ELEMENT](state, element={}): void {
    let id = element.id || state.curElementId;
    let curIndex = state.elementList.findIndex(item => item.id === id);
    if (curIndex < 0) {
      return;
    }
    state.curElementId = null;
    state.elementList.splice(curIndex, 1);
  },
  [types.ADD_ELEMENT] (state,newElement): void {
    state.elementList.push(newElement);
  },
  [types.SELECT_CUR_ELEMENT] (state,id): void {
    state.curElementId = id;
  },
  [types.MENU_VISIBLE](state, visible): void {
    state.menuVisible = visible;
  }
};
export default mutations;
