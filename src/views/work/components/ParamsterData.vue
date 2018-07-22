<template>
<div class="paramster-content">
  <Form :model="data" :label-width="80">
    <FormItem label="数据类型">
      <RadioGroup v-model="data.type" @on-change="handlerChange" type="button">
        <Radio label="static">静态数据</Radio>
        <Radio label="remote">远程数据</Radio>
        <Radio label="live">实时数据</Radio>
      </RadioGroup>
    </FormItem>

  </Form>
  <Collapse v-model="collapseValue" accordion  v-show="!!data.type">
      <Panel name="1">
          <span>数据源</span>
          <div slot="content">
              <codemirror @blur="handlerChange" v-model="data.source" :options="cmOptions"></codemirror>
          </div>
      </Panel>

      <Panel name="2">
          <span>数据映射</span>
          <div slot="content">
            <table class="paramster-table">
              <thead>
                <tr>
                  <th>字段</th>
                  <th>映射</th>
                  <th>说明</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mapping in data.mapping">
                  <td>{{mapping.name}}</td>
                  <td><Input v-model="mapping.key" size="small" style="width:100px;"></Input></td>
                  <td>{{mapping.desc}}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
      </Panel>
  </Collapse>

<!--
  <div v-show="!!data.type">
    <div v-if="data.type==='remote'||data.type==='live'">
      <h3>远程数据源</h3>
      <p>url:http://api.sadfasdf.com</p>
      <p>body:</p>
      <div v-if="data.type==='live'">
        更新频率:30s
      </div>
    </div>
    <h3>数据映射</h3>

  </div> -->
</div>
</template>

<script>
import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator'

import {
  Getter,
  Action
} from 'vuex-class'
@Component
export default class ParamsterData extends Vue {
  @Getter curElement
  @Action actChangeElement
  collapseValue="1"
  data = {
    type: "",
    source: "",
    mapping: []
  }
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
  onElementChanged () {
    this.data = { ...this.curElement.data
    }
    this.data.source = JSON.stringify(this.data.source, null, 2)
  }
  handlerChange () {
    this.actChangeElement({ ...this.curElement,
      data: {type: this.data.type, source: this.data.source ? JSON.parse(this.data.source) : {}, mapping: this.data.mapping}
    })
  }

  mounted () {
    this.onElementChanged()
  }
}
</script>
<style lang="less" scoped>
.paramster-table{
  width:100%;
  th{
    font-weight: bold;
  }
  th,td{
    text-align: center;
    line-height: 32px;
  }
}
</style>
