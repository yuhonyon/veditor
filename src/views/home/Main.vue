<template>
<div id="">
  <div class="header">
    header
  </div>
  <div class="content">
    首页
    <div>
      临时路由
      <Menu mode="horizontal" active-name="/home">
        <MenuItem name="/home">
          <router-link to="/home">首页</router-link>
        </MenuItem>
        <MenuItem name="/project-list">
          <router-link to="/project-list">项目列表</router-link>
        </MenuItem>
        <MenuItem name="/project/1">
          <router-link to="/project/1">项目详情</router-link>
        </MenuItem>
        <MenuItem name="/preview">
          <router-link to="/preview">项目预览</router-link>
        </MenuItem>
        <MenuItem name="/work">
          <router-link to="/work">工作台</router-link>
        </MenuItem>
      </Menu>
    </div>
  </div>
  <div class="footer">
    footer
  </div>
</div>
</template>
<script>
import {
  Vue,
  Component
} from 'vue-property-decorator'
@Component
export default class Main extends Vue {

}
</script>
<style lang="less" scoped>
.header {
    height: 60px;
    background: #09c;
    line-height: 60px;
    color: #fff;
}
.content {
    height: 500px;
}
.footer {
    height: 100px;
    line-height: 100px;
    color: #999;
    text-align: center;
    border-top: 1px solid #ddd;
}
</style>
