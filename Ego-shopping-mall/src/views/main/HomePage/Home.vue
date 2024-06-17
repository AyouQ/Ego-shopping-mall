<template>
    <el-button @click="getMsg">获取Msg数据</el-button>
</template>

<script setup>

import api from '@/api';
const getMsg = ()=>{
  api.Msg().then(res=>{
    console.log(res.data)
  }).catch(err=>{
    console.log(err)
  })
}
</script>

<style lang="scss" scoped>

</style>