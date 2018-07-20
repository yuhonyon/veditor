import { ActionTree } from 'vuex';
import types from './types';

const defaultElement = {
  id: null,
  name: null,
  type: null,
  text: null,
  content: null,
  transform: {
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    rotate: 0
  },
  event: {},
  animation: [],
  extra: {},
  border: {
    size: 0,
    style: '',
    color: '',
    radius: 0,
    source: '',
    slice: 0,
    outset: 0,
    repeat: ''
  }
};

const actions: ActionTree<any, any> = {

  setLogin ({ commit }, flag: boolean): void {
    commit(types.DEMO, flag);
  },
  actChangeElement ({ commit }, info: any): void {
    commit(types.CHANGE_ELEMENT, info);
  },
  actRemoveElement({commit}, info: any): void {
    commit(types.REMOVE_ELEMENT, info);
  },
  actAddElement ({ commit ,state },element: any): void {
    element.name = element.name || ('组件' + state.elementList.length);
    element.id = element.id || Date.now();
    commit(types.ADD_ELEMENT, { ...defaultElement,...element });
  },
  actSelectCurElement ({ commit },id: number): void {
    commit(types.SELECT_CUR_ELEMENT, id);
  },
  setMenuVisible({ commit }, visible): void {
    commit(types.MENU_VISIBLE, visible);
  }
};

export default actions;
