<template>
  <div class="wrapper">
    <source-img v-model="showSourceImgModal"></source-img>
    <router-link to="/home">
    <div class="logo">
        veditor
    </div>
    </router-link>
    <div class="router" v-if="$route.path!=='/work'">
      <Menu mode="horizontal" active-name="/home" router theme="primary">
          <MenuItem name="/home">
          首页
          </MenuItem>
          <MenuItem name="/project-list">
          项目列表
          </MenuItem>
          <MenuItem name="/project/1">
          项目详情
          </MenuItem>
          <MenuItem name="/preview">
          项目预览
          </MenuItem>
          <MenuItem name="/work">
          工作台
          </MenuItem>
      </Menu>
    </div>
    <ul class="menu"  v-if="$route.path==='/work'">
      <li @click="handlerAddRichText">
        <Icon size="20" type="star"></Icon>
        <p>富文本</p>
      </li>
      <li @click="handlerAddText">
        <Icon size="20" type="star"></Icon>
        <p>文字</p>
      </li>
      <li @click="handlerAddImg">
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
import {SourceImg} from "@/views/work/modals/"
@Component({
  components: {
    SourceImg
  }
})
export default class WorkHeader extends Vue {
  showSourceImgModal=false;
  @Getter curElement
  @Action actAddElement
  handlerAddRichText ():void {
    let newElement = {
      type: "richText",
      extra: {
        content: "<p>这是个富文本</p>"
      }

    }
    this.actAddElement(newElement)
  }
  handlerAddText ():void {
    let newElement = {
      type: "text",
      extra: {
        text: "这是一段文本",
        color: "#333"
      }

    }
    this.actAddElement(newElement)
  }

  handlerAddImg ():void {
    this.showSourceImgModal = true
  }
}
</script>
<style lang="less" scoped>
.wrapper{
  padding:0 25px;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
    height: 60px;
    background: #09c;
    line-height: 60px;
    color: #fff;

}
.logo{
  color: #fff;
}
.btns{
  a{
    color: #fff;
    margin-left: 20px;
  }
}
.router{

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
