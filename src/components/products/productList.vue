<template>
  <div class="m-products-list">
      <ul>
          <li class="s-nav-active">智能排序</li>
          <li class="s-price">价格排序</li>
          <li>人气最高</li>
          <li>评价最高</li>
      </ul>
      <div>
          <product />
      </div>
  </div>
</template>

<script>
import Product from '@/components/products/product.vue'

export default {
    components:{
        Product

    }
}
</script>

<style lang='scss'>
    // @import '@/assets/css/products/list.scss'
</style>