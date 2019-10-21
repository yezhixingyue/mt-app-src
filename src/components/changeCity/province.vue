<template>
  <div class="m-iselect">
    <span>按省份选择：</span>
    <m-select
      title="省份"
      :listData="provinceList"
      :status="provinceStatus"
      :active="provinceActive"
      @setActive="setProvinceActive"
      @setStatus="setStatus"
      @setCityList='setCityList'
    />
    <m-select
      title="城市"
      :listData="cityList"
      :status="cityStatus"
      :active="cityActive"
      @setActive="setCityActive"
    />
    <span class="name search">
      <span class="label">直接搜索：</span>
      <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="(item,index) in options"
          :key="item+'~'+index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </span>
  </div>
</template>

<script>
import MSelect from "./select.vue";
export default {
  props:['provinceList'],
  data() {
    return {
      provinceActive: false,
      cityActive: false,
      provinceStatus: false,
      cityStatus: true,
      loading: false,
      searchList: [],
      value: [],
      options: [],
      list: [],
      cityList:[]
    };
  },
  components: {
    MSelect
  },
  methods: {
    setProvinceActive(flag) {
      if (flag) {
        this.cityActive = false;
      }
      this.provinceActive = flag;
    },
    setCityActive(flag) {
      if (flag) {
        this.provinceActive = false;
      }
      this.cityActive = flag;
    },
    setStatus() {
      this.cityStatus = false;
    },
    setCityList(data){
      this.cityList = data
    },

    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    citySearch(item) {
      console.log(1111, item);
    }
  },
  mounted() {
    this.api.getCityList().then(
      res => {
        res.data.data.forEach(ele => {
          this.searchList.push(ele.name);
        });
        this.list = this.searchList.map(item => {
          return { value: item, label: item };
        });
      },
      err => console.log(err)
    );
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>

