<template>
  <chart ref="chart" auto-resize  :options="newOptions"></chart>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import {removeNull} from "@/utils/assets"
@Component
export default class ElementChart extends Vue {
  @Prop(Object) element:any
  $refs: {
    chart: any
  }

  get newOptions () {
    setTimeout(() => {
      this.$refs.chart.resize()
    }, 30)
    let newOptions = removeNull(this.element.extra)
    newOptions.xAxis.data = this.element.data.source.xAxis
    newOptions.series[0].data = this.element.data.source.data
    // for(let serie in newOptions.series){
    //
    // }

    return newOptions
  }

  injectData () {
    this.element.extra
    for (let serie in this.element.extra.series) {

    }
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  color: #fff;
}
</style>
