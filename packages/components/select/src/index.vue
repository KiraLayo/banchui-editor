<template>
  <el-select
    :value="value"
    :multiple="multiple"
    :placeholder="placeholder"
    :filterable="filterable"
    clearable
  >
    <el-option
      v-for="(item, index) in $_FMC_options"
      :key="index"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: "FMCSelect",
  props: {
    value: [String, Array],
    options: Array,
    multiple: Boolean,
    filterable: Boolean,
    onlyUseLabel: Boolean,
    placeholder: String,
  },
  computed: {
    $_FMC_options() {
      if (this.onlyUseLabel) {
        var options = this.options.map((element) => ({
          label: element.label,
          value: element.label,
        }));
        return options;
      }
      return this.options;
    },
  },
};
</script>