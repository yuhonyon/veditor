<template>
  <div class="wrapper">
    <div class="logo">
      veditor
    </div>
    <ul class="menu">
      <li>
        <Icon size="20" type="star"></Icon>
        <p>富文本</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>文字</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>图片</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>形状</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>表单</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>按钮</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>图表</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>模板</p>
      </li>
      <li>
        <Icon size="20" type="star"></Icon>
        <p>组件库</p>
      </li>
      <li>
        <Dropdown>
        <a href="javascript:void(0)">
          <Icon size="20" type="star"></Icon>
          <p>其他</p>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>背景</DropdownItem>
            <DropdownItem>音频</DropdownItem>
            <DropdownItem>视频</DropdownItem>
        </DropdownMenu>
    </Dropdown>
      </li>
    </ul>
    <div class="btns">
      <Button>预览</Button>
      <Button>保存</Button>
      <Button>发布</Button>
      <Dropdown>
       <a href="javascript:void(0)">
           小王
           <Icon type="arrow-down-b"></Icon>
       </a>
       <DropdownMenu slot="list">
           <DropdownItem>个人中心</DropdownItem>
           <DropdownItem>我的项目</DropdownItem>
           <DropdownItem>退出</DropdownItem>
       </DropdownMenu>
   </Dropdown>
    </div>
  </div>
</template>
<script>
import {Vue, Component} from 'vue-property-decorator'
import {
  State,
  Getter,
  Action
} from 'vuex-class'
@Component
export default class WorkHeader extends Vue {
  @Getter curElement
}
</script>
<style lang="less" scoped>
.wrapper{
  height: 100%;
  padding:0 25px;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.logo{

}
.btns{
  a{
    color: #fff;
    margin-left: 20px;
  }
}
.menu{
  text-align: center;
  display: flex;
  justify-content: space-between;
  >li{
    width:60px;
    padding-top: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 18px;
    a{
      color: #fff;
    }
  }
}
</style>
