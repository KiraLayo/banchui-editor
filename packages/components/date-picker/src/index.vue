
<template>
  <el-time-picker
    v-if="type == 'time'"
    :is-range="range"
    :placeholder="$_BC_placeholder"
    :start-placeholder="$_BC_placeholderStart"
    :end-placeholder="$_BC_placeholderEnd"
    editable
    clearable
  />
  <el-date-picker v-else-if="type == 'date' || type == 'dateTime'" />
</template>

<script>
export default {
  name: "BCDatePicker",
  props: {
    type: String, // date、dateTime、time
    isRange: Boolean, // dateRange、timeRange、dateTimeRange 是否使用范围选择器
    value: [Array, Date], // 如果是 range 类型，则需要是Array，[Date //开始, Date //结束]
    placeholder: [Array, String], // 如果是 range 类型，则需要是Array，[String //开始, String //结束]
  },
  computed: {
    $_BC_placeholder() {
      if (placeholder instanceof Array) {
        if (this.isRange) {
          return this.placeholder;
        }
        return this.placeholder.length > 0 ? this.placeholder[0] : null;
      }
      if (this.isRange) {
        return [this.placeholder, this.placeholder];
      }
      return this.placeholder;
    },
    $_BC_placeholderStart() {
      if (this.$_BC_placeholder instanceof Array) {
        return this.$_BC_placeholder.length > 0
          ? this._BC_placeholder[0]
          : null;
      }
      return this.$_BC_placeholder;
    },
    $_BC_placeholderEnd() {
      if (this.$_BC_placeholder instanceof Array) {
        return this.$_BC_placeholder.length > 1
          ? this._BC_placeholder[1]
          : null;
      }
      return this.$_BC_placeholder;
    },
  },
};
</script>

