<template>
  <el-checkbox-group
    :value="value"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
  >
    <el-checkbox
      v-for="(item, index) in $_FMC_options"
      :key="index"
      :label="item.value"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: "FMCCheckbox",
  props: {
    value: Array, // [String]
    options: Array, // [{ label: String, value: String }]
    onlyUseLabel: Boolean,
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