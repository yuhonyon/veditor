<template>
  <div class="wrapper">
    <form-chart-line v-if="curElement.subtype==='line'"></form-chart-line>
    <!-- <form-chart-pie v-if="curElement.subtype==='pie'"></form-chart-pie> -->
  </div>
</template>

<script>
import { Vue, Component, Watch} from 'vue-property-decorator'
import {
  Getter
} from 'vuex-class'
import FormChartLine from "./FormChartLine.vue"
@Component({
  components: {
    FormChartLine
  }
})
export default class FormChart extends Vue {
  @Getter curElement
}

</script>
<style lang="less">

</style>
