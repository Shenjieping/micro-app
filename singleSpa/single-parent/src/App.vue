<template>
  <div id="app">
    <router-link to="/">首页</router-link> ||
    <!-- 当路由切换到 /vue 时加载子应用 -->
    <router-link to="/vue">加载vue应用</router-link>
    <router-view/>
    <!-- 子应用加载的位置 -->
    <div id="vue"></div>
  </div>
</template>

<style>
</style>
