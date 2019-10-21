<template>
  <div class="m-geo">
    <i class="el-icon-add-location" />
    <span class="position">{{$store.state.position}}</span>
    <router-link to="/changeCity" class="changeCity">切换城市</router-link>
    [<a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}}  </a>]
    <router-link :to="{name:'login'}" class="login"> 立即登录</router-link>
    <router-link :to="{name:'registe'}" class="register">注册</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      area:{},
      nearCity:[]
    }
  },
  mounted(){
    this.api.getPosition().then(res=>{
      // console.log('position',res)
      this.area = res.data.data;
      this.$store.dispatch('getPosition',res.data.data.name)
      this.nearCity = res.data.data.nearCity
    });
    this.api.getAreaList().then(res=>{
      // console.log('area',res,res.data.data)
    });
    this.api.getDetail().then(res=>{
      console.log('detail',res,res.data.data)
    })
  }
}
</script>

<style>

</style>