<template>
  <div>
    <chart-form-slide @change="handlerChange" :min="12" :max="100" v-model="textStyle.fontSize" title="字体大小" :default-value="12" ></chart-form-slide>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import {ChartFormInput, ChartFormRadio, ChartFormSlide, ChartFormSlideRadio} from "../forms"
import datas from "../datas"
@Component({
  components: {
    ChartFormInput,
    ChartFormSlide,
    ChartFormSlideRadio,
    ChartFormRadio
  }
})
export default class ChartTitle extends Vue {
  @Model('change', { type: Object }) value: any

  textStyle= {
    fontSize: null
  }

  datas=datas

  @Watch('value')
  onValueChange () {
    this.textStyle = {...this.textStyle, ...this.value}
  }
  handlerChange () {
    this.$emit("change", {...this.textStyle})
  }
}

</script>
