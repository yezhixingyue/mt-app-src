<template>
  <div :class="listData.class">
    <dl @mouseover="over">
      <dt>{{listData.tag.title}}</dt>
      <dd :data-type='index'  :class="{active:index == dd_index}" v-for="(item,index) in listData.tag.tagList" :key="listData.tag.title + '-' + item">{{item}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in getList" :key="'listdata-' + index">
          <router-link to="/">
        <el-card :body-style="{ padding: '0px' }" shadow="never"  >
          <img
            :src='item.image'
            class="image"
          />
          <div class="el-card__body">
            <div class="cbody">
              <div class="title">{{item.title}}
                  <span v-if="item.grade">{{item.grade}}</span>
              </div>
              <div class="sub-title">{{item.sub_title}}</div>
              <div class="bottom clearfix price-info" v-if="item.price_info">
                    <span class="price-symbol">￥</span>
                    <span class="current-price" v-if="item.price_info.current_price">
                        {{item.price_info.current_price}}
                    </span>
                    <span class="avg-price" v-if="!item.price_info.current_price && item.price_info.avg_price">
                        {{item.price_info.avg_price}}
                    </span>
                    <span class="old-price" v-if="item.price_info.old_price && !item.price_info.avg_price">
                        {{item.price_info.old_price}}
                    </span>
                    <span class="units" v-if="!item.price_info.current_price && item.price_info.avg_price && item.price_info.unit">
                        /{{item.price_info.unit}}
                    </span>
                    <span class="sold">
                        <template v-if="item.address">{{item.address}}</template>
                        <template v-if="item.saleNum">已售{{item.saleNum}}</template>
                    </span>
              </div>
            </div>
          </div>
        </el-card>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
    props:['listData','bool'],
    data(){
      return {
        showList:[],
        dd_index:0,
        classList:[],
        word:'all'
      }
    },
    computed:{
      getList(){
        if(this.listData.list instanceof Array){
          return this.listData.list
        }else{
          const prop = this.listData.tag.classList[this.dd_index];
          return this.listData.list[prop]
        }
      }
    },
    methods:{
        over(e){
            // console.log(e.target)
            const tag = e.target;
            const word = tag.getAttribute('data-type')
            if(word){
                // console.log(word)
                this.dd_index = tag.getAttribute('data-type')
            }
            // 然后根据条件获取数据渲染列表 切换下面展示内容  axios
        }
    }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>