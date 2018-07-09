<template>
  <div class="tabs-wrapper">
    <Tabs type="card">
        <TabPane label="个性参数">
          <paramster-extra></paramster-extra>
        </TabPane>
        <TabPane label="基本参数">
          <paramster-basic></paramster-basic>
        </TabPane>
        <TabPane label="动画">
          <paramster-animation></paramster-animation>
        </TabPane>
        <TabPane label="触发">
          <paramster-event></paramster-event>
        </TabPane>
    </Tabs>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import ParamsterBasic from "./ParamsterBasic.vue"
import ParamsterAnimation from "./ParamsterAnimation.vue"
import ParamsterEvent from "./ParamsterEvent.vue"
import ParamsterExtra from "./ParamsterExtra.vue"
@Component({
  components: {
    ParamsterBasic,
    ParamsterAnimation,
    ParamsterExtra,
    ParamsterEvent
  }
})
export default class Main extends Vue {

}
</script>
<style lang="less" scoped>
.tabs-wrapper{
  height: 100%;
  >div{
    height: 100%;
  }
}
</style>
