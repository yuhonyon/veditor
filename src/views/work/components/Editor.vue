<template>
  <div class="wrapper">
    <div class="main">
      <transform v-for="item in elementList" :key="item.id" :element="item"><Element @click="handleSelectElement"   :element="item"></Element></transform>
      <!-- <animation  v-if="element.id!==null"><event><transform><basic-style><element-editing></element-editing></basic-style></transform></event></animation> -->

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
import {
  State,
  Getter,
  Action
} from 'vuex-class'
@Component({
  components: {
    Transform,
    Element,
    Paramster
  }
})
export default class Editor extends Vue {
  @Getter curElement
  @State elementList
  @Action actSelectCurElement

  handleClickEditorWrapper () {

  }
  handleSelectElement (element) {
    this.actSelectCurElement(element.id)
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  padding: 0 400px 0 300px;
  min-height: 600px;
  position: relative;
}
.main{
  position: relative;
  min-height: 600px;
}
.attr{
  width:400px;
  position: absolute;
  right: 0;
  top: 0;
  bottom:0;
}
</style>
