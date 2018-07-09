<template>
  <div class="wrapper">
    <Form :model="event" :label-width="80">
        <FormItem label="事件类型">
            <Select v-model="event.type">
              <Option value="">无</Option>
              <Option v-for="item in eventList" :value="item.value" :key="item.value">{{item.name}}</Option>
            </Select>
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
  @State curElement
  @Action actChangeElement
  event={
    type: ""
  }
  eventList=[{
    value: "link",
    name: "跳转外链"
  }]

  @Watch('curElement')
  onElementChanged () {
    this.event = {...this.curElement.event}
  }
  handlerChange () {
    this.actChangeElement({...this.curElement, event: this.event})
  }
}
</script>
<style lang="less" scoped>

</style>
