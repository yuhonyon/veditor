<template>
  <div class="wrapper paramster">
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
        <TabPane label="数据">
          <paramster-data></paramster-data>
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
import ParamsterData from "./ParamsterData.vue"
@Component({
  components: {
    ParamsterBasic,
    ParamsterAnimation,
    ParamsterExtra,
    ParamsterEvent,
    ParamsterData
  }
})
export default class Main extends Vue {

}
</script>
<style lang="less" scoped>
.wrapper{
  height: 100%;
  >div{
    height: 100%;
    padding-top: 42px;
    position: relative;
  }
}

</style>
<style lang="less">

</style>
