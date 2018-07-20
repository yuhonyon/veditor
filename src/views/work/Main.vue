<template>
  <div id="">
    <div class="content">
      <Editor></Editor>
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import {Editor, WorkHeader} from "./components"
@Component({
  components: {
    Editor,
    WorkHeader
  }
})
export default class Main extends Vue {
  message:string="message"
}
</script>
<style lang="less" scoped>

.content{
  min-height: 600px;

}
.footer{
  height: 100px;
  line-height: 100px;
  color: #999;
  text-align: center;
  border-top: 1px solid #ddd;
}
</style>
