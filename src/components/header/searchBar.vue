<template>
  <div class="search-panel" :class="{index:isIndex}">
    <div class="m-header-searchbar">
      <el-col :span="5" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
      </el-col>
      <el-col :span="19" class="center">
        <div class="wrapper">
          <div class>
            <el-input
              v-model="searchWord"
              placeholder="请输入内容"
              @focus="focus"
              @blur="blur"
              @input="onInput"
            ></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </div>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotWordsList" :key="item + '~' + index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchPlace">
            <dd v-for="(item,index) in placeWordsList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <div class="suggest">
          <router-link
            :to="{name:'goods',params:{name:item}}"
            v-for="(item,index) in hotWordsList"
            :key="item + '~' + index"
          >{{item}}</router-link>
        </div>
      </el-col>
    </div> 
  </div>
</template>

<script>
// import api from '@/api/index.js'
export default {
  data(){
    return {
      searchWord:'',
      isOnFocus:false,
      hotWordsList:[],
      placeWordsList:[]
    }
  },
  computed:{
    isHotPlace(){
      return this.searchWord == '' && this.isOnFocus
    },
    isSearchPlace(){
      return this.searchWord != '' && this.isOnFocus
    },
    isIndex(){
      return this.$route.path == '/index'
    }
  },
  methods:{
    focus(){
      this.isOnFocus = true
    },
    blur(){
      setTimeout(() => {
        this.isOnFocus = false
      }, 150);
    },
    onInput(){
      this.api.searchPlaceWords().then(res => {
        this.placeWordsList = res.data.data.list.filter((item) => {
          return item.indexOf(this.searchWord) != '-1'
        })
      })
    }
  },
  beforeRouteUpdate(to,from,next){
    const name = to.params.name;
    next()
  },
  mounted(){
    this.api.searchHotWords().then(res => {
        this.hotWordsList = res.data.data
    },err => console.log(err))

  }
}
</script>

<style lang='scss'>
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>