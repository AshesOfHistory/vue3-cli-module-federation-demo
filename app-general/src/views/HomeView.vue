<template>
  <div class="home">
    <SearchItem></SearchItem>
    <div v-if="isLoadingComponent">Loading SpecialItem.vue</div>
    <SpecialItem msg="Project2 HomeView SpecialItem" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const isLoadingComponent = ref(true);

// 使用vue3提供的defineAsyncComponent钩子函数异步引入远程链接SpecialItem模块
const SpecialItem = defineAsyncComponent(() =>
  // 注意app_exposes是本项目中vue.config.js的ModuleFederationPlugin中配置的remotes中指定的名称。
  // 后面跟着的是在app-exposes项目的vue.config.js中exposes里配置的模块路径
  import("app_exposes/SpecialItem.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);

const SearchItem = defineAsyncComponent(() => import("app_exposes/SearchItem.vue"));
</script>
