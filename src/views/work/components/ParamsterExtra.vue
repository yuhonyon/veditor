<template>
  <div class="wrapper">
    <rich-text v-if="curElement.type==='richText'"></rich-text>
  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator'
import {
  State,
  Action,
  Getter
} from 'vuex-class'
import RichText from "./extra/RichText.vue"
@Component({
  components: {
    RichText
  }
})
export default class Main extends Vue {
  @Getter curElement
}
</script>
<style lang="less" scoped>

</style>
