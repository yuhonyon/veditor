<template>
  <div class="wrapper" @contextmenu.prevent="menuVisible=false" @click="menuVisible=false">
    <div class="main">
      <transform v-for="item in elementList" :key="item.id" :element="item"><Element @click="handleSelectElement"  @contextmenu="handlerElementRightClick"  :element="item"></Element></transform>
      <!-- <animation  v-if="element.id!==null"><event><transform><basic-style><element-editing></element-editing></basic-style></transform></event></animation> -->

    </div>
    <div class="attr" v-if="!!curElementId" :style="StyleObj" @click.stop="menuVisible=false">
      <div class="handler" @mousedown.stop="handleClickEditorWrapper">
        <Icon type="navicon-round"></Icon>
      </div>
      <Paramster></Paramster>
    </div>
    <right-menu v-show="menuVisible" :pos="pos" @click="menuVisible=false"></right-menu>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import $ from "jquery"
import Transform from "./Transform.vue"
import Element from "./Element.vue"
import Paramster from "./Paramster.vue"
import RightMenu from "./RightMenu.vue"
import {
  State,
  Getter,
  Action
} from 'vuex-class'
@Component({
  components: {
    Transform,
    Element,
    Paramster,
    RightMenu
  }
})
export default class Editor extends Vue {
  @Getter curElement
  @State curElementId
  @State elementList
  // @State menuVisible
  @Action actSelectCurElement
  // @Action setMenuVisible
  transform = {
    right: 0,
    top: 0
  }
  old = {
    right: 0,
    top: 0
  }
  gap = {
    x: 0,
    y: 0
  }
  pos = {
    x: 0,
    y: 0
  }
  menuVisible = false;
  get StyleObj () {
    return {
      right: this.transform.right + "px",
      top: this.transform.top + "px",
      width: this.curElement.type === 'chart' ? "500px" : "400px"
    }
  }
  mounted() {
    $(document).on("click", this.handlerDocumentClick);
  }
  handlerDocumentClick(): void {
    console.log(1);
  }

  handleClickEditorWrapper (e):void {
    this.gap.x = e.clientX
    this.gap.y = e.clientY
    this.old.top = this.transform.top
    this.old.right = this.transform.right
    $(document).on("mousemove", this.handlerMousemoveEditorWrapper)
    $(document).on("mouseup", this.unHandlerMousemove)
  }
  handlerMousemoveEditorWrapper (e): void {
    let right = this.old.right + this.gap.x - e.clientX
    let top = this.old.top + e.clientY - this.gap.y
    this.transform.right = right
    this.transform.top = top
  }
  unHandlerMousemove (e): void {
    let right = this.transform.right
    let top = this.transform.top
    let maxRight = document.body.clientWidth - 500
    this.transform.right = right <= 50 ? 0 : (right >= (maxRight - 50) ? maxRight : right)
    this.transform.top = top <= 50 ? 0 : top
    $(document).off("mousemove", this.handlerMousemoveEditorWrapper)
  }
  handleSelectElement (element) {
    this.actSelectCurElement(element.id)
    // this.setMenuVisible(false);
    this.menuVisible = false;
  }
  handlerElementRightClick(e, element) {
    // this.setMenuVisible(true);
    this.actSelectCurElement(element.id);
    this.menuVisible = true;
    this.pos.x = e.clientX;
    this.pos.y = e.clientY;
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
  // cursor: crosshair;
  cursor: move;
}
</style>
