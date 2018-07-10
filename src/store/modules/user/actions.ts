import { ActionTree } from 'vuex';
import types from '../../types';

const actions: ActionTree<any, any> = {

  setLogin ({ commit }, flag: boolean): void {
    commit(types.DEMO, flag);
  }
};

export default actions;
