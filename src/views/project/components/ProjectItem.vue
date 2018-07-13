<template>
    <li class="item">
        <router-link to="/work">
            <img class="cover" src="http://img1.imgtn.bdimg.com/it/u=1623634399,4054906576&fm=27&gp=0.jpg"/>         
        </router-link>
        <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="action">
                <Tooltip content="编辑">
                    <Icon type="edit"></Icon>
                </Tooltip>
                <Tooltip content="设置">
                    <Icon type="gear-a"></Icon>
                </Tooltip>
                <Tooltip content="删除">
                    <Icon type="trash-a"></Icon>
                </Tooltip>          
            </div>
        </div>
        
    </li>
</template>
<script>
import { Prop, Vue, Component } from "vue-property-decorator";
@Component
export default class Item extends Vue {
    @Prop(Object) item!: any
}
</script>

<style lang="less" scoped> 
    .item {
        a {
            display: block;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            
        }
        .cover {
            width: 100%;
            height: 224px;
            display: block;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
        .content {
            border: 1px solid #ccc;
            border-top: none;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 40px;
            height: 40px;
            font-size: 14px;
            color: #666;
            font-weight: bold;
            border-bottom: 1px solid #ccc;
            margin-left: 15px;
            padding: 0 5px;

        }
        .action {
            padding: 0 20px;
            box-sizing: border-box;
            width: 222px;
            display: table-cell;
            vertical-align: middle;
            height: 40px;
            i {
                cursor: pointer;
                font-size: 18px;
                color: #666;
            }
            
        }
    }
</style>