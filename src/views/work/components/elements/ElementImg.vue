<template>
  <div :style="imgStyle">
    <img :src="element.extra.src" style="width:100%;">
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ElementImg extends Vue {
  @Prop(Object) element:any

  get imgStyle () {
    return {
      width: "100%",
      height: "100%"
    }
  }
}
</script>
