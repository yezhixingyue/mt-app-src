<template>
  <div>
    <dl class="s-item" v-for="(item,index) in products" :key="index">
    <dt>
      <img
        :src="item.image"
      />
    </dt>
    <dd>
      <h3>{{item.title}}</h3>
      <el-rate v-model="rateValue" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      <span>{{rate}}</span>
      <span>{{item.score}}分</span>
      <span class="s-item-comment-total">{{item.commentNum}}人评论</span>
      <p>
          <span v-for="tag in item.tab" :key="tag">{{tag}}</span><em>|</em>
          <span>{{item.address}}</span>
          <b>
              <i class="el-icon-location"></i>
              <span>查看地图</span>
          </b>
      </p>
      <p>
          <span>人均¥{{item.avgPrice}}</span>
      </p>
      <ul class="deal-items">
          <li class="items">
              <p>
                <span class="s-item-price" style="font-size:14px">
                  八达岭长城
                </span>
                <span class="deal-title">、八达岭野生动物世界纯玩1日跟团游</span>
              </p>
              <div>
                  <span class="deal-price">￥88</span>
                  <span class="deal-old-price">门市价￥198</span>
                  <span class="deal-sales">已售6262</span>
              </div>
          </li>
      </ul>
      <div class="deal-items">
          
      </div>
    </dd>
  </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rateValue: 4.6,
      totalNum:24815,
      price:'人均¥106',
      products:[]
    };
  },
  computed:{
    rate(){
        const rateValue = this.rateValue
        if(rateValue>0 && rateValue<=2){
            return '差'
        } else if (rateValue>2 && rateValue<=3){
            return '一般'
        } else if(rateValue>3 && rateValue<=4){
            return '好'
        } else if(rateValue>4 && rateValue<=5){
            return '很好'
        }
    }
  },
  mounted(){
    this.api.getGoodsList().then(res=>{
        console.log(res.data.data)
        this.products = res.data.data
    },err => console.log(err))
  }
};
</script>

<style>
</style>