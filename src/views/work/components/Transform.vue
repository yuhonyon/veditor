<template>
  <div :style="stylesObj"  class="box" @mousedown="handlerWrapperClick">
    <div class="handler" v-show="showHandler">
      <div class="right" @mousedown.stop="handlerRightClick"></div>
      <div class="left"></div>
      <div class="top"></div>
      <div class="bottom" @mousedown.stop="handlerBottomClick"></div>
      <div class="rightTop"></div>
      <div class="leftTop"></div>
      <div class="rightBottom"></div>
      <div class="leftBottom"></div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import {Vue, Component, Watch,Prop} from 'vue-property-decorator'
import throttle from 'lodash.throttle'
import {
  State,
  Action
} from 'vuex-class'
import $ from "jquery"
@Component
export default class Transform extends Vue {
  @Action actChangeElement
  @State curElementId
  @Prop(Object) element!:any
  transform={
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    rotate: 0
  }
  old={
    width: 100,
    height: 100,
    left: 0,
    top: 0,
    rotate: 0
  }
  gap={
    x: 0,
    y: 0
  }
  _onElementChanged:any=function () {}

  get stylesObj () {
    return {
      width: this.transform.width + "px",
      height: this.transform.height + "px",
      left: this.transform.left + "px",
      top: this.transform.top + "px"
    }
  }
  get showHandler(){
    return this.element.id===this.curElementId
  }


  @Watch('element')
  onElementChanged (): void {
    this.transform = {...this.element.transform}
  }

  handlerChangeElement (): void {
    this.actChangeElement({...this.element, transform: this.transform})
  }
  handlerWrapperClick (e): void {
    if(!this.showHandler){
      return;
    }
    this.gap.x = e.clientX - this.transform.left
    this.gap.y = e.clientY - this.transform.top
    $(document).on("mousemove", this.handlerWrapperMousemove)
    $(document).on("mouseup", this.unHandlerMousemove)
  }

  handlerWrapperMousemove (e): void {
    this.transform.top = e.clientY - this.gap.y
    this.transform.left = e.clientX - this.gap.x
    this._onElementChanged()
  }

  unHandlerMousemove (e):void {
    $(document).off("mouseup", this.unHandlerMousemove)
    $(document).off("mousemove", this.handlerWrapperMousemove)
    $(document).off("mousemove", this.handlerRightMousemove)
    $(document).off("mousemove", this.handlerBottomMousemove)
    this._onElementChanged()
  }

  handlerRightClick (e): void {
    this.gap.x = e.clientX
    this.old.width = this.transform.width
    $(document).on("mousemove", this.handlerRightMousemove)
    $(document).on("mouseup", this.unHandlerMousemove)
  }
  handlerRightMousemove (e):void {
    this.transform.width = this.old.width + e.clientX - this.gap.x
    this._onElementChanged()
  }
  handlerBottomClick (e): void {
    this.gap.y = e.clientY
    this.old.height = this.transform.height
    $(document).on("mousemove", this.handlerBottomMousemove)
    $(document).on("mouseup", this.unHandlerMousemove)
  }
  handlerBottomMousemove (e):void {
    this.transform.height = this.old.height + e.clientY - this.gap.y
    this._onElementChanged()
  }
  mounted ():void {
    this.transform = {...this.element.transform}
    this._onElementChanged = throttle(this.handlerChangeElement, 150, {leading: false})
  }
}
</script>
<style lang="less" scoped>
.box{
  position: absolute;
  left:0;
  right:0;
  width:100px;
  height: 100px;
  user-select:none;
}
.handler{
  width:100%;
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  outline: 1px solid #ddd;
>div{
  position: absolute;
  width:10px;
  height: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.left{
  left: 0;
  top:50%;
  margin-left: -5px;
  margin-top: -5px;
}
.right{
  right: 0;
  top:50%;
  border-color: red;
  margin-right: -5px;
  margin-top: -5px;
}
.bottom{
  left: 50%;
  bottom:0;
  border-color: red;
  margin-left: -5px;
  margin-bottom: -5px;
}
.top{
  left: 50%;
  top:0;
  margin-left: -5px;
  margin-top: -5px;
}

.rightTop{
  right: 0;
  top:0;
  margin-right: -5px;
  margin-top: -5px;
}
.leftTop{
  left: 0;
  top:0;
  margin-left: -5px;
  margin-top: -5px;
}
.rightBottom{
  right: 0;
  bottom:0;
  margin-right: -5px;
  margin-bottom: -5px;
}
.leftBottom{
  left: 0;
  bottom:0;
  margin-left: -5px;
  margin-bottom: -5px;
}
}
</style>
