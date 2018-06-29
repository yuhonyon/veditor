export default (name, index = true) => () => import(`@/views/${name}${index ? '/Main.vue' : '.vue'}`)
