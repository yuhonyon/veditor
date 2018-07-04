export default (name, index = true): any => () => import(`@/views/${name}${index ? '/Main.vue' : '.vue'}`);
