
<template>
  <el-col :span="span">
    <slot />
  </el-col>
</template>
<script>
export default {
  name: "BCCol",
  props: {
    span: Number
  },
};
</script>
