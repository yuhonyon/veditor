<template>
  <Tabs :animated="false">
      <TabPane label="内容">
        <chart-form-input @change="handlerChange" v-model="title.text" title="主标题文本" default-value="主标题"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.link" title="主标题文本超链接" default-value="http://"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.subtext" title="副标题文本" default-value="副标题"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.sublink" title="副标题文本超链接" default-value="http://"></chart-form-input>
      </TabPane>
      <TabPane label="样式">
        <h3 class="chart-title">标题位置</h3>
        <chart-form-slide-radio @change="handlerChange" :min="0" :max="1000" :options="datas.align"  v-model="title.left" title="水平位置" ></chart-form-slide-radio>
        <chart-form-slide-radio @change="handlerChange" :min="0" :max="1000" :options="datas.alignVertical"  v-model="title.top" title="垂直位置" ></chart-form-slide-radio>
        <chart-form-radio @change="handlerChange" :options="datas.align"  title="水平对齐方式"></chart-form-radio>
        <hr>

        <h3 class="chart-title">标题文本样式</h3>
        <text-style @change="handlerChange" v-model="title.textStyle"></text-style>
        <hr>

        <h3 class="chart-title">副标题文本样式</h3>
        <text-style @change="handlerChange" v-model="title.subtextStyle"></text-style>
        <hr>
      </TabPane>
  </Tabs>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import {ChartFormInput, ChartFormRadio, ChartFormSlide, ChartFormSlideRadio} from "../forms"
import TextStyle from "./TextStyle.vue"
import datas from "../datas"
@Component({
  components: {
    ChartFormInput,
    ChartFormSlide,
    ChartFormSlideRadio,
    ChartFormRadio,
    TextStyle
  }
})
export default class ChartTitle extends Vue {
  @Model('change', { type: Object }) value: any
  title={
    text: null,
    subtext: null,
    link: null,
    sublink: null,
    left: null,
    top: null,
    textStyle: {
      fontSize: null
    },
    subtextStyle: {
      fontSize: null
    }
  }

  datas=datas

  @Watch('value')
  onValueChange () {
    this.title = {...this.title, ...this.value}
  }
  handlerChange () {
    this.$emit("change", {...this.title})
  }
}

</script>
