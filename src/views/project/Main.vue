<template>
  <div id="">
    项目列表&项目详情
    <div>
      <project-list></project-list>
    </div>
  </div>
  
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import { ProjectList } from './components';
@Component({
  components: {
    ProjectList
  }
})
export default class Main extends Vue {

}
</script>
<style lang="less" scoped>
</style>
