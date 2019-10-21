<template>
  <div class="layout-default">
    <el-container>
      <el-header height=''>
          <my-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height=''>
        <myFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
import {mapActions} from 'vuex';
// import api from '@/api/index.js'
export default {
    components:{
        myHeader,
        myFooter
    },
    methods:{
      ...mapActions(['getPosition'])
    },
    created(){
      window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        // this.getPosition(position ? position : "北京") // --- 获取axios数据 对比获取城市信息
      },(err) => {
        console.log(err)
      })
      this.getPosition("北京")
      // console.log(api)
      // api.getHotWords().then((res) => {
      //   console.log(res)
      // }, err => console.log(err))
    }
};
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>

