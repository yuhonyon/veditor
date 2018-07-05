<template>
<div id="">
  <div class="header">
    header
  </div>
  <div class="content">
    首页
    <div>
      临时路由
      <Menu mode="horizontal" active-name="/home" router>
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
