<template>
  <div :style="stylesObj" ref="box" class="box" @click.stop="" @mousedown.stop="handlerWrapperClick">
    <div class="handler" v-show="showHandler" @contextmenu.stop.prevent="handlerRightMenuClick">
      <div class="right" @mousedown.stop="handlerRightClick"></div>
      <div class="left" @mousedown.stop="handlerLeftClick"></div>
      <div class="top" @mousedown.stop="handlerTopClick"></div>
      <div class="rotate" @mousedown.stop="handlerRotateClick"><Icon type="ios-refresh"></Icon></div>
      <div class="bottom" @mousedown.stop="handlerBottomClick"></div>
      <div class="rightTop" @mousedown.stop="handlerRightTopClick"></div>
      <div class="leftTop" @mousedown.stop="handlerLeftTopClick"></div>
      <div class="rightBottom" @mousedown.stop="handlerRightBottomClick"></div>
      <div class="leftBottom" @mousedown.stop="handlerLeftBottomClick"></div>
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
  }
  gap={
    x: 0,
    y: 0
  }
  origin= {
    x: 0,
    y: 0
  }
  _onElementChanged:any=function () {}

  get stylesObj () {
    return {
      width: this.transform.width + "px",
      height: this.transform.height + "px",
      left: this.transform.left + "px",
      top: this.transform.top + "px",
      transform: "rotate("+ this.transform.rotate +"deg)"
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
  handlerRightMenuClick(e) {
    this.$emit('contextmenu', e, this.element);
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
    $(document).off("mousemove", this.handlerLeftMousemove)
    $(document).off("mousemove", this.handlerRightBottomMousemove);
    $(document).off("mousemove", this.handlerLeftBottomMousemove);
    $(document).off("mousemove", this.handlerTopMousemove);
    $(document).off("mousemove", this.handlerRightTopMousemove);
    $(document).off("mousemove", this.handlerLeftTopMousemove);
    $(document).off("mousemove", this.handlerRotateMousemove);
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
  handlerLeftClick (e): void {
    this.gap.x = e.clientX;
    this.old.width = this.transform.width;
    this.old.left = this.transform.left;
    $(document).on("mousemove", this.handlerLeftMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerLeftMousemove (e): void {
    this.transform.width = this.old.width + this.gap.x - e.clientX;
    this.transform.left = this.old.left + e.clientX - this.gap.x;
    this._onElementChanged();
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
  handlerRightBottomClick (e): void {
  
    this.gap.x = e.clientX;
    this.gap.y = e.clientY;
    this.old.width = this.transform.width;
    this.old.height = this.transform.height;
    $(document).on("mousemove", this.handlerRightBottomMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerRightBottomMousemove (e): void {
    this.transform.width = this.old.width + e.clientX - this.gap.x;
    this.transform.height = this.old.height + e.clientY - this.gap.y;
    this._onElementChanged();
  }
  handlerLeftBottomClick (e): void {
    this.gap.x = e.clientX;
    this.gap.y = e.clientY;
    this.old.width = this.transform.width;
    this.old.height = this.transform.height;
    this.old.left = this.transform.left;
    $(document).on("mousemove", this.handlerLeftBottomMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerLeftBottomMousemove (e): void {
    this.transform.width = this.old.width + this.gap.x - e.clientX;
    this.transform.height = this.old.height + e.clientY - this.gap.y;
    this.transform.left = this.old.left + e.clientX - this.gap.x;
    this._onElementChanged();
  }
  handlerTopClick (e): void {
    this.old.height = this.transform.height;
    this.old.top = this.transform.top;
    this.gap.y = e.clientY;
    $(document).on("mousemove", this.handlerTopMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerTopMousemove (e): void {
    this.transform.height = this.old.height + this.gap.y - e.clientY;
    this.transform.top = this.old.top + e.clientY - this.gap.y;
    this._onElementChanged();
  }
  handlerRightTopClick (e): void {
    this.old.width = this.transform.width;
    this.old.height = this.transform.height;
    this.old.top = this.transform.top;
    this.gap.x = e.clientX;
    this.gap.y = e.clientY;
    $(document).on("mousemove", this.handlerRightTopMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerRightTopMousemove (e): void {
    this.transform.width = this.old.width + e.clientX - this.gap.x;
    this.transform.height = this.old.height + this.gap.y - e.clientY;
    this.transform.top = this.old.top + e.clientY - this.gap.y;
    this._onElementChanged();
  }
  handlerLeftTopClick (e): void {
    this.old.width = this.transform.width;
    this.old.height = this.transform.height;
    this.old.top = this.transform.top;
    this.old.left = this.transform.left;
    this.gap.x = e.clientX;
    this.gap.y = e.clientY;
    $(document).on("mousemove", this.handlerLeftTopMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);
  }
  handlerLeftTopMousemove (e): void {
    this.transform.width = this.old.width + this.gap.x - e.clientX;
    this.transform.height = this.old.height + this.gap.y - e.clientY;
    this.transform.top = this.old.top + e.clientY - this.gap.y;
    this.transform.left = this.old.left + e.clientX - this.gap.x;
    this._onElementChanged();
  }
  handlerRotateClick (e): void {
    this.origin.x = this.transform.width / 2 + $(this.$refs.box).offset().left;
    this.origin.y = this.transform.height / 2 + $(this.$refs.box).offset().top;
    $(document).on("mousemove", this.handlerRotateMousemove);
    $(document).on("mouseup", this.unHandlerMousemove);

  }
  getAngle(cx, cy, ex, ey) {
    let x = Math.abs(ex - cx);
    let y = Math.abs(ey - cy);
    let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let angle = Math.acos(y/z) * 180 / Math.PI; // 第一象限

    if(ex>cx&&ey>cy){//鼠标在第四象限
      angle = 180 - angle;
    }

    if(ex==cx&&ey>cy){//鼠标在y轴负方向上   
      angle = 180;
    }

    if (ex==cx&&ey<cy){ // 鼠标在y轴正方向上
      angle = 0;
    }
    if(ex>cx&&ey==cy){//鼠标在x轴正方向上
      angle = 90;
    }

    if(ex<cx&&ey>cy){//鼠标在第三象限
      angle = 180+angle;
    }

    if(ex<cx&&ey==cy){//鼠标在x轴负方向
      angle = 270;
    }

    if(ex<cx&&ey<cy){//鼠标在第二象限
      angle = 360 - angle;
    }

    return angle;
  }
  handlerRotateMousemove (e): void {
    this.transform.rotate = this.getAngle(this.origin.x, this.origin.y, e.clientX, e.clientY);
    this._onElementChanged();
  }
  setStyle(opts) {
    for (let key in opts) {
      for (let k in opts[key]) {
        this[key][k] = opts[key][k]
      }
    }
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
.rotate {
  left: 50%;
  margin-left: -12px;
  top: -40px;
  border: none;
  font-size:24px;
  background-color: transparent;
  width: auto;
  height: auto;
  &:after {
    content: "";
    height: 8px;
    width: 1px;
    overflow: hidden;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    bottom: 0px;
  }
}
.left{
  left: 0;
  top:50%;
  border-color: red;
  margin-left: -5px;
  margin-top: -5px;
  cursor: w-resize;
}
.right{
  right: 0;
  top:50%;
  border-color: red;
  margin-right: -5px;
  margin-top: -5px;
  cursor:e-resize;
}
.bottom{
  left: 50%;
  bottom:0;
  border-color: red;
  margin-left: -5px;
  margin-bottom: -5px;
  cursor: s-resize;
}
.top{
  left: 50%;
  top:0;
  margin-left: -5px;
  margin-top: -5px;
  border-color: red;
  cursor: n-resize;
}

.rightTop{
  right: 0;
  top:0;
  margin-right: -5px;
  margin-top: -5px;
  border-color: red;
  cursor: ne-resize;
}
.leftTop{
  left: 0;
  top:0;
  margin-left: -5px;
  margin-top: -5px;
  border-color: red;
  cursor:nw-resize;
}
.rightBottom{
  right: 0;
  bottom:0;
  margin-right: -5px;
  margin-bottom: -5px;
  border-color: red;
  cursor: se-resize;
}
.leftBottom{
  left: 0;
  bottom:0;
  margin-left: -5px;
  margin-bottom: -5px;
  border-color: red;
  cursor: sw-resize;
}
}
</style>
