<template>
  <div class="m-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>