<template>
  <div id="">
    <Tabs type="card">
        <TabPane label="个性参数">个性参数</TabPane>
        <TabPane label="基本参数">
          <basic-paramster></basic-paramster>
        </TabPane>
        <TabPane label="动画">动画</TabPane>
        <TabPane label="触发">触发</TabPane>
    </Tabs>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import BasicParamster from "./BasicParamster.vue"
@Component({
  components: {
    BasicParamster
  }
})
export default class Main extends Vue {

}
</script>
<style lang="less" scoped>
</style>
