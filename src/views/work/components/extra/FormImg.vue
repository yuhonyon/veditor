<template>
  <div class="wrapper">
    <div>
      <img :src="curElement.extra.src" alt="">
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
@Component
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
<style lang="less" scoped>

</style>
