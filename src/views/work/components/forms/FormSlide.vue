<template>
  <div class="form-slide">
        <Row>
          <Col span="15">
            <Slider :max="max" :min="min" :value="newValue" @on-change="handlerChange"></Slider>
          </Col>
          <Col span="6" offset="1">
            <Input  @input="handlerChange" v-model.number="newValue"></Input>
          </Col>
          <Col span="2">
            {{unit}}
          </Col>
        </Row>
  </div>
</template>
<script>
import { Vue, Component, Prop, Model, Watch} from 'vue-property-decorator'

@Component
export default class ChartFormSlide extends Vue {
  @Prop(Number) max:number
  @Prop(Number) min:number
  @Prop({default: "px"}) unit:string
  @Model('change', { type: Number }) value: number
  newValue=null

  @Watch('value')
  onValueChange (val:number) {
    this.newValue = val
  }
  mounted () {
    this.newValue = this.value
  }
  handlerChange (value) {
    this.$emit('change', value ? Number(value) : null)
  }
}
</script>
