<template>
    <div class="chart-form-color" :class="{'active':active}">
        <Row>
        <Col span="10"><Checkbox @on-change="handlerActiveChange" v-model="active">{{title}}</Checkbox></Col>
        <Col span="14">
           <ColorPicker size="small" @on-change="handlerColorChange" v-model="newColor"></ColorPicker>
        </Col>
        </Row>
    </div>
</template>
<script>
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
@Component
export default class extends Vue {
    @Prop(String) title: string 
    @Prop(String) defaultColor: string
    @Model('change') color: string
    active = false;
    newColor = "";
    @Watch("color")
    onColorChange(newVal, oldVal) {
        this.newColor = newVal;
        if (newVal !== null && typeof newVal !== "undefined") {
            this.active = true;
        }
    }
    mounted() {
        this.newColor = this.color || this.defaultColor;
        if (this.color !== null && typeof this.color !== "undefined") {
            this.active = true
        }
    }
    handlerActiveChange(): void {
        if (this.active) {
            this.newColor = this.newColor || this.defaultColor;
        } else {
            this.newColor = this.defaultColor;
        }
        this.$emit('change', this.newColor)
    }

    handlerColorChange(): void {
        this.$emit("change", this.newColor);
    }
}
</script>
<style lang="less" scoped>
.chart-form-color {
    color: #fff;
    margin-bottom: 10px;
    .ivu-checkbox-wrapper {
        opacity: 0.5;
    }
    .ivu-color-picker {
        &>div:first-of-type {
            opacity: 0.5;
        }
    }
    &.active {
        opacity: 1;
        .ivu-checkbox-wrapper {
            opacity: 1;
        }
        .ivu-color-picker {
            &>div:first-of-type {
                opacity: 1;
            }
        }
    }
}
</style>
