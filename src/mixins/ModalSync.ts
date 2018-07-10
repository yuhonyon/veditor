import { Vue, Component, Watch ,Prop} from 'vue-property-decorator';
@Component
export default class ModalSync extends Vue {
  visible = false
  @Prop(Boolean) value!: boolean
  @Watch('value')
  onModalSyncValueChange (val: boolean): void {
    if (val) { this.visible = this.value; this.handleShow(); } else { this.handleHide(); }
  }

  @Watch('visible')
  onModalSyncVisibleChange(val: boolean): void {
    if (!val) {
      this.$emit('input', this.visible)
    }
  }
  
  handleShow () {}
  handleHide () {}
  created () {
    this.visible = this.value
  }
}
