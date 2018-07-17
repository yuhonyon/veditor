<template>
  <div class="wrapper">
    <div class="main">
      <transform v-for="item in elementList" :key="item.id" :element="item"><Element @click="handleSelectElement"   :element="item"></Element></transform>
      <!-- <animation  v-if="element.id!==null"><event><transform><basic-style><element-editing></element-editing></basic-style></transform></event></animation> -->

    </div>
    <div class="attr" v-if="!!curElementId">
      <div class="handler">
        <Icon type="navicon-round"></Icon>
      </div>
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
  @State curElementId
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
  min-height: 600px;
  position: relative;
}
.main{
  position: relative;
  min-height: 600px;
  border:1px dotted #ddd;
}
.attr{
  width:500px;
  position: absolute;
  right: 0;
  top: 0;
  bottom:0;
  border: 1px solid #ddd;
  background: #373941;
  color: #fff;
}
.handler{
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  cursor: crosshair;
}
</style>
