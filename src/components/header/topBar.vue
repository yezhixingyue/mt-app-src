<template>
  <div class="m-header-topbar">
      <el-row>
        <el-col :span="10" class="m-header-topbar">
            <geo />
        </el-col>
        <el-col :span="14" class="m-nav">
            <MNav />
        </el-col>
      </el-row>
  </div>
</template>

<script>
import geo from './geo.vue'
import MNav from './nav.vue'
export default {
    components:{
        geo,
        MNav
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss'
</style>