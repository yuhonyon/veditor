<template>
  <div v-html="this.element.extra.content"></div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ElementTichText extends Vue {
  @Prop(Object) element:any
}
</script>
