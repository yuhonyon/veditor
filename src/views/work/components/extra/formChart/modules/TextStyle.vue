<template>
  <div>
    <chart-form-slide @change="handlerChange" :min="12" :max="100" v-model="textStyle.fontSize" title="字体大小" :default-value="12" ></chart-form-slide>
    <chart-form-color @change="handlerChange" title="字体颜色" v-model="textStyle.color" default-color="#000"></chart-form-color>
    <chart-form-radio @change="handlerChange" v-model="textStyle.fontStyle" :options="datas.fontStyle" title="字体样式"></chart-form-radio>
    <chart-form-radio @change="handlerChange" v-model="textStyle.fontWeight" :options="datas.fontWeight" title="字体粗细"></chart-form-radio>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import {ChartFormInput, ChartFormRadio, ChartFormSlide, ChartFormSlideRadio, ChartFormColor} from "../forms"
import datas from "../datas"
@Component({
  components: {
    ChartFormInput,
    ChartFormSlide,
    ChartFormSlideRadio,
    ChartFormRadio,
    ChartFormColor
  }
})
export default class ChartTitle extends Vue {
  @Model('change', { type: Object }) value: any

  textStyle = {
    fontSize: null,
    color: "#000",
    fontStyle: null,
    fontWeight: null
  }

  datas=datas

  @Watch('value')
  onValueChange () {
    this.textStyle = { ...this.textStyle, ...this.value }
  }
  handlerChange () {
    this.$emit("change", {...this.textStyle})
  }
}

</script>
