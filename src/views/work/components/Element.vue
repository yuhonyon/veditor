<template>
  <div id="">
    12323
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Main extends Vue {
  message:string="message"
  handlerClick (): void {
    alert(this.message)
  }
}
</script>
<style lang="less" scoped>
</style>
