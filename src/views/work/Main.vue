<template>
  <div id="">
    <div class="header">
      header
    </div>
    <div class="content">
      <Editor></Editor>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import {Editor} from "./components"
@Component({
  components: {
    Editor
  }
})
export default class Main extends Vue {
  message:string="message"
}
</script>
<style lang="less" scoped>
.header{
  height: 60px;
  background: #09c;
  line-height: 60px;
  color: #fff;
}
.content{
  height: 500px;
}
.footer{
  height: 100px;
  line-height: 100px;
  color: #999;
  text-align: center;
  border-top: 1px solid #ddd;
}
</style>
