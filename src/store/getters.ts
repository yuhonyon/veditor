import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  isLogin (state): boolean {
    return state.login;
  },

  curElement (state): boolean {
    return state.elementList.find(item => item.id === state.curElementId);
  }
};

export default getters;
