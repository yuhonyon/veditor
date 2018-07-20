<template>
  <div class="element" @click.stop="$emit('click',element)" @contextmenu.prevent.stop="handlerRightClick" :style="stylesObj">
    <element-chart v-if="element.type==='chart'" :options="element.extra"></element-chart>
    <element-text v-else-if="element.type==='text'" :element="element"></element-text>
    <element-rich-text v-else-if="element.type==='richText'" :element="element"></element-rich-text>
    <element-img v-else-if="element.type==='img'" :element="element"></element-img>
  </div>
</template>
<script>
import {Vue, Component, Prop,Watch} from 'vue-property-decorator'
import {
  ElementImg,
  ElementText,
  ElementRichText,
  ElementChart
} from "./elements"
@Component({
  components: {
    ElementImg,
    ElementText,
    ElementRichText,
    ElementChart
  }
})
export default class Element extends Vue {
  @Prop(Object) element!:any
  newElement={...this.element}

  get stylesObj () {
    return {
      width: "100%",
      height:  "100%",
      overflow:"hidden",
      borderWidth: this.element.border.size + "px",
      borderRadius: this.element.border.radius + "px",
      borderStyle: this.element.border.style,
      borderColor: this.element.border.color,
      animation:this.animation
    }
  }

  get animation () {
    let delay = 0
    const animations = this.element.animation.map(item => {
      let style = `${item.name} ${item.time * 0.001}s ${item.function} ${(item.delay + delay) * 0.001}s ${item.count}`
      delay = delay + item.delay + item.time * item.count
      return style
    })
    return animations.join(',')
  }

  @Watch('element')
  onElementChanged (): void {
    this.newElement = {...this.element}
  }

  restartAnimation () {
    let old = [...this.newElement.animation]
    this.newElement.animation = []
    Promise.resolve(() => {
      this.newElement.animation = old
    })
  }

  mounted() {
    this.newElement = {...this.element}
  }
  handlerRightClick(e) {
    this.$emit("contextmenu", e, this.element);
  }
}
</script>
<style lang="less" scoped>
.element{
  height:100%;
  width:100%;
  word-break: break-all;
}
</style>
