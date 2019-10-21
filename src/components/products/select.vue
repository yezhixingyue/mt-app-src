<template>
  <div class="tab">
      <dl :class="list.type">
        <dt>
          {{list.title}}
          <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd>
          <h3>{{list.title}}</h3>
          <span>全部</span>
          <span v-for="(item,index) in list.subList" :key="index" :id="item.id">{{item.name}}</span>
      
        </dd>
      </dl>
  </div>
</template>

<script>
export default {
  props:['list']
}
</script>

<style>

</style>