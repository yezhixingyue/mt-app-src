<template>
  <div class="page-product">
      <el-row>
          <crumbs />
      </el-row>
      <el-row>
          <el-col :span="19">
              <category />
              <productList />
          </el-col>
          <el-col :span="5"></el-col>
      </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/products/crumbs.vue'
import Category from '@/components/products/category.vue'
import ProductList from '@/components/products/productList.vue'

export default {
    data(){
        return {
            dataName:''
        }
    },
    components:{
        Crumbs,
        Category,
        ProductList
    },
    methods:{
        update(data){
            console.log(data)
            // this.dataName = data
        }
    },
    beforeRouteUpdate(to,from,next){
        const name = to.params.name;
        // this.update(name);
        next()
    },
    mounted(){
        const name = this.$route.params.name;
        // this.update(name);

    }
}
</script>

<style lang='scss'>
    @import '@/assets/css/products/index.scss'
</style>