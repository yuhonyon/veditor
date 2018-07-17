<template>
  <div class="wrapper">
    <div class="chart-tabs-wrapper">
      <Tabs :animated="false" >
          <TabPane label="标题">
            <chart-title v-model="options.title"></chart-title>
          </TabPane>
          <TabPane label="基础">
            <Tabs :animated="false">
                <TabPane label="内容">内容</TabPane>
                <TabPane label="样式">样式</TabPane>
            </Tabs>
          </TabPane>
          <TabPane label="视区">视区</TabPane>
          <TabPane label="X轴">X轴</TabPane>
          <TabPane label="Y轴">Y轴</TabPane>
          <TabPane label="图例">图例</TabPane>
          <TabPane label="提示">提示</TabPane>
          <TabPane label="工具">工具</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import {ChartTitle} from "./modules"
@Component({
  components: {
    ChartTitle
  }
})
export default class FormText extends Vue {
  @Getter curElement
  @State curElementId
  @Action actChangeElement
  options={}
  @Watch('curElementId')
  onCurElementIdChange () {
    if (this.curElement.type === 'chart') {
      this.options = this.curElement.extra
    }
  }

  mounted () {
    if (this.curElement.type === 'chart') {
      this.options = this.curElement.extra
    }
  }
  handlerChange () {
    this.actChangeElement({
      extra: {...this.options}
    })
  }
}

</script>
<style lang="less">
.chart-tabs-wrapper .ivu-tabs{
  position: relative;
  min-height: 500px;
  .ivu-tabs-content{
    padding-left: 2em;
    .ivu-tabs-tabpane .ivu-tabs-tabpane{
      padding: 10px;
    }
    .ivu-tabs-bar{
      background: #5b5d6b;
      .ivu-tabs-tab{
        background: #5b5d6b;
        &.ivu-tabs-tab-active{
          position: relative;
          border-radius: 0;
          &::before{
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -3px;
            border: 5px solid transparent;
            border-right-color: #4c4e59;

          }
        }
      }
    }
  }
  .ivu-tabs-bar{
    position: absolute;
    top:0;
    left:0;
    background: #373941;
    .ivu-tabs-nav-container{
      white-space:normal;
    }
    .ivu-tabs-nav-scroll{
      white-space:normal;
    }
    .ivu-tabs-ink-bar{
      display: none;
    }
    .ivu-tabs-tab{
      padding: 10px 0.5em;
      width:2em;
      margin: 0;
      color: #fff;
      display: block;
      background: #373941;
      &.ivu-tabs-tab-active{
        background: #5b5d6b;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
    }
  }
}
</style>
