<template>
  <div id="" @click="handlerClick">
    {{message}}
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Main extends Vue {
  message:String="message"
  handlerClick ():void {
    alert(this.message)
  }
}
</script>
<style lang="less" scoped>
</style>
