<template>
  <div class="banner-row">
    <el-carousel height="">
      <el-carousel-item v-for="(item,index) in imgList" :key="'swiper-' + index" height='240px'>
        <img :src='item' />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ]
    };
  }
};
</script>

<style>
    .banner-row{
        height: 240px;
        width: 550px;
        padding: 10px;
        box-sizing: border-box;
        padding-bottom: 0;
    }
    .banner-row img{
        height: 100%;
        width: 100%
    }
    .el-carousel__container {
    position: relative;
    height: 240px !important;
    }
    /* .el-carousel.el-carousel--horizontal{
      width: 100%;
      height: 100%;
    } */
</style>



