<template>
  <div class="wrapper">
    <Form :label-width="80">
        <FormItem label="动画">
            <Select @on-change="handlerChange" v-model="animation.name">
              <Option v-for="item in animationList" :key="item.value" :value="item.value">{{item.name}}</Option>
            </Select>
        </FormItem>
        <FormItem label="时间">
            <InputNumber @on-change="handlerChange" v-model="animation.time"></InputNumber>
        </FormItem>

        <FormItem label="延迟">
            <InputNumber @on-change="handlerChange" v-model="animation.delay"></InputNumber>
        </FormItem>

        <FormItem label="次数">
            <InputNumber @on-change="handlerChange" v-model="animation.count"></InputNumber>
        </FormItem>

        <FormItem label="曲线">
            <Select @on-change="handlerChange" v-model="animation.function">
              <Option v-for="item in functionList" :key="item.value" :value="item.value">{{item.name}}</Option>
            </Select>
        </FormItem>

    </Form>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import {
  State,
  Action
} from 'vuex-class'
@Component
export default class AnimationForm extends Vue {
  animation={
    time: 1000,
    delay: 0,
    name: 'bounceIn',
    count: 3,
    function: 'ease',
    interval: 1000
  }

  functionList=[{
    value: 'ease',
    name: '先快后慢'
  }]

  animationList=[
    {
      value: 'bounceIn',
      name: '弹出进入',
      icon: 'star'
    },
    {
      value: 'bounceOut',
      name: '弹出离开',
      icon: 'star'
    },
    {
      value: 'swing',
      name: 'swing',
      icon: 'star'
    }
  ]

  @Model('change') originData:any

  @Watch('originData')
  onElementChanged ():void {
    this.animation = this.originData
  }

  handlerChange () {
    this.$emit('change', this.animation)
  }

  mounted ():void {
    this.animation = this.originData
  }
}
</script>
<style lang="less" scoped>

</style>
