<template>
  <el-row :gutter="gutter" :type="type" :justify="justify" :align="align">
    <bc-col
      v-for="(item, index) in children"
      :key="index"
      v-bind="item.props"
    />
  </el-row>
</template>

<script>
import BCCol from "~/components/col";

export default {
  name: "BCRow",
  components: {
    BCCol,
  },
  props: {
    gutter: Number,
    type: String, // flex
    justify: String, // start/end/center/space-around/space-between
    align: String, // top/middle/bottom
    children: Array, // BCCol
  },
};
</script>