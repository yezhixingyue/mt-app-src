<template>
  <div class="m-menu">
      <dl class="nav"  @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item,index) in menuList" :key="'menu~' + index" @mouseenter="menuEnter(item.items)">
          <i :class="item.type"></i>
          <span>
            <router-link to="/">{{item.name}}</router-link>
          </span>
          <span class="arrow"></span> 
        </dd>
      </dl>
      <div class="detail" v-if="detailData" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <template v-for="(item,index) in detailData">
          <h4 :key="'detail~' + index">{{item.title}}</h4>
          <span v-for="(c,i) in item.items" :key="c + '~' + i">{{c}}</span>
        </template>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuList:[],
      detailData:null
    }
  },
  methods:{
    menuEnter(list){
      this.detailData = list
    },
    menuLeave(){
      this.timer = setTimeout(() => {
        this.detailData = null
      }, 200);
    },
    detailEnter(){
      clearTimeout(this.timer)
    },
    detailLeave(){
      this.detailData = null
    }
  },
  mounted () {
    this.api.getMenuNav().then(res => {
      this.menuList = res.data.data
    },err => console.log(err))
  }
}
</script>

<style>

</style>