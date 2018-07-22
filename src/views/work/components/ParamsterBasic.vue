<template>
  <div class="paramster-content">
    <Form slot="content"  :label-width="80">
        <FormItem label="组件name">
            <Input @on-change="handlerChange" :min="0" v-model="name"></Input>
        </FormItem>
    </Form>

    <Collapse v-model="collapseValue" accordion>
        <Panel name="1">
            <span>transform</span>
            <Form slot="content" :model="transform" :label-width="20">
                <Row>
                  <Col span="12">
                    <FormItem label="宽">
                        <InputNumber @on-change="handlerChange" :min="0" v-model="transform.width"></InputNumber>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="高">
                        <InputNumber @on-change="handlerChange" :min="0" v-model="transform.height"></InputNumber>
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span="12">
                    <FormItem label="X">
                        <InputNumber @on-change="handlerChange" v-model="transform.left"></InputNumber>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Y">
                        <InputNumber @on-change="handlerChange" v-model="transform.top"></InputNumber>
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span="12">
                    <FormItem label="R">
                        <InputNumber @on-change="handlerChange" v-model="transform.rotate"></InputNumber>
                    </FormItem>
                  </Col>
                </Row>

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
                    <RadioGroup v-model="border.style" @on-change="handlerChange" type="button">
                      <Radio label="solid">实线</Radio>
                      <Radio label="dotted">点线</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="圆角">
                    <form-slide :min="0" :max="200"  @change="handlerChange" v-model="border.radius"></form-slide>
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
import {FormSlide} from "./forms"
@Component({
  components: {
    FormSlide
  }
})
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
  mounted () {
    this.transform = {...this.curElement.transform}
    this.border = {...this.curElement.border}
    this.name = this.curElement.name
  }
}
</script>
<style lang="less" scoped>
.paramster-content{
  color: #fff;
}
</style>
