<template>
  <chart ref="chart" auto-resize  :options="newOptions"></chart>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import {removeNull} from "@/utils/assets"
@Component
export default class ElementChart extends Vue {
  @Prop(Object) options:any
  $refs: {
    chart: any
  }

  get newOptions () {
    setTimeout(() => {
      this.$refs.chart.resize()
    }, 30)
    return removeNull(this.options)
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  color: #fff;
}
</style>
