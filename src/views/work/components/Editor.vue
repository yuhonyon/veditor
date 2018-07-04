<template>
  <div class="wrapper">
    <div class="main">
      <Transform :data="{type:'text',text:1}"><Element></Element></Transform>
    </div>
    <div class="attr">
      <Paramster></Paramster>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Transform from "./Transform.vue"
import Element from "./Element.vue"
import Paramster from "./Paramster.vue"
@Component({
  components: {
    Transform,
    Paramster,
    Element
  }
})
export default class Main extends Vue {
  message:string="message"
  handlerClick (): void {
    alert(this.message)
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  padding: 0 400px 0 300px;
  position: relative;
}
.main{
  position: relative;
  width:100%;
}
.attr{
  width:400px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
