<template>
  <div class="page-changeCity">
      <el-row>
        <province :provinceList='provinceList' />
      </el-row>
      <el-row><hot title="热门城市:" :list='hotList' /></el-row>
      <el-row><hot title="最近访问:" :list='recentList' /></el-row>
      <el-row><catetoay :renderList='renderList' /></el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Catetoay from '@/components/changeCity/category.vue'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      hotList:[],
      recentList:[],
      provinceList:[],
      renderList:[]
    }
  },
  components:{
    Province,
    Hot,
    Catetoay
  },
  methods:{
    // click(){
    //   console.log(222)
    // }
    ...mapActions(['getProviceList'])
  },
  beforeRouteLeave(to,from,next){
    // console.log('router-leave')
    // console.log(to)
    // console.log(from)
    // console.log(next)
    next()
  },
  mounted(){
    this.api.getHotCitys().then(res => {
      res.data.data.forEach(ele => {
        this.hotList.push(ele.name)
      });
    },err => console.log(err))

    this.api.getRecentCitys().then(res => {
      res.data.data.forEach(ele => {
        this.recentList.push(ele.name)
      });
    },err => console.log(err))
    this.api.getProviceList().then(res => {
      this.provinceList = res.data.data
      const list = res.data.data.map(ele => ele.cityInfoList)
      let obj = {};
      let arr = [];
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(item => {
        obj[item]=[]
      })

      list.forEach( ele => {
        for(let i = 0;i<ele.length;i++){
          arr.push(ele[i])
        }
      })

      arr.sort((a,b)=>{
        if(b.rank == 'S'){
          return 1
        }
        if(a.rank == 'S'){
          return -1
        }
        return b.rank > a.rank ? -1 : 1
      })

      arr.forEach(item => {
        if(!obj[item.firstChar]){
          obj[item.firstChar] = []
        }
        obj[item.firstChar].push(item.name)
      })
      for(var a in obj){
        if(obj[a].length==0){
          console.log(obj[a])
          delete obj[a]
        }
      }
      this.renderList = obj

    },err => console.log(err))
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/changecity/iselect.scss'
</style>