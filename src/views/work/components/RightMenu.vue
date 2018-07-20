<template>
    <div class="right-menu" :style="styleObj">1222</div>
</template>
<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class extends Vue {
    @Prop({default: {x: 0, y: 0}}) pos: any
    get styleObj() {
        return {
           left: this.pos.x + "px",
           top: this.pos.y + "px"
        }
    }
    
}
</script>

<style lang="less" scoped>
    .right-menu {
        position: fixed;
        background-color: #fff;
        border-radius: 4px;
        z-index: 9999;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
</style>
