<!--
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 17:12:45
 * @Description: 
-->
<template>
  <div class="special">SpecialItem, {{ msg }}</div>
  <address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AddressList, Toast } from "vant";

export default defineComponent({
  name: "HelloWorld",
  components: { AddressList },
  props: {
    msg: String,
  },
  setup() {
    const chosenAddressId = ref("1");
    const list = [
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        isDefault: true,
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "浙江省杭州市拱墅区莫干山路 50 号",
      },
    ];
    const disabledList = [
      {
        id: "3",
        name: "王五",
        tel: "1320000000",
        address: "浙江省杭州市滨江区江南大道 15 号",
      },
    ];

    const onAdd = () => Toast("新增地址");
    const onEdit = (item: object, index: number) => Toast("编辑地址:" + index);

    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special {
  margin-top: 10px;
}
</style>
