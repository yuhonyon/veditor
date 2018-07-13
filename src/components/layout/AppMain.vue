<template>
  <div id="">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import Header from './AppHeader.vue';

@Component({
  components: {
    Header
  }
})
export default class Main extends Vue {
}
</script>
<style lang="less" scoped>
</style>
