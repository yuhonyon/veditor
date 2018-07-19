<template>
  <div class="wrapper">
    <Form slot="content"  :label-width="80">
        <FormItem label="组件name">
            <Input @on-change="handlerChange" :min="0" v-model="name"></Input>
        </FormItem>
    </Form>

    <Collapse v-model="collapseValue" accordion>
        <Panel name="1">
            <span>transform</span>
            <Form slot="content" :model="transform" :label-width="80">
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
                <FormItem label="R">
                    <InputNumber @on-change="handlerChange" v-model="transform.rotate"></InputNumber>
                </FormItem>
            </Form>
        </Panel>

        <Panel name="2">
            <span>border</span>
            <Form slot="content" :model="border" :label-width="80">
                <FormItem label="尺寸">
                    <InputNumber @on-change="handlerChange" :min="0" v-model="border.size"></InputNumber>
                </FormItem>
                <FormItem label="颜色">
                    <Input @on-change="handlerChange" :min="0" v-model="border.color"></Input>
                </FormItem>
                <FormItem label="线条类型">
                    <Select @on-change="handlerChange" v-model="border.style">
                      <Option value="solid">实线</Option>
                      <Option value="dotted">点线</Option>
                    </Select>
                </FormItem>
                <FormItem label="圆角">
                    <InputNumber @on-change="handlerChange" v-model="border.radius"></InputNumber>
                </FormItem>
            </Form>
        </Panel>
    </Collapse>
  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action
} from 'vuex-class'
@Component
export default class ParamsterBasic extends Vue {
  @Getter curElement
  @Action actChangeElement
  transform={
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    rotate: 0
  }

  border={
    size: 1

  }
  name=null
  collapseValue="1"

  @Watch('curElement')
  onElementChanged () {
    this.transform = {...this.curElement.transform}
    this.border = {...this.curElement.border}
    this.name = this.curElement.name
  }
  handlerChange () {
    this.actChangeElement({...this.curElement, name: this.name, transform: {...this.transform}, border: {...this.border}})
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  color: #fff;
}
</style>
