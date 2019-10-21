<template>
  <div class="m-product-categroy">
      <dl class="classic" v-for="(item,index) in classifyList" :key="index">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd class="m-product-select">
          <m-select :list='item' />
        </dd>
      </dl>

  </div>
</template>

<script>
import MSelect from './select.vue'
export default {
  data(){
    return {
      classifyList:[]
    }
  },
  components:{
    MSelect
  },
  mounted(){
    this.api.getClassify().then(res => {
      console.log(res.data.data)
      this.classifyList = res.data.data
    })
  }
}
</script>

<style>

</style>