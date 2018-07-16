<template>
  <div class="wrapper">
    <div class="chart-tabs-wrapper">
      <Tabs :animated="false" >
          <TabPane label="基础">
            <Tabs :animated="false">
                <TabPane label="通用">
                  <chart-form-input ></chart-form-input>
                </TabPane>
            </Tabs>
          </TabPane>
          <TabPane label="标题">
            <Tabs :animated="false">
                <TabPane label="内容">内容</TabPane>
                <TabPane label="样式">样式</TabPane>
            </Tabs>
          </TabPane>
          <TabPane label="视区">视区</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import {ChartFormInput} from "@/components/chartForm"
@Component({
  components: {
    ChartFormInput
  }
})
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
      this.text = this.curElement.extra
    }
  }

  mounted () {
    if (this.curElement.type === 'text') {
      this.text = this.curElement.extra
    }
  }
  handlerChange () {
    this.actChangeElement({
      extra: {...this.text}
    })
  }
}

</script>
<style lang="less">
.chart-tabs-wrapper .ivu-tabs{
  position: relative;
  min-height: 400px;
  .ivu-tabs-content{
    padding-left: 40px;
  }
  .ivu-tabs-bar{
    position: absolute;
    top:0;
    left:0;
    .ivu-tabs-nav-container{
      white-space:normal;
    }
    .ivu-tabs-nav-scroll{
      white-space:normal;
    }
    .ivu-tabs-ink-bar{
      display: none;
    }
    .ivu-tabs-tab{
      padding: 10px 0.5em;
      width:2em;
      margin: 0;
      color: #fff;
      display: block;
      background: #888;
      &.ivu-tabs-tab-active{
        background: #09c;
      }
    }
  }
}
</style>
