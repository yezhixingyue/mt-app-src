<template>
  <div>
      <dl class="m-categroy">
          <dt>按拼音首字母选择：</dt>
          <dd v-for="(item,index) in letterList" :key="item+index">
              <a :href="'#city-'+item">{{item}}</a>
          </dd>
      </dl>
      <div>
          <dl class='m-categroy-section' v-for="(item,key) in renderList" :key='key'>
            <dt :id="'city-' + key">{{key}}</dt>
            <dd>
              <span @click='toCity(city)' v-for='(city,index) in item' :key="index">{{city}}</span>
            </dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
    props:['renderList'],
    data(){
        return{
            letterList:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityData:null
        }
    },
    created(){

    },
    methods:{
        toCity(city){
            this.$store.dispatch('getPosition',city);
            this.$router.replace('/index')
        }
    }

}
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/category.scss'
</style>