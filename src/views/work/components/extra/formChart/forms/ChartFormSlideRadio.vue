<template>
  <div class="chart-form-slide" :class="{'active':active}">
    <Row>
      <Col span="10"><Checkbox @on-change="handlerActiveChange" v-model="active">{{title}}</Checkbox></Col>
      <Col span="14">
        <Row v-if="type==='slide'">
          <Col span="5">
            <Button size="small" @click="handlerTypeChange('radio')">切换</Button>
          </Col>
          <Col span="12">
            <Slider :max="max" :min="min" :value="newValue" @on-change="handlerChange"></Slider>
          </Col>
          <Col span="4" offset="1">
            <Input size="small" @input="handlerChange" v-model.number="newValue"></Input>
          </Col>
          <Col span="2">
            {{unit}}
          </Col>
        </Row>
        <Row v-else>
          <Col span="5">
            <Button size="small" @click="handlerTypeChange('slide')">切换</Button>
          </Col>
          <Col span="19">
            <RadioGroup v-model="newValue" @on-change="handlerChange" type="button" size="small">
                <Radio v-for="item in options" :label="item.value">{{item.name}}</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Vue, Component, Prop, Model, Watch} from 'vue-property-decorator'

@Component
export default class ChartFormSlide extends Vue {
  @Prop(String) title:string
  @Prop(Number) max:number
  @Prop(Number) min:number
  @Prop(Array) options:any
  @Prop({default: 0}) defaultValue:any
  @Prop({default: "px"}) unit:string
  @Model('change', { type: [Number, String] }) value: any
  newValue=null
  active=false
  type="radio"
  @Watch('value')
  onValueChange (val:any) {
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
  handlerChange (value) {
    if (this.type === "slide") {
      value = value ? Number(value) : null
    }
    this.$emit('change', value)
  }
  handlerTypeChange (type) {
    this.type = type
    this.newValue = null
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
.chart-form-slide{
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
  }
}

</style>
