<template>
<div>
  <script id="editor" type="text/plain"></script>
</div>
</template>

<script>
declare global {
  interface Window {
    UE: any;
  }
}

window.UE = window.UE || {};
import {
  Vue,
  Component,
  Watch
} from 'vue-property-decorator'
import {
  State,
  Action
} from 'vuex-class'

@Component
export default class RichText extends Vue {
  @State element
  @Action actChangeElement
  editor = null
  content = ""


  config = {
    UEDITOR_HOME_URL: './static/UEditor/',
    autoHeightEnabled: false,
    initialFrameHeight: 240,
    initialFrameWidth: '100%'
  }

  mounted() {
    this.editor = window.UE.getEditor('editor', this.config)
    this.editor.addListener("ready", () => {
      this.content = this.element.content
      this.editor.setContent(this.content)
    })
    this.editor.addListener("contentChange", () => {
      this.content=this.editor.getContent();
      this.handlerChange()
    })


  }


  handlerChange() {
    this.actChangeElement({ ...this.element,
      content: this.content
    })
  }
}
</script>
<style lang="less" scoped>

</style>
