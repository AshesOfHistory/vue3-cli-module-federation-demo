<!--
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 17:19:06
 * @Description: 
-->
<template>
  <div class="home">
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
    </Swipe>
    <Grid :column-num="3">
      <GridItem v-for="(item, index) in 6" :key="index" icon="photo-o" text="文字"></GridItem>
    </Grid>

    <SpecialItem msg="project1 HomeView specialItem"></SpecialItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
import SpecialItem from "../components/SpecialItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    SpecialItem,
  },
});
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
