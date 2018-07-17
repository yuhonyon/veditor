<template>
  <div class="wrapper" :class="{'active':active}">
    <Row>
      <Col span="10"><Checkbox @on-change="handlerActiveChange" v-model="active">{{title}}</Checkbox></Col>
      <Col span="14"><Input size="small" @input="handlerChange" v-model="newValue"></Input></Col>
    </Row>
  </div>
</template>
<script>
import { Vue, Component, Prop, Model, Watch} from 'vue-property-decorator'

@Component
export default class ChartFormInput extends Vue {
  @Prop(String) title:string
  @Prop({default: ""}) defaultValue:string
  @Model('change', { type: String }) value: string
  newValue=null
  active=false
  @Watch('value')
  onValueChange (val:string) {
    this.newValue = val
    if (val !== null) {
      this.active = true
    }
  }
  mounted () {
    this.newValue = this.value
    if (this.value !== null) {
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
.wrapper{
  color: #fff;
  margin-bottom: 10px;
  opacity: .5;
  &.active{
    opacity: 1;
  }
}

</style>
