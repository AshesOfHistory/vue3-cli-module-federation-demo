<!--
 * @Author: 沧澜
 * @Date: 2022-04-18 16:57:57
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 17:07:18
 * @Description: 
-->

<template>
  <div class="search">
    <Search v-model="value" placeholder="请输入搜索关键词"></Search>
    <Grid :column-num="3">
      <GridItem v-for="(item, index) in 6" :key="index" icon="photo-o" text="文字"></GridItem>
    </Grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Search, Grid, GridItem } from "vant";

export default defineComponent({
  name: "HelloWorld",
  components: {
    Search,
    Grid,
    GridItem,
  },
  props: {
    msg: String,
  },
  setup() {
    const value = ref("");
    return { value };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
