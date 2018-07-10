<template>
  <Modal v-model="visible" width="840">
    <div slot="header">
      图片库 <Button>上传图片</Button>
    </div>
    <div class="source-wrapper">
      <div class="source-menu">
        <ul>
          <li>
            我的图片
          </li>
          <li>
            全部图片
          </li>
          <li>
            元素
          </li>
          <li>
            背景
          </li>
          <li>
            文字
          </li>
          <li>
            图标
          </li>
          <li>
            边框
          </li>
        </ul>
      </div>
      <div class="source-content">
        <div class="source-nav">
          分类
        </div>
        <div class="source-list">
          <div class="source-item" v-for="i in 20" @click="handlerAddImg">
            <img src="http://res1.eqh5.com/deb2ecee-a8b2-487a-a9f3-893a07624792.png?imageMogr2/auto-orient/thumbnail/272x272%3E" alt="">
          </div>
        </div>
      </div>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import { Vue, Component, Watch, Model, Emit} from 'vue-property-decorator'
import ModalSync from "@/mixins/ModalSync"
import {
  State,
  Getter,
  Action
} from 'vuex-class'
@Component({
  mixins: [ModalSync]
})
export default class FormText extends Vue {
  @Action actAddElement
  visible=false
  handlerAddImg ():void {
    let newElement = {
      type: "img",
      extra: {
        src: "http://res1.eqh5.com/deb2ecee-a8b2-487a-a9f3-893a07624792.png?imageMogr2/auto-orient/thumbnail/272x272%3E"
      }

    }
    this.actAddElement(newElement)
    this.visible = false
  }
}

</script>
<style lang="less" scoped>

</style>
