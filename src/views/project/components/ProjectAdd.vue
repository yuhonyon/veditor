<template>
    <li class="item">
        <router-link to="/work">
            <div class="icon-add">
                <Icon type="plus"></Icon>
            </div>
            <div class="note">点击开始创建</div>
        </router-link>
    </li>
</template>
<style lang="less" scoped>
    .item {
        text-align: center;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        i {
            font-size: 40px;
            font-weight: bold;
            color: #666;
            &:hover {
                color: #09c;
            }
        }
        .icon-add {
            display: table-cell;
            vertical-align: middle;
            width: 222px;
            height: 224px;
        }
        .note {
            color: #666;
            font-size: 18px;
            line-height: 80px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            border-top: 1px solid #ccc;
            font-weight: bold;
        }
    }
</style>
