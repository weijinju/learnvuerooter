<template>
  <div id="app">
  <h2>我是APP组件</h2>
    <router-link to="/home" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId" >用户</router-link>
    <img src="imgURL" alt="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    userId:'zhangsan',
    imgURL:'http://www/baifu.com/logo.png'
    }
  }
}
</script>

<style>
  .active{
    color:#f00
  }
</style>
