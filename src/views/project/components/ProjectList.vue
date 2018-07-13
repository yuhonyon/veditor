<template>
    <ul class="project-list">
        <project-add></project-add>
        <project-item v-for="item in projectList" :key="item.id" :item="item"></project-item>
    </ul>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ProjectItem from './ProjectItem.vue';
import ProjectAdd from './ProjectAdd.vue';
@Component({
    components: {
        ProjectItem,
        ProjectAdd
    }
})
export default class List extends Vue {  
    @State projectList;
}
</script>
<style lang='less' scoped> 
    .project-list {
        overflow: hidden;
        padding: 10px 0;
        li {
            float: left;
            width: 224px;
            margin: 10px;
            border-radius: 6px;
            color: #333;
            a {
                display: block;
            }
        }
        
    }
</style>

