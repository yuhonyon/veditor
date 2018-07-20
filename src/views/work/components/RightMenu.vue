<template>
    <div class="right-menu" :style="styleObj">
        <div @click.stop="handlerElementRemove">删除</div>
    </div>
</template>
<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component
export default class extends Vue {
    @Getter curElement;
    @Action actRemoveElement
    @Prop({default: {x: 0, y: 0}}) pos: any
    get styleObj() {
        return {
           left: this.pos.x + "px",
           top: this.pos.y + "px"
        }
    }
    handlerElementRemove() {
        this.actRemoveElement();
        this.$emit('click');
    }
    
}
</script>

<style lang="less" scoped>
    .right-menu {
        position: fixed;
        background-color: #09c;
        border-radius: 4px;
        z-index: 9999;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        width: 150px;
        & > div {
            text-align: center;
            color: #fff;
            line-height: 36px;
        }
    }
</style>
