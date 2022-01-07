
<template>
  <el-cascader
    :value="value"
    :options="options"
    :placeholder="placeholder"
    :emitPath="onlyUseLastPath"
  />
</template>

<script>
export default {
  name: "BCCascader",
  props: {
    value: [Array, String], // 默认只有叶子节点有效
    options: Array, // {label: String, value: String /* 叶子节点才有 */, children: Array /* 子节点, 非空判断则不是叶子节点 */ }
    placeholder: String,
    onlyUseLastPath: Boolean, // value 是否只返回最后一个值，而不是路径所组成的数组
  },
};
</script>
