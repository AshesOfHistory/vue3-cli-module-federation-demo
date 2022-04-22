<!--
 * @Author: 沧澜
 * @Date: 2022-04-18 16:09:43
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 18:00:06
 * @Description: 
-->

<template>
  <div class="hello">
    <SearchItem></SearchItem>
    <Card
      v-for="(item, index) in 6"
      :key="index"
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      origin-price="10.00"
    ></Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Card } from "vant";
import SearchItem from "../components/SearchItem.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    SearchItem,
    Card,
  },
});
</script>
