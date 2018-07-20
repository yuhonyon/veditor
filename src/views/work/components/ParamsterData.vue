<template>
<div class="paramster-content">
  <Form :model="data" :label-width="80">
    <FormItem label="数据类型">
      <Select v-model="data.type">
        <Option value="">无</Option>
        <Option v-for="item in dataList" :value="item.value" :key="item.value">{{item.name}}</Option>
      </Select>
    </FormItem>

  </Form>
  <div v-show="!!data.type">
    <div v-if="data.type==='static'">
      <h3>静态数据源</h3>
      <codemirror v-model="code" :options="cmOptions"></codemirror>
    </div>
    <div v-if="data.type==='remote'||data.type==='live'">
      <h3>远程数据源</h3>
      <p>url:http://api.sadfasdf.com</p>
      <p>body:</p>
      <div v-if="data.type==='live'">
        更新频率:30s
      </div>
    </div>
    <h3>数据映射</h3>

  </div>
</div>
</template>

<script>
import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator'

import {
  State,
  Action
} from 'vuex-class'
@Component
export default class Main extends Vue {
  @State curElement
  @Action actChangeElement
  data = {
    type: ""
  }
  code = '{data:[]}'
  cmOptions = {
    tabSize: 4,
    mode: 'json',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true
  }
  dataList = [{
    value: "static",
    name: "静态数据"
  }, {
    value: "remote",
    name: "远程数据"
  }, {
    value: "live",
    name: "实时数据"
  }]

  @Watch('curElement')
  onElementChanged() {
    this.data = { ...this.curElement.data
    }
  }
  handlerChange() {
    this.actChangeElement({ ...this.curElement,
      data: this.data
    })
  }
}
</script>
<style lang="less" scoped>
.paramster-content{
  color: #fff;
}
</style>
