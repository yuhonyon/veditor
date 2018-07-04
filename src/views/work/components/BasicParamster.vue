<template>
  <div class="wrapper">
    <Form :model="transform" :label-width="80">
        <FormItem label="宽">
            <InputNumber @on-change="handlerChange" :min="0" v-model="transform.width"></InputNumber>
        </FormItem>
        <FormItem label="高">
            <InputNumber @on-change="handlerChange" :min="0" v-model="transform.height"></InputNumber>
        </FormItem>
        <FormItem label="X">
            <InputNumber @on-change="handlerChange" v-model="transform.left"></InputNumber>
        </FormItem>
        <FormItem label="Y">
            <InputNumber @on-change="handlerChange" v-model="transform.top"></InputNumber>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator'
import {
  State,
  Action
} from 'vuex-class'
@Component
export default class Main extends Vue {
  @State element
  @Action setChangeElement
  transform={
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    rotate: 0
  }

  @Watch('element')
  onElementChanged () {
    this.transform = {...this.element.transform}
  }
  handlerChange () {
    this.setChangeElement({...this.element, transform: this.transform})
  }
}
</script>
<style lang="less" scoped>

</style>
