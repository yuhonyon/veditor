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
  }
}

</style>
<style lang="less">
.paramster{
  .ivu-form .ivu-form-item-label{
    color:#fff;
  }
  .ivu-input{
    background-color:transparent;
    color: #fff;
  }
  .ivu-tabs-content{
    background: #4c4e59;
  }
  >.ivu-tabs{
    >.ivu-tabs-bar{
      border:0;
      margin-bottom: 1px;
      .ivu-tabs-nav-container{
        height: 42px;
      }
      .ivu-tabs-nav{
        width:100%;
        display: flex;
      }
      .ivu-tabs-tab{
        display: flex;
        felx:1 1 auto;
        width:500px;
        background: transparent;
        margin: 0;
        border-bottom: 1px solid #ddd;
        border-left: 0;
        color: #fff;
        border-radius: 0;
        height: 42px;
        padding-top: 10px;
        text-align: center;
      }
      .ivu-tabs-tab-active{
        background: #4c4e59;
        border-bottom: 0;
      }
    }

  }
}
</style>
