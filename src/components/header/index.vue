<template>
  <div class="m-header">
    <el-row>
        <top-bar />
    </el-row>
    <el-row>
        <search-bar  />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        topBar,
        searchBar
    },
};
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
    // @import '@/assets/css/public/header.scss'
</style>