<template>
<div class="paramster-richtext">
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
  Getter,
  State,
  Action
} from 'vuex-class'

@Component
export default class RichText extends Vue {
  @Getter curElement
  @State curElementId
  @Action actChangeElement
  editor = null
  content = ""


  config = {
    UEDITOR_HOME_URL: './static/UEditor/',
    autoHeightEnabled: false,
    initialFrameHeight: 300,
    initialFrameWidth: '100%'
  }

  @Watch('curElementId')
  onCurElementIdChange(){
    if(this.curElement.type==='richText'&&this.editor){
      this.editor.setContent(this.curElement.extra.content)
    }
  }

  mounted() {
    this.editor = window.UE.getEditor('editor', this.config)
    this.editor.addListener("ready", () => {
      this.editor.setContent(this.curElement.extra.content)
    })
    this.editor.addListener("contentChange", () => {
      this.content=this.editor.getContent();
      this.handlerChange()
    })
  }


  handlerChange() {
    this.actChangeElement({
      extra:{
        content: this.content
      }
    })
  }
}
</script>
<style lang="less">
.paramster-richtext{
  .edui-default .edui-editor{
    
  }
  .edui-default .edui-editor-toolbarbox{
    box-shadow: none;
  }
}

</style>
