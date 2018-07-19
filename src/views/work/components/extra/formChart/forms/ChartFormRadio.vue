<template>
  <div class="chart-from-radio" :class="{'active':active}">
    <Row>
      <Col span="10"><Checkbox @on-change="handlerActiveChange" v-model="active">{{title}}</Checkbox></Col>
      <Col span="14">
        <RadioGroup v-model="newValue" @on-change="handlerChange" type="button" size="small">
            <Radio v-for="item in options" :label="item.value">{{item.name}}</Radio>
        </RadioGroup>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Vue, Component, Prop, Model, Watch} from 'vue-property-decorator'

@Component
export default class ChartFormRadio extends Vue {
  @Prop(String) title:string
  @Prop(Array) options:any
  @Prop({default: ""}) defaultValue:string
  @Model('change', { type: String }) value: string
  newValue=null
  active=false
  @Watch('value')
  onValueChange (val:string) {
    this.newValue = val
    if (val !== null && typeof val !== "undefined") {
      this.active = true
    }
  }
  mounted () {
    this.newValue = this.value
    if (this.value !== null && typeof this.value !== "undefined") {
      this.active = true
    }
  }
  handlerChange () {
    this.$emit('change', this.newValue)
  }
  handlerActiveChange () {
    if (this.active) {
      this.newValue = this.newValue || this.defaultValue
    } else {
      this.newValue = null
    }
    this.$emit('change', this.newValue)
  }
}
</script>
<style lang="less" scoped>
.chart-from-radio{
  color: #fff;
  margin-bottom: 10px;
  opacity: .5;
  &.active{
    opacity: 1;
  }
  .ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper{
    border-radius: 3px!important;
    margin-right: 10px;
    border-left: 1px solid #d7dde4;
    color: #fff;
    background: transparent;
    &.ivu-radio-wrapper-checked{
      color: #09c;
      border: 1px solid #09c;
    }
    &:before{
      display: none;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
}

</style>
