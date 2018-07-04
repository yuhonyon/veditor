import { ActionTree } from 'vuex';
import types from './types';

const actions: ActionTree<any, any> = {

  setLogin ({ commit }, flag: boolean): void {
    commit(types.DEMO, flag);
  },
  setChangeElement ({ commit }, info: object): void {
    commit(types.CHANGE_ELEMENT, info);
  }
};

export default actions;
