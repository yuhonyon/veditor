<template>
  <Tabs :animated="false">
      <TabPane label="内容">
        <chart-form-input @change="handlerChange" v-model="title.text" title="主标题文本" default-value="主标题"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.link" title="主标题文本超链接" default-value="http://"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.subtext" title="副标题文本" default-value="副标题"></chart-form-input>
        <chart-form-input @change="handlerChange" v-model="title.sublink" title="副标题文本超链接" default-value="http://"></chart-form-input>
      </TabPane>
      <TabPane label="样式">
        <chart-form-input @change="handlerChange" ></chart-form-input>
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
import {ChartFormInput} from "../forms"
@Component({
  components: {
    ChartFormInput
  }
})
export default class ChartTitle extends Vue {
  @Model('change', { type: Object }) value: any
  title={
    text: null,
    subtext: null,
    link: null,
    sublink: null
  }

  @Watch('value')
  onValueChange () {
    this.title = this.value
  }
  handlerChange () {
    this.$emit("change", {...this.title})
  }
}

</script>
