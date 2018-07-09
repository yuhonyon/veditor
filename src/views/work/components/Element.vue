<template>
  <div class="element" @click.stop="$emit('click',element)" :style="stylesObj">
    <div v-if="isHtml" v-html="content"></div>
    <div v-else>
      {{content}}
    </div>
  </div>
</template>
<script>
import {Vue, Component, Prop,Watch} from 'vue-property-decorator'
@Component
export default class ElementNoEditing extends Vue {
  @Prop(Object) element!:any
  newElement={...this.element}
  get stylesObj () {
    return {
      width: "100%",
      height:  "100%",
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
  get isHtml () {
    return this.element.type === 'richText'
  }
  get content () {
    if (this.element.type === 'text') {
      return this.element.extra.text
    } else if (this.element.type === 'richText') {
      return this.element.extra.content
    }
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

}
</script>
<style lang="less" scoped>
.element{
  height:100%;
  width:100%;
  word-break: break-all;
}
</style>
