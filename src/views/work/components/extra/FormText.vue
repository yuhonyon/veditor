<template>
  <div class="wrapper">
    <Form :label-width="80">
        <FormItem label="文本">
            <Input @on-change="handlerChange" v-model="text.text"></Input>
        </FormItem>
        <FormItem label="字体大小">
            <InputNumber @on-change="handlerChange" v-model="text.fontSize"></InputNumber>
        </FormItem>
        <FormItem label="颜色">
            <ColorPicker @on-change="handlerChange" v-model="text.color"></ColorPicker>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
@Component
export default class FormText extends Vue {
  @Getter curElement
  @State curElementId
  @Action actChangeElement
  text={
    text: "你好",
    fontSize: 14,
    color: "#333"
  }
  @Watch('curElementId')
  onCurElementIdChange () {
    if (this.curElement.type === 'text') {
      this.text = { ...this.curElement.extra }
    }
  }

  mounted () {
    if (this.curElement.type === 'text') {
      this.text = { ...this.curElement.extra }
    }
  }
  handlerChange () {
    this.actChangeElement({
      extra: {...this.text}
    })
  }
}

</script>
<style lang="less" scoped>

</style>
