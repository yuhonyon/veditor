<template>
  <div class="wrapper">
    <rich-text v-if="curElement.type==='richText'"></rich-text>
    <form-text v-if="curElement.type==='text'"></form-text>
    <form-img v-if="curElement.type==='img'"></form-img>
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
import FormText from "./extra/FormText.vue"
import FormImg from "./extra/FormImg.vue"
@Component({
  components: {
    FormText,
    FormImg,
    RichText
  }
})
export default class Main extends Vue {
  @Getter curElement
  @State curElementId
  @Action actChangeElement
}
</script>
<style lang="less" scoped>

</style>
