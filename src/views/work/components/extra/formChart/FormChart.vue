<template>
  <div class="wrapper">
    <div class="chart-tabs-wrapper">
      <Tabs :animated="false" >
          <TabPane label="标题">
            <chart-title v-model="options.title" @change="handlerChange"></chart-title>
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
      this.options = {...this.curElement.extra}
    }
  }
  
  mounted () {
    if (this.curElement.type === 'chart') {
      this.options = {...this.curElement.extra}
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

</style>
