<template>
  <div class="wrapper">
    <rich-text v-if="curElement.type==='richText'"></rich-text>
    <form-text v-if="curElement.type==='text'"></form-text>
    <form-img v-if="curElement.type==='img'"></form-img>
    <form-chart v-if="curElement.type==='chart'"></form-chart>
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
import FormChart from "./extra/formChart"
@Component({
  components: {
    FormText,
    FormImg,
    FormChart,
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
.wrapper{
  color: #fff;
}
</style>
