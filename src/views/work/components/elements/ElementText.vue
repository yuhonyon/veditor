<template>
  <p :style="textStyle">
    {{this.element.extra.text}}
  </p>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ElementText extends Vue {
  @Prop(Object) element:any

  get textStyle () {
    return {
      text: this.element.extra.text,
      fontSize: this.element.extra.fontSize + "px",
      color: this.element.extra.color
    }
  }
}
</script>
