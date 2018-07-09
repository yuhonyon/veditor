<template>
  <div class="wrapper">
    <Button @click="handlerAddAnimation" style="width:100%;">添加动画</Button>
    <draggable :list="animationData">
       <div v-for="(animation,index) in animationData" :options="{draggable:'.item'}" :key="animation.key">
         <Collapse >
             <Panel name="1">
                 <span>动画{{index+1}}({{animation.name}})</span>
                 <span @click="handlerRemoveAnimation(index)"><Icon  type="trash-a"></Icon></span>
                 <animation-form slot="content" v-model="animationData[index]"></animation-form>
             </Panel>
         </Collapse>
       </div>
    </draggable>

  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action
} from 'vuex-class'
import AnimationForm from "./AnimationForm.vue"
import Draggable from 'vuedraggable'
@Component({
  components: {
    AnimationForm,
    Draggable
  }
})
export default class ParamsterAnimation extends Vue {
  @Getter curElement
  @Action actChangeElement
  animationData:any[]=[]
  @Watch('curElement')
  onElementChanged () {
    this.animationData = [...this.curElement.animation]
  }
  handlerAddAnimation () {
    this.animationData.push({
      time: 1000,
      delay: 0,
      name: "bounceIn",
      count: 1,
      function: 'ease',
      interval: 1000,
      key: Date.now()
    })
    this.actChangeElement({animation: [...this.animationData]})
  }

  handlerRemoveAnimation (index) {
    this.animationData.splice(index, 1)
    this.actChangeElement({animation: [...this.animationData]})
  }
  mounted ():void {
    this.animationData = [...this.curElement.animation]
  }
}
</script>
<style lang="less" scoped>

</style>
