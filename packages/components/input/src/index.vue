<template>
  <van-cell v-if="$_BC_isMobile">
    <van-field
      :value="value"
      :type="type"
      @input="$emit('input', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </van-cell>
  <el-form-item v-else>
    <el-input
      :value="value"
      :type="type"
      @input="$emit('input', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </el-form-item>
</template>
<script>
export default {
  name: "bc-input",
  props: {
    value: [String, Number],
    label: String,
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>