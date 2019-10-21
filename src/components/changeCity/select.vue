<template>
  <div class="choose-wrap" v-document_click="curFlag && pageClick">
    <div :class="{choose:true,disabled:status}" @click="provinceClick">
      <div>
        <span>{{province ? province : title}}</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div class="mt-content" :class="{active:active}" v-if="!status">
        <h2>{{title}}</h2>
        <div class="wrapper" :class="{city:title=='城市'}">
          <div class="col" v-for="(item,index) in renderList" :key="index">
            <span
              v-for="(list,index) in item"
              :key="'provincelist~'+index"
              @click="changeProvince($event,list)"
              class="mt-item"
              :class="{active:list.provinceName == province}"
            >{{list.provinceName || list.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["title", "listData", "active", "status"],
  data() {
    return {
      province: "",
      disabled: true,
      curFlag: true
    };
  },
  computed: {
    isDisabled() {
      return this.province == "省份";
    },
    renderList() {
      const num = Math.ceil(this.listData.length / 12);
      let list = [];
      for (var i = 0; i < num; i++) {
        list.push(this.listData.slice(i * 12, i * 12 + 12));
      }
      return list;
    }
  },
  methods: {
    ...mapActions(["getPosition"]),
    provinceClick(e) {
      e.stopPropagation();
      this.$emit("setActive", true);
    },
    changeProvince(e, data) {

      e.stopPropagation();
      if (data.provinceName) {
        this.province = data.provinceName;
        this.$emit("setActive", false);
        this.$emit("setStatus");
        this.$emit("setCityList", data.cityInfoList);
      }
      if (data.name) {
        this.getPosition(data.name);

        this.$router.replace('/index')

      }
    },
    pageClick() {
      this.$emit("setActive", false);
    }
  },
  mounted() {
    // console.log(this.renderList);
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>