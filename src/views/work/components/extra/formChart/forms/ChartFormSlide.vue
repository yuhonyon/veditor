<template>
  <div class="chart-form-slide" :class="{'active':active}">
    <Row>
      <Col span="10"><Checkbox @on-change="handlerActiveChange" v-model="active">{{title}}</Checkbox></Col>
      <Col span="14">
        <Row>
          <Col span="17">
            <Slider :max="max" :min="min" :value="newValue" @on-change="handlerChange"></Slider>
          </Col>
          <Col span="4" offset="1">
            <Input size="small" @input="handlerChange" v-model.number="newValue"></Input>
          </Col>
          <Col span="2">
            {{unit}}
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
  @Prop({default: 0}) defaultValue:number
  @Prop({default: "px"}) unit:string
  @Model('change', { type: Number }) value: number
  newValue=null
  active=false
  @Watch('value')
  onValueChange (val:number) {
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
    this.$emit('change', value ? Number(value) : null)
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

}

</style>
